import clsx from "clsx";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

export default function NavBar() {
  const { user } = useAuth();
  const context = useContext(BasketContext);

  if (!context) return null;
  const {basketCount} = useContext(BasketContext) ?? { basketCount: 0 };
  const getClasses = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.active);
  return (
    <nav className={styles.navBar}>
      <NavLink to="/" className={getClasses}>
        Home
      </NavLink>
      <NavLink to="/counter" className={getClasses}>
        Counter
      </NavLink>
      <NavLink to="/space-mission" className={getClasses}>
        Space mission
      </NavLink>
      <NavLink to="/about" className={getClasses}>
        {" "}
        About us{" "}
      </NavLink>
      <NavLink to="/contact" className={getClasses}>
        {" "}
        Contact{" "}
      </NavLink>
      <NavLink to="/profile" className={getClasses}>
        {" "}
        Profile{" "}
      </NavLink>
      <NavLink to="/users" className={getClasses}>
        {" "}
        Users{" "}
      </NavLink>
      {user ? (
        <LogoutButton />
      ) : (
        <>
          <NavLink to="/signup" className={getClasses}>
            {" "}
            Sign up{" "}
          </NavLink>
          <NavLink to="/signin" className={getClasses}>
            {" "}
            Sign in{" "}
          </NavLink>
        </>
      )}
      <NavLink to={"/basket"} className={getClasses}>  🛒
     {basketCount && basketCount > 0 && (
  <span>{basketCount}</span>)}

      </NavLink>
    </nav>
  );
}
