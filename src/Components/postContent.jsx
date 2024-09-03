import React from "react";

const PostContent = ({ postDescription, postUrl }) => {
  return (
    <div>
      <p>{postDescription}</p>

      <a href={postUrl} target="_blank">
        {" "}
        Read more
      </a>
    </div>
  );
};

export default PostContent;
