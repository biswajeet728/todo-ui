export interface IButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
}

export interface ITargetProps {
  id: string;
  title: string;
  description: string;
  statusIcon: React.ReactNode;
  status: string;
  deleteTarget: (id: string) => void;
  updateTarget: (id: string) => void;
}
