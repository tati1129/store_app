import { useState } from "react";
import { Button } from "../ui/Button/Button";


export default function Counter() {

    const headingText = "Counter";
    const [count, setCount] = useState(0);

    function handlePlus(){
        setCount((prev) => prev+1);
    }
     function handleMinus(){
        if(count>0){
            setCount((prev) => prev-1);
        }
    }
    function handleClear(){
        setCount(0);
    }

  return (
    <div>
        <h1>{headingText}</h1>
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={handleMinus}>-</Button>
        <Button onClick={handleClear}>X</Button>
    </div>
  )
}
