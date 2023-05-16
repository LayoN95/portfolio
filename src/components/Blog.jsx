import React, { useEffect, useState } from "react";

import BlogItem from "./BlogItem";

import "./blog.css";


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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://portfolio-e9533-default-rtdb.firebaseio.com/projects.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          id: responseData[key].id,
          postTitle: responseData[key].postTitle,
          postDesc: responseData[key].postDesc,
          postImg: responseData[key].postUrl,
          postTechnology: responseData[key].postTechnology,
        });
      }
      setData(loadedData);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      // setHttpError(error.message);
    });
  }, []);
  if (!isLoading) console.log(data);

  return (
    <div className="app__blog app__wrapper" id="projects">
      <div className="app__blog-heading heading-text">
        <h1>My projects:</h1>
      </div>
      <div className="app__blog-posts">
        {data.map((post) => (
          <BlogItem
            postTitle={post.postTitle}
            postDesc={post.postDesc}
            postImg={post.postImg}
            postTechnology={post.postTechnology}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
