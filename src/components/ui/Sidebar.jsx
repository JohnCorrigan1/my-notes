import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import UpArrow from '../../assets/up_arrow.svg'
import ImageCard from '../tailwindComponents/myComponents/ImageCard'
import Modal from '../tailwindComponents/myComponents/Modal'
import NavBar from '../tailwindComponents/myComponents/NavBar'
import ImageCardWText from '../tailwindComponents/myComponents/ImageCardWText'


export default function Sidebar() {

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className=" drawer-content overflow-visible flex flex-col p-5">

                <div id='top' className='flex justify-center '> <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Component List</label></div>
                <Modal />
                <NavBar />
                <ImageCard />
                <ImageCardWText />

           
                    <HashLink to="#top" smooth>
                        <button className=' bg-slate-600 p-3 bottom-5 opacity-75 hover:opacity-95 rounded-full fixed right-5'><img src={UpArrow} alt="To Top"/></button>
                    </HashLink>
         

            </div>
            <div className="drawer-side ">

                <label id="top" htmlFor="my-drawer-2" className="drawer-overlay"></label>
            
                    <ul className="menu flex-nowrap p-4 overflow-y-scroll overflow-x-hidden w-80 text-base-content bg-slate-400 gap-3">
                        <Link to="/"><div className='p-2'><button className='btn w-full' >Home</button></div></Link>
                        <li><HashLink to="#modal" smooth className='bg-base-100 hover:bg-base-200'>Modal</HashLink></li>
                        <li><HashLink to="#nav" smooth className='bg-base-100 hover:bg-base-200'>Nav Bar</HashLink></li>
                        <li><HashLink to="#imgCard" smooth className='bg-base-100 hover:bg-base-200'>Image only Card</HashLink></li>
                        <li><HashLink to="#imgCardText" smooth className='bg-base-100 hover:bg-base-200'>Image Card With Text</HashLink></li>
                    </ul>
               
            </div>
        </div>

    )
}
