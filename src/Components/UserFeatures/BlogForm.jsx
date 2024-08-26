import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogForm = ({ addNewBlog }) => {
  const [BlogTitle, setBlogTitle] = useState("");
  const [BlogImage, setBlogImage] = useState(null);
  const [BlogBody, setBlogBody] = useState("");
  const [BlogAuthor, setBlogAuthor] = useState("");

  const setImage = (e) => {
    setBlogImage(e.target.files[0]);
  };

  const handlePost = async(e) => {
    e.preventDefault();
    //create an object for the blog post form
    const blogFormDetails = {
      BlogTitle,
      BlogImage: URL.createObjectURL(BlogImage),
      BlogBody,
      BlogAuthor,
      createdAt: new Date().toLocaleDateString(),
    };
    //call on the blog object post details, with a function so it can collect and post it
    addNewBlog = () => blogFormDetails;
    console.log("blogFormDetails:", blogFormDetails);

    //reset the form
    setBlogTitle("");
    setBlogAuthor("");
    setBlogImage(null);
    setBlogBody("");
  };

  return (
    <form onSubmit={handlePost}>
      <label htmlFor="BlogImage">Post Cover Picture for Your Blog </label>
      <input type="file" onChange={setImage} />

      <label htmlFor="BlogTitle">Blog Title</label>
      <input
        type="text"
        name="BlogTitle"
        value={BlogTitle}
        onChange={(e) => setBlogTitle(e.target.value)}
      />

      <label htmlFor="BlogBody">Blog Content</label>
      <ReactQuill
        name="BlogBody"
        value={BlogBody}
        onChange={setBlogBody}
        id="BlogBody"
      />

      <label htmlFor="BlogAuthor">Blog Title</label>
      <input
        type="text"
        name="BlogAuthor"
        value={BlogAuthor}
        onChange={(e) => setBlogAuthor(e.target.value)}
      />
      <button type="submit"> UPLOAD</button>
    </form>
  );
};

export default BlogForm;
