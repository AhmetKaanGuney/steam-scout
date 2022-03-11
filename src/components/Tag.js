import React from 'react'
import { Link } from 'react-router-dom'

export default function Tag({name, id}) {
  return (
    <li>
      <Link to={"/GetTag/" + id.toString()} className="highlight-tag">
        {name}
      </Link>
    </li>
  )
}
