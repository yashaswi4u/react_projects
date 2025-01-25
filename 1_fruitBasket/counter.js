import { useState } from "react"

export default function Counter() {
    const [count,setState]=useState(0)
  return (
    <div style={{
        textAlign:"center",
    }}>
        <p >{count}</p>
        <button onClick={()=>{
            setState(count+1)
        }}>Click</button>
    </div>
  )
}
