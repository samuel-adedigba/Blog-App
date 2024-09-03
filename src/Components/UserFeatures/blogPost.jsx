import React, { useState, useEffect } from "react";
import BlogForm from "./BlogForm";
import CommentForm from "./CommentForm";
import Reactions from "../Buttons/Reactions";

const BlogPost = () => {
  const [userBlog, setUserBlog] = useState([]);

  const addNewBlog = (blog) => {
    setUserBlog((prevBlogs) => [blog, ...prevBlogs]);
  };

  const addNewComment = (comment, blogId) => {
    setUserBlog((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog._id === blogId
          ? { ...blog, comments: [...(blog.comments || []), comment] }
          : blog
      )
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/all/blogs`);
        const data = await response.json();
        setUserBlog(data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {/* <BlogForm addNewBlog={addNewBlog} /> */}
      {userBlog.length === 0 && <i>No blogs available.</i>}
      {userBlog.map((blog, index) => (
        <div key={blog._id || index}>
          <h3>{blog.title}</h3>
          <h3>{blog.subtitle}</h3>
          <p>{blog.content}</p>
          <p>By: {blog.author}</p>
          <h3>{blog.tags && blog.tags.join(", ")}</h3>
          <p>Posted on: {new Date(blog.date).toLocaleDateString()}</p>
          {console.log("Blog ID:", blog._id)}
          <hr />
          <Reactions />
          <hr />
          <CommentForm
            blogId={blog._id}
            addNewComment={(comment) => addNewComment(comment, blog._id)}
          />
          <div>
            {blog.comments && blog.comments.length > 0 ? (
              blog.comments.map((comment, index) => (
                <div key={comment.comment_id || index}>
                  <h4>Comments:</h4>
                  <i>{comment.content}</i>
                  <i>Comment date: {new Date(comment.date).toLocaleString()}</i>
                </div>
              ))
            ) : (
              <i>No comments yet.</i>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
