import React, { useState } from 'react'

export default function ShortCircuit() {
    const [demo,setDemo]= useState('')
  return (
    <div>
        <h1>{demo || "Rajesh Kumar"} </h1>
        <h1>{demo && "Mohanta"}</h1>
      
    </div>
  )
}
