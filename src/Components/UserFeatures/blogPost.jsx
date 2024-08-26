import React, { useState, useEffect } from "react";
import BlogForm from "./BlogForm";

const BlogPost = () => {
  const [userBlog, setUserBlog] = useState([]);
  //const [error, setError] = useEffect('')
  // function that combines and shows the new blog post created and the old post
  

  useEffect(()=>{
    const fetchPost = async () => {
      try {
        const response = await fetch('http://localhost:5173/home')
        const data = await response.json()
        setUserBlog(data)
      } catch (error) {
        //console.log(error.message)
      }
    }
    fetchPost()
  },[])


const blogs = async(blogFormDetails) => {
  try {
    const response =await fetch('http://localhost:5173/profile',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(blogFormDetails)
    })
    const newBlog = await response.json()
    setUserBlog([newBlog, ...userBlog]);
    
  } catch (error) {
    console.error("Error posting new blog:", error.message);
  }   
  };


  return (
    //passed in addNewBlog from the BlogForm as a props
    <div>
      {/* <BlogForm addNewBlog={blogs} /> */}
      {userBlog.length === 0 && <i>No blogs available.</i>}
      {userBlog.map((blog, i) => (
        <div key={i}>
          <p> {blog.BlogTitle} </p>
          <img src={blog.BlogImage} alt={blog.BlogTitle} />
          <p> {blog.BlogBody} </p>
          <p> {blog.BlogAuthor} </p>
          <p>Posted on: {blog.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
