import React, { useState, useEffect } from "react";

const CommentForm = ({ blogId, addNewComment }) => {
  const [comment, setComment] = useState({
    comment_id: "",
    content: "",
    author: "",
    date: new Date().toISOString(),
  });
  const [error, setError] = useState(null) 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 
    try {
      // POST request to create a new comment
      const response = await fetch(
        `http://127.0.0.1:8000/blog/${blogId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...comment, blog_id: blogId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const data = await response.json();
      addNewComment(data.data); // Add the new comment to the list
      setComment({
        comment_id: "",
        content: "",
        author: "",
        date: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error:", error);
      setError(error.message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="content"
        placeholder="Add a comment"
        value={comment.content}
        onChange={handleChange}
        required
      />
      
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
