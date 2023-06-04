import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { ToastPosition, toast } from "@backpackapp-io/react-native-toast";
import { useModal } from "../store/zustand/useModal";
import { API } from "../apiUrl";

export const AuthContext = createContext<any>(null);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const targetModal = useModal();
  const [user, setUser] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [tasks, setTasks] = useState([]);

  // login user
  const registerUser = async (
    values: {
      name: string;
      email: string;
      password: string;
    },
    navigation: any
  ) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/api/auth/register`, values);
      if (res.data.success) {
        setLoading(false);
        setMessage(res.data.message);
        navigation.navigate("Login");
      }
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
      setMessage("");
      setError("");
    }
  };

  // login user
  const loginUser = async (values: { email: string; password: string }) => {
    if (values.email === "" || values.password === "") {
      toast.error("Please fill all the fields", {
        duration: 3000,
        position: ToastPosition.TOP,
      });
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API}/api/auth/login`, values);
      if (res.data.success) {
        setLoading(false);
        await SecureStore.setItemAsync("token", res.data.token);
        setUser(res.data.token);
      }
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
      setError("");
    }
  };

  // get user data

  const getUser = async () => {
    try {
      setLoading(true);
      const token = await SecureStore.getItemAsync("token");
      const res = await axios.get(`${API}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setUserData(res.data);
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
      setError("");
    }
  };

  // logout user
  const logoutUser = useCallback(async () => {
    try {
      setLoading(true);
      await SecureStore.deleteItemAsync("token");
      setUser(null);
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
      setError("");
    }
  }, [loading, user]);

  // add target
  const addTarget = async (
    values: { title: string; description: string },
    setValues: any
  ) => {
    if (values.title === "" || values.description === "") {
      toast.error("Please fill all the fields", {
        duration: 3000,
        position: ToastPosition.TOP,
      });
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${API}/api/tasks/add`,
        {
          title: values.title,
          description: values.description,
          user: userData?.data?._id,
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );

      if (res.data.success) {
        setLoading(false);
        setValues({ title: "", description: "" });
        toast.success(res.data.message, {
          duration: 3000,
          position: ToastPosition.TOP,
        });
        targetModal.closeModal();
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        duration: 3000,
        position: ToastPosition.TOP,
      });
    } finally {
      setLoading(false);
    }
  };

  // update target
  const updateTarget = async (id: any) => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });
      const data = await res.json();

      if (data.success) {
        setLoading(false);
        toast.success(data.message, {
          duration: 3000,
          position: ToastPosition.TOP,
        });
        await getTasks();
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        duration: 3000,
        position: ToastPosition.TOP,
      });
    } finally {
      setLoading(false);
    }
  };

  // get all targets
  const getTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/tasks/`, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });
      if (res.data) {
        setLoading(false);
        setTasks(res.data.data);
      }
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, [user]);

  // delete target
  const deleteTarget = useCallback(
    async (id: string) => {
      try {
        setLoading(true);
        const res = await axios.delete(`${API}/api/tasks/${id}`, {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        if (res.data.success) {
          setLoading(false);
          toast.success(res.data.message, {
            duration: 3000,
            position: ToastPosition.TOP,
          });
          getTasks();
        }
      } catch (error: any) {
        toast.error(error.response.data.message, {
          duration: 3000,
          position: ToastPosition.TOP,
        });
      } finally {
        setLoading(false);
      }
    },
    [tasks, user]
  );

  // check if user is logged in

  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const token = await SecureStore.getItemAsync("token");
        if (token) {
          setLoading(false);
          setUser(token);
        }
      } catch (error: any) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
        setError("");
      }
    };
    checkUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        getUser,
        logoutUser,
        userData,
        loading,
        message,
        error,
        addTarget,
        tasks,
        getTasks,
        deleteTarget,
        updateTarget,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
