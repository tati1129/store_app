import  { useEffect, useState } from 'react'

export const RandomDog = () => {
    const [picture, setPicture] = useState("");
    useEffect(()=> {
        async function fetchDog() {
            const res = await fetch("https://dog.seo/api/breeds/image/random");
            const data = await res.json();
             const {message} = data;
            setPicture(message);
        }
     fetchDog();
    },[])
  return (
    <div><img src={picture} alt="dog" /></div>
  )
}
