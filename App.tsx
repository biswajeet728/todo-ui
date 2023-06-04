import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./Main";
import { AuthContextProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Main />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
