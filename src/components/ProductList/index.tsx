import { useEffect, useState } from "react"
import type Product from "../../types/Product";
import { Link } from "react-router-dom";


export default function ProductList() {
  const [products, setProducts]= useState<Product[]>([]);
  useEffect(()=> {
    async function fetchProducts() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data);
    } 
    fetchProducts();
  },[])

  return (
    <div>
      <h2>ProductList</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}><Link to={`/catalog/products/${prod.id}`}>{prod.title}</Link></li>
        ))}
      </ul>
      </div>
  )
}
