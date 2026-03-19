import { NavLink } from "react-router-dom";
import s from "./Home.module.css";

export default function Home() {
  return (
    <div className={s.container}>
      <aside className={s.leftAside}>
        <nav className={s.navItems}>
          <NavLink to="/catalog/categories">Categories</NavLink>
          <NavLink to="/catalog/products">Products</NavLink>
        </nav>
      </aside>

      <div className={s.catalogInfo}>
        <h2>Каталог</h2>
        <p>Выберите категорию или продукты</p>
        <div>
        <NavLink to="/catalog/categories/create">Add category</NavLink>
        <NavLink to="/catalog/products/create">Add product</NavLink>

        </div>
      </div>
    </div>
  );
}
