import React from "react";
import "./Blog.css";
import BlogCarts from "../BlogCarts/BlogCarts";
import blogPhotoOne from "../../accets/blogPhoto/blogPhotoOne.jpg";

const Blog = () => {
  const blogApi = [
    {
      id: 1,
      img: blogPhotoOne,
      title: "Test blog home check",
      date: "2023-08-18",
      text: "Test",
      button: "Read More",
      blogText: "lorem1",
    },
    {
      id: 2,
      img: blogPhotoOne,
      title: "Test blog title for text editor check",
      date: "2023-08-14",
      text: "Test blog title for text editor check Test blog title for text editor check Test blog title for text editor check Test blog title for text editor check Test blog title for text editor check Test blog title for text editor check Test blog title for...",
      button: "Read More",
      blogText: "lorem2",
    },
    {
      id: 3,
      img: blogPhotoOne,
      title: "Brain Tumor Surgery: Understanding the Procedure and Recovery",
      date: "2023-02-08",
      text: "Brain Tumor Surgery: Understanding the Procedure and Recovery",
      button: "Read More",
      blogText: "lorem3",
    },
    {
      id: 4,
      img: blogPhotoOne,
      title:
        "It is important to consult with a neurosurgeon when you experience specific",
      date: "2023-08-12",
      text: "It is important to consult with a neurosurgeon when you experience specific",
      button: "Read More",
      blogText: "lorem4",
    },
    {
      id: 5,
      img: blogPhotoOne,
      title:
        "Endoscopic Brain Surgery: An Overview of Pituitary, ETV, and Other Procedures",
      date: "2023-03-22",
      text: "Endoscopic Brain Surgery: An Overview of Pituitary, ETV, and Other Procedures",
      button: "Read More",
      blogText: "lorem5",
    },
    {
      id: 6,
      img: blogPhotoOne,
      title: "Understanding the Procedure and Recovery",
      date: "2023-08-29",
      text: "Understanding the Procedure and Recoveryঃ Tumor operation,",
      button: "Read More",
      blogText: "lorem6",
    },
  ];

  return (
    <div className="blog_parent_div">
      <h1> Blog</h1>
      <div className="blog_grid_div">
        {blogApi.map((info) => (
          <BlogCarts key={info.id} info={info}></BlogCarts>
        ))}
      </div>
    </div>
  );
};

export default Blog;
