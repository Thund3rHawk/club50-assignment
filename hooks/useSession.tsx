import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const useSession = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext is not provided");
  }
  return context;
};

export default useSession;
