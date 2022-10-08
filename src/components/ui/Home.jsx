import React from 'react'
import Card from './Card'
import puzzle from './../../assets/puzzle.jpg'
import notes from './../../assets/notes.png'

export default function Home() {
  return (
    <div className='flex gap-10 justify-center h-full mt-10'>
        <Card 
        title="Components" 
        img={puzzle}
        description="Custom react components with basic styling using tailwind css."
        button="View Components"/>
        <Card 
        title="General Notes"
        img={notes}
        description="Anything I find important that feel lik jotting down in my own words to come back to later."
        button="View Notes"/>
    </div>
  )
}
