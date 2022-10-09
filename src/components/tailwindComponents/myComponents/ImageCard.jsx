import React from 'react'
import Block from '../Block'

const code = ` <div className="card p-5 flex justify-center items-center bg-slate-200 rounded-lg shadow-md shadow-slate-600">{props.children}</div>`

export default function ImageCard() {
    return (
        <div id="imgCard">
        <Block
        title="Image only Card"x
        code={code}
        language="jsx"
        />
        </div>
    )
}
