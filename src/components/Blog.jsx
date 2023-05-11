import React from "react";

import BlogItem from "./BlogItem";

import "./blog.css";

import blog01 from "../assets/blog01.jpg";
import blog02 from "../assets/blog02.jpg";
import blog03 from "../assets/blog03.jpg";
import blog04 from "../assets/blog04.jpg";
import blog05 from "../assets/blog05.jpg";
import blog06 from "../assets/blog06.jpg";

const blogData = [
  {
    postTitle: "First post",
    postImg:
      "https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475659_960_720.jpg",
    postDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.",
    postTechnology: "React + Next.js",
  },
  {
    postTitle: "Second post",
    postImg:
      "https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475663_960_720.jpg",
    postDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.",
    postTechnology: "React + Next.js",
  },
  {
    postTitle: "Third post",
    postImg:
      "https://cdn.pixabay.com/photo/2019/10/23/09/25/board-4570995_960_720.jpg",
    postDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.",
    postTechnology: "React + Next.js",
  },
  {
    postTitle: "Fourth post",
    postImg:
      "https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475655_960_720.jpg",
    postDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.",
    postTechnology: "React + Next.js",
  },
  {
    postTitle: "Fifth post",
    postImg:
      "https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475656_960_720.jpg",
    postDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.",
    postTechnology: "React + Next.js",
  },
  {
    postTitle: "Sixth post",
    postImg:
      "https://cdn.pixabay.com/photo/2020/07/23/15/34/mother-board-5431664_960_720.jpg",
    postDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.",
    postTechnology: "React + Next.js",
  },
];

function Blog() {
  return (
    <div className="app__blog app__wrapper" id="projects">
      {blogData.map((post) => (
        <BlogItem
          postTitle={post.postTitle}
          postDesc={post.postDesc}
          postImg={post.postImg}
          postTechnology={post.postTechnology}
        />
      ))}
    </div>
  );
}

export default Blog;
