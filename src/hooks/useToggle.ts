import { useState } from "react";

export default function useToggle(value: boolean=true){
    const [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle((prev) => !prev);
    }
    return {toggle, handleToggle};
}