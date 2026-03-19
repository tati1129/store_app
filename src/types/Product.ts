import type Category from "./Category";
export default interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images:string[];
}
