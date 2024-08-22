import React, {useState} from 'react'

const ProfilePost = () => {
    const [BlogTitle, setBlogTitle] =useState('')
    const [BlogImage, setBlogImage] =useState([])
    const [BlogBody, setBlogBody] =useState('')
    const [BlogAuthor, setBlogAuthor] =useState('')
  
            
    const handlePost=(e)=>{
               e.preventDefault()
             
            }
            

  return (
    <div>
        <form onSubmit={handlePost}>
            <label htmlFor="BlogImage">Post Cover Picture for Your Blog</label>
            <input type="file"
            value={BlogImage} 
            onChange={(e)=>setBlogImage(e.target.value)}/>

            
            <label htmlFor="BlogTitle">Blog Title</label>
            <input type="text"
            name='BlogTitle'
            value={BlogTitle}
            onChange={(e)=>setBlogTitle(e.target.value)}            
            />

            <label htmlFor="BlogBody">Blog Content</label>
            <textarea name="BlogBody" 
            value={BlogBody} 
            onChange={(e)=>setBlogBody(e.target.value)} 
            id="BlogBody" cols="30" rows="10"></textarea>

            <label htmlFor="BlogAuthor">Blog Title</label>
            <input type="text"
            name='BlogAthor'
            value={BlogAuthor}
            onChange={(e)=>setBlogAuthor(e.target.value)}            
            />
            <button type='submit' > UPLOAD</button>

        </form>


    </div>
  )
}

export default ProfilePost
