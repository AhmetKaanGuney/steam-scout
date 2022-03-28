import React from 'react'
import { Link } from 'react-router-dom'

export default function Tag({name, id}) {
  return (
    <Link to={"/GetTag/" + id.toString()} className="highlight-tag">
      {name}
    </Link>
  )
}
