import {useState, type ReactNode } from "react";
import type BasketItem from "../types/BasketItem";
import { BasketContext } from "../context/BasketContext";

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const clearBasket = () => setBasket([]);
   const addToBasket = ((item: BasketItem) => {
    setBasket(prev => {
      const exist = prev.find(p => p.id === item.id);
      if(exist){
         return prev.map(i =>
            i.id ===item.id ? {...i, quantity: i.quantity + item.quantity || 1} : i
        );
    }else{
return[...prev, item]
        }
    })
  })

  const basketCount = basket.reduce((sum, item) => sum+ item.quantity, 0)

  return (
    <BasketContext.Provider value={{ basket, setBasket, addToBasket ,clearBasket ,basketCount}}>
      {children}
    </BasketContext.Provider>
  );
};
