
import { useContext } from 'react';
import { BasketContext } from '../../context/BasketContext'
import type BasketItem from '../../types/BasketItem';

export default function BasketPage() {
const basketContext = useContext(BasketContext);
if (!basketContext) throw new Error("BasketContext must be used within BasketProvider");

const {basket,clearBasket} = basketContext;

  return (

    <div>
        <h2>Basket</h2>
        {basket.length === 0 ? 
        (<p> is empty </p>) : 
        (<div>
          {basket.map((item: BasketItem) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: {item.price* item.quantity}</p>
            </div>
          ))}
          <button onClick={clearBasket}>Clear basket</button> </div>)
        }
    </div>
  )
}

