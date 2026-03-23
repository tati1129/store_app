import { NavLink } from "react-router-dom";
import s from "./Home.module.css";
import Toggle from "../../components/Toggle";
import { useState } from "react";
import { ChildA } from "../../components/ChildA";
import { ChildB } from "../../components/ChildB";

export default function Home() {
  const [count, setCount ] = useState(0); 
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

        <Toggle value={false}/>
        <Toggle value={true}/>

        <ChildA count={count} setCount={setCount}/>
        <ChildB count={count} setCount={setCount}/>

        </div>
      </div>
    </div>
  );
}
