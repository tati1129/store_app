import { createContext } from "react";
import type BasketItem from "../types/BasketItem";

interface BasketContextValue{
    basket: BasketItem[];
    setBasket: (items: BasketItem[]) =>void;
    addToBasket: (items: BasketItem) => void;
    clearBasket: () => void;
    basketCount?: number;
}

export const BasketContext = createContext<BasketContextValue | undefined>(undefined);