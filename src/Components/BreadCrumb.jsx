import React from 'react'
import {Link, useParams} from 'react-router-dom'
const BreadCrumb = () => {
    const { categoryName, languageName, countryName }= useParams()
  return (
    <div>
      <Link to={`/category/ ${categoryName}`}> {categoryName}</Link>
    </div>
  )
}

export default BreadCrumb
