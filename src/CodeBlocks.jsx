import React from 'react'
import Block from './Block'

const modal = ` 
<>
  <div className=' bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-50' ></div>
    <div className='bg-white flex flex-col gap-10 items-center  p-12 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-5/6 max-w-lg z-50' >
      <h1 className='text-2xl font-bold'>{props.text}</h1>
    <div className='flex flex-col justify-center items-center gap-10'>
      <button onClick={props.onClose} className='rounded-lg w-fit p-3 bg-cyan-500 hover:bg-cyan-600 shadow-md shadow-slate-500 text-xl'>{props.buttonText}</button>
      {props.over && <button className=' hover:bg-rose-600 text-xl rounded-lg bg-rose-500 w-fit p-3 shadow-md shadow-slate-500' onClick={homeHandler}>Back Home</button>}
    </div>
  </div>
</> 
  `

export default function CodeBlocks() {
  return (
    <div className='flex justify-center'>
      
        <Block 
        code={modal}
        language='jsx'
        title="Simple Modal"
        />
    </div>
  )
}
