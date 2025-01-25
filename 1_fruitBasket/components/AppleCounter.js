import React, { useState } from 'react'
import Buttons from './Buttons'
import './AppleCounter.css'
import leftBtn from '../src/left.png'
import rightBtn from '../src/right.png'





// let rightAppleCount=0;
// let leftAppleCount=totalAppleCount - rightAppleCount

import AppleBasket from './AppleBasket'
const AppleCounter = ({onClick}) => {
   const totalAppleCount=10;
  const [rightAppleCount,setRightAppleCount]=useState(0);
  const [leftAppleCount,setLeftAppleCount]=useState(totalAppleCount-rightAppleCount)
  const leftClickHandler=()=>{
    if(rightAppleCount!=0){
      setLeftAppleCount(leftAppleCount+1)
      setRightAppleCount(rightAppleCount-1)
     
    }
  }
  const rightClickHandler=()=>{
    if(leftAppleCount!=0){
      setLeftAppleCount(leftAppleCount-1);
      setRightAppleCount(rightAppleCount+1);
    }
  }
  return (
    <>
    <section className='container-baap' onClick={onClick}>
        <AppleBasket appCount={leftAppleCount } basketName="basket 1"/>
    <Buttons clickHandler={leftClickHandler} imgUrl={leftBtn}/>
    <Buttons clickHandler={rightClickHandler} imgUrl={rightBtn}/>
    <AppleBasket appCount={rightAppleCount } basketName="basket 2"/>
    </section>
    <p style={{
      textAlign:"center",
    }}>
      <button>re-render</button>
    </p>
    </>

    
  )
}

export default AppleCounter
