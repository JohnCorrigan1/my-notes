import React from 'react'
import Block from '../Block'

const code = ` <div className='flex justify-center'>
<div className='flex  gap-10 w-2/3 justify-center bg-slate-100 p-5 shadow-lg drop-shadow-lg'>
    <Image src={Person}/>
    <div className='flex flex-col'>
        <p>I am currently focuses on learning all things web development. Outside of code I like to play video games, fish, and work at job epic gamer alert.</p>
        <div className='flex gap-5 mt-auto justify-center items-center'>
            <a href="https://www.linkedin.com/in/john-corrigan322/" target="_blank"><Image className="cursor-pointer" src={Linkedln} height={40} width={40} /></a>
            <a href="https://github.com/JohnCorrigan1" target="_blank"><Image className="cursor-pointer" src={Github} height={40} width={40} /></a>
            <Image className="cursor-pointer" src={Gmail} height={40} width={40} />
            <Image className='cursor-pointer' src={Twitter} height={40} width={40} />
        </div>
    </div>
</div>
</div>`

export default function  ImageCardWText() {
  return (
    <div id="imgCardText">
    <Block
    title="Image Card With Text"x
    code={code}
    language="jsx"
    />
    </div>
  )
}