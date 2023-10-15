import React, { useReducer } from 'react'

const initialState=5;

const reducer=(state, action)=>{

switch (action) {
  case 'INCRIMENT':
    return state+1;
    
  case 'DICRIMENT':
    return state-1;

  default:
    return state;
}


}

const Reducer = () => {
    const [state, dispatch]=useReducer(reducer, initialState)
    console.log(state)
  return (
    <div>
        <h1 className='mt-20 text-center'>{state}</h1>
      <button onClick={()=>dispatch("INCRIMENT")} className='font-semibold px-5 py-2 border rounded-lg block mx-auto'>Iin</button>
      <button onClick={()=>dispatch("DICRIMENT")} className='font-semibold px-5 py-2 border rounded-lg block mx-auto'>De</button>
      <button className='mt-20'>Hello</button>
    </div>
  )
}

export default Reducer
