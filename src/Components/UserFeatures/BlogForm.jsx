import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogForm = ({ addNewBlog }) => {
  const [blog, setBlog] = useState({
    title: "",
    subtitle: "",
    content: "",
    author: "",
    tags: [],
    date: new Date().toISOString(),
    comments: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleTagsChange = (e) => {
    setBlog({
      ...blog,
      tags: e.target.value.split(",").map((tag) => tag.trim()),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/new/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      addNewBlog(data);
      setBlog({
        title: "",
        subtitle: "",
        content: "",
        author: "",
        tags: [],
        date: new Date().toISOString(),
        comments: []
      });
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={blog.title}
        autoComplete="on"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subtitle"
        placeholder="Subtitle"
        value={blog.subtitle}
        autoComplete="on"
        onChange={handleChange}
        required
      />
      <ReactQuill
        name="content"
        placeholder="Write Your Blog Content here..."
        value={blog.content}
        autoComplete="on"
        onChange={(content)=> setBlog({...blog, content})}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={blog.author}
        autoComplete="on"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tags"
        placeholder="Enter tags, separated by commas"
        value={blog.tags.join(", ")}
        onChange={handleTagsChange}
        required
      />
      <button type="submit">Create Your Blog </button>
    </form>
  );
};

export default BlogForm;

{
  /* <label htmlFor="BlogImage">Post Cover Picture for Your Blog </label>
      <input type="file" onChange={(e)=> e.target.files[0]} /> */
}
