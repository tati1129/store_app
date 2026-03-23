import React, { type FC } from 'react'
interface Props{
count:number;
setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const ChildA:FC<Props> = ({count,setCount}) => {
  return (
    <div>
      <h2>ChildA</h2>
      Count: {count}
      <button type="button" onClick={() => {
          setCount((prev) => prev + 1);
        }}
> + 1 </button>
    </div>
  )
}
