import { NavLink, Outlet } from "react-router-dom"
import s from "./CatalogLayouts.module.css"

export default function CatalogLayouts() {
  return (
    <div className={s.container}>
        <aside className={s.leftAside}>
            <nav className={s.navItems}>
                <NavLink to="/catalog/categories">Categories</NavLink>
                <NavLink to="/catalog/products">Products</NavLink>
            </nav>
        </aside>
        <div className={s.content}>
            <Outlet/>
        </div>
    </div>
  )
}
