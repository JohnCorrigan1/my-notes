import React from 'react'
import Block from '../Block'

const code = ` <div className='flex justify-center'>
<div className='flex  gap-10 w-2/3 justify-center bg-slate-100 p-5 shadow-lg drop-shadow-lg'>
    <Image src={Person}/>
    <div className='flex flex-col'>
        <p>This is just some random text to show the layout blah blah blah lorem ipsum lorem ipsum lorem ipsum.</p>
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