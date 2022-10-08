import React from 'react'

export default function Header() {
  return (
    <div className='p-3 bg-rose-200'>
        <nav className='flex justify-between mr-5 ml-5'>   
        <h1 className='text-2xl hover:font-bold hover:cursor-pointer'>My Notes and Components</h1>
        <ul className='flex gap-10'>
            <li className='hover:underline hover:cursor-pointer'>Notes</li>
            <li className='hover:underline hover:cursor-pointer'>Algos</li>
            <li className='hover:underline hover:cursor-pointer'>Tailwind Components</li>
        </ul>
        </nav>
    </div>
  )
}
