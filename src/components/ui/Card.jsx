import React from 'react'

export default function Card(props) {

    const clickHandler = () => {
        props.setSelectedPage(props.title)
    }

  return (
    <div className="card w-96 bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={props.img} alt="Shoes" className="rounded-xl h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={clickHandler}>{props.button}</button>
    </div>
  </div>
</div>
  )
}
