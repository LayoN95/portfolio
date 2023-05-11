import React from "react";

import "./blogItem.css";

function BlogItem({ postImg, postTitle, postDesc, postTechnology }) {
  return (
    <div className="blog__item">
      <div className="blog__item-img">
        <img src={postImg} alt="post img" />
      </div>
      <div className="blog__item-info">
        <h1>{postTitle}</h1>
        <p>{postTechnology}</p>
        <p>{postDesc}</p>
        <p>Read more...</p>
      </div>
    </div>
  );
}

export default BlogItem;
