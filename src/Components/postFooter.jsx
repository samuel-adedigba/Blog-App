import React from 'react'
import { Link } from 'react-router-dom'

const PostFooter = ({postCategory,postLanguage, postCountry}) => {
  return (
    <div>
     <div>
       
       {postCategory.map((category,i)=>(
         <Link to={`/category/${category}`} >  
         <button key={i}> #{category}</button>
        </Link> 
      ))} 
      
    </div>

    <div>
        {postLanguage.map((lang,i)=>(
          <button key={i} > {lang}</button>
        )) }
    </div>

      <div>
        {postCountry.map((country,i)=>(
          <button key={i}> {country}</button>
        ))}
      </div>
    </div>
  )
}

export default PostFooter
