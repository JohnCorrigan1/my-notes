import React from 'react'
import Sidebar from './Sidebar'

export default function Components(props) {
  return (
    <div>
        <Sidebar setSelectedPage={props.setSelectedPage} />
    </div>
  )
}
