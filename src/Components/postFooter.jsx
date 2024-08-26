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
           <Link to={`/language/${lang}`} > <button key={i} > {lang}</button>  </Link>
        )) }
    </div>

      <div>
        {postCountry.map((country,i)=>(
         <Link to={`/country/${country}`}  >  <button key={i}> {country}</button>   </Link>
        ))}
      </div>
    </div>
  )
}

export default PostFooter
