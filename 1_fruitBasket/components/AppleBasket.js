import React from 'react'

 const AppleBasket = ({appCount,basketName}) => {
  return (
   <div className="basket1">
    <h1>
        <span>{appCount} </span>apples
    </h1>
    <p>{basketName}</p>
   </div>
  )
}

export default AppleBasket