import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Modal from '../tailwindComponents/myComponents/Modal'
import NavBar from '../tailwindComponents/myComponents/NavBar'


export default function Sidebar(props) {

    const homeHandler = () => {
        props.setSelectedPage(null)
    }

    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className=" drawer-content overflow-visible flex flex-col p-5">


                <div id='top' className='flex justify-center'> <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label></div>
                <Modal />
                <NavBar />

                <BrowserRouter>
                    <HashLink to="#top" smooth>
                        <button className='btn bottom-5 fixed right-5'>To Top</button>
                    </HashLink>
                </BrowserRouter>

            </div>
            <div className="drawer-side ">

                <label id="top" htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <BrowserRouter >
                    <ul className="menu flex-nowrap p-4 overflow-y-scroll overflow-x-hidden w-80 text-base-content bg-slate-400 gap-3">
                        <div className='p-2'><button onClick={homeHandler} className='btn w-full' >Home</button></div>
                        <li><HashLink to="#modal" smooth className='bg-base-100 hover:bg-base-200'>Modal</HashLink></li>
                        <li><HashLink to="#nav" smooth className='bg-base-100 hover:bg-base-200'>Nav Bar</HashLink></li>
                        <li><HashLink to="#top" smooth className='bg-base-100 hover:bg-base-200'>Update Me</HashLink></li>
                        <li><HashLink to="#" smooth className='bg-base-100 hover:bg-base-200'>Update Me</HashLink></li>
                    </ul>
                </BrowserRouter>
            </div>
        </div>

    )
}
