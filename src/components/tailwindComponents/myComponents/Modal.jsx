import React from 'react'
import Block from './../Block'

const modal = ` 
if (!props.open) return null

return (
<>
  <div className='modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-50' ></div>
    <div className='bg-white flex flex-col gap-10 items-center p-12 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-lg z-50'>
      <h1 className='text-2xl font-bold'>Title</h1>
    <div className='flex flex-col justify-center items-center gap-10'>
      <button className='rounded-lg w-fit p-3 bg-cyan-500 hover:bg-cyan-600 shadow-md shadow-slate-500 text-xl'>Btn 1</button>
      <button className=' hover:bg-rose-600 text-xl rounded-lg bg-rose-500 w-fit p-3 shadow-md shadow-slate-500'>Btn 2</button>
    </div>
  </div>
</> 
)
  `

  const mediaQuery = `
  @media (max-width: 800px){
    .modal{
        width: 70%;
        padding: 0px;
    }
  }`

export default function Modal() {
  return (
    <div className='flex justify-center flex-col'>
      
        <Block 
        code={modal}
        language='jsx'
        title="Simple Modal"
        />

        <Block 
        code={mediaQuery}
        language='css'
        title="Modal Media Query"/>


    </div>
  )
}