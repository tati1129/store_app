import { useEffect, useState } from "react"
import type Category from "../../types/Category"
import { Link } from "react-router-dom";


export default function CategoryList() {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        async function fetchCategory() {
           const res = await fetch("https://api.escuelajs.co/api/v1/categories");
           const data = await res.json();
           setCategories(data)
        }
        fetchCategory()
    },[])
  return (
    <div>
        <h2>CategoryList</h2>
        <ul>
            {categories.map((categ)=>(
                <li key={categ.id}><Link to={`/catalog/categories/${categ.id}`}>{categ.name}</Link></li>
            ))}
        </ul>
        </div>
  )
}
