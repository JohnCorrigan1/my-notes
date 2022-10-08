import React from 'react'
import Modal from '../tailwindComponents/myComponents/Modal'

export default function Sidebar(props) {

    const homeHandler = () => {
        props.setSelectedPage(null)
    }

  return (
   
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className=" drawer-content overflow-visible flex flex-col p-5">


    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Modal />

  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu flex-nowrap p-4 overflow-y-scroll overflow-x-hidden w-80 text-base-content bg-slate-400 gap-3">
    <div className='p-2'><button onClick={homeHandler} className='btn w-full' >Home</button></div>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 1</a></li>
      <li><a className='bg-base-100 hover:bg-base-200'>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
   
  )
}
