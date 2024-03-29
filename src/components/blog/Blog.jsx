import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./blog.css";
import Bounce from "react-reveal/Bounce";

const Blog = () => {
  return (
    <>
      <Back title="Podcasts Exclusivos" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
