import React, { useState } from 'react'

function Counter({initialcount=0}) {
    const [count,setcount] = useState(initialcount)
   
    function inc(){
        setcount(count+1)
    }

    function dec(){
        setcount(count-1)
    }
  return (
    <div className='border border-success p-2 m-2'>
        <h1>Counter</h1>
        <button onClick={inc}>Increment</button>
        {count}
        <button onClick={dec}>Decrement</button>

    </div>
  )
}

export default Counter