import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={props.img} alt="Shoes" className="rounded-xl h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions">
      <Link to={props.link}><button className="btn btn-primary">{props.button}</button></Link>
    </div>
  </div>
</div>
  )
}
