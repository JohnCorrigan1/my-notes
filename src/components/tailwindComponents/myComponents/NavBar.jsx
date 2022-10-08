import React from 'react'
import Block from '../Block'

const code = `<div className='p-3 bg-rose-200'>
    <nav className='flex justify-between mr-5 ml-5'>   
        <h1  className='text-2xl hover:font-bold hover:cursor-pointer'>My Poject Title</h1>
        <ul className='flex gap-10'>
            <li className='hover:underline hover:cursor-pointer'>About</li>
            <li className='hover:underline hover:cursor-pointer'>Experience</li>
            <li className='hover:underline hover:cursor-pointer'>Projects</li>
        </ul>
    </nav>
</div>`

export default function  NavBar() {
  return (
    <div id="nav">
    <Block
    title="Nav Bar/Header"x
    code={code}
    language="html"
    />
    </div>
  )
}
