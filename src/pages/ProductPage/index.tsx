import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type Product from "../../types/Product";

export default function ProductPage() {
  const { id } = useParams();
  // ничего не принимает, возвращает объект в котором переменные пути
  // path variable
  // - используется для доступа к значениям переменных путей
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);
  return (
    <div>
      <h1>{product?.title}</h1>
      <img src={product?.images[0]} alt={product?.title} />
      <p>{product?.price}</p>
    </div>
  );
}
