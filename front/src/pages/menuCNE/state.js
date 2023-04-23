import { useNavigate } from "react-router-dom";
import { useApp } from "../../context";

export const useMenuCNEState = () => {
  const { setUser } = useApp();

  const navigate = useNavigate();

  const handleLogout = () => {
    if (!confirm("Tem a certeza que pretende sair ?")) return;

    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return { handleLogout };
};
