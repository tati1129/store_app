import { NavLink } from "react-router-dom";
import s from "./ProfileLayout.module.css"


export default function ProfileLayouts() {
  return (
    <div className={s.container}>
        <aside className={s.leftAside}>
            <nav className={s.navItems}>
                <NavLink to="./profile/settings">Settings</NavLink>
                <NavLink to="./profile/personal-info">Personal information</NavLink>
            </nav>
        </aside>
    </div>
  )
}
