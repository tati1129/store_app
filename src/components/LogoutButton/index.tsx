import useAuth from "../../hooks/useAuth";
import { Button } from "../ui/Button/Button";

export default function LogoutButton() {
  const { setUser } = useAuth();
  function handleLogout() {
    setUser(undefined);
    localStorage.removeItem("access_token");
  }
  return <Button onClick={handleLogout}>Logout</Button>;
}