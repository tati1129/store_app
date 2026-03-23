import { useContext, useEffect, useState } from "react";
import type Product from "../../types/Product";
import { Link } from "react-router-dom";
import s from "./ProductLst.module.css";
import { BasketContext } from "../../context/BasketContext";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const basketContext = useContext(BasketContext);
  if (!basketContext)
    throw new Error("BasketContext must be used within BasketProvider");
  const { addToBasket } = basketContext;
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>ProductList</h2>
      <div className={s.productList}>
        {products.map((prod) => (
          <div key={prod.id} className={s.container}>
            <Link to={`/catalog/products/${prod.id}`}>
              <div className={s.productImage}>
                <img
                  src={prod.images[0]}
                  alt={prod.title}
                  className={s.image}
                />
                <p className={s.productTitle}>{prod.title}</p>
              </div>
            </Link>
            <div className={s.productInfo}>
              <p>Price: {prod.price}</p>
              <button
                type="button"
                className={s.addToCartButton}
                onClick={() =>
                  addToBasket({
                    id: prod.id,
                    name: prod.title,
                    image: prod.images[0],
                    price: prod.price,
                    quantity: 1,
                  })
                }
              >
                🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
