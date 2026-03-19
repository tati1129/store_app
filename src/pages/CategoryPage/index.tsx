import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type Category from "../../types/Category";

export default function CategoryPage() {
  const { id } = useParams();
  // ничего не принимает, возвращает объект в котором переменные пути
  // path variable
  // - используется для доступа к значениям переменных путей

  const [category, setCategory] = useState<Category | undefined>(undefined);
   
  useEffect(() => {
    async function fetchCategories() {
        const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
        const data = await res.json();  
        setCategory(data);
    }
    fetchCategories();
  },[id])
  return <div>
    <h1>{category?.name}</h1>
    <img src={category?.image} alt={category?.name} />
  </div>;
}
