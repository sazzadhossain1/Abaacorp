import React from "react";
import "./BlogDetails.css";

import blogPhotoOne from "../../accets/blogPhoto/blogPhotoOne.jpg";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const blog = blogApi.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Blog not found</h2>
        <button onClick={() => navigate("/Blog")}>Go Back</button>
      </div>
    );
  }
  return (
    <div className="blogDetails_flex_div">
      <div className="blogDetails_parent_div">
        <img src={blog.img} alt={blog.title} className="blogDetails_img" />
        <h1>{blog.title}</h1>
        <p className="blogDetails_date">{blog.date}</p>
        <p className="blogDetails_text">{blog.text}</p>
        <button className="back_btn" onClick={() => navigate("/Blog")}>
          Back to Blog
        </button>
      </div>
      <div className="blogDetais_recent_post">
        <h3>Recent Post</h3>
        <div className="blogDetails_recent_flex_div">
          <div className="blogDetails_recent_img_div">
            <img className="blogDetails_recent_img" src={blog.img} alt="" />
          </div>

          <div className="blogDetails_recent_text_div">
            <h4>Test blog home check</h4>
            <span>Aug 18, 2023</span>
          </div>
        </div>
        <div className="blogDetails_recent_flex_div">
          <div className="blogDetails_recent_img_div">
            <img className="blogDetails_recent_img" src={blog.img} alt="" />
          </div>

          <div className="blogDetails_recent_text_div">
            <h4>Test blog home check</h4>
            <span>Aug 18, 2023</span>
          </div>
        </div>
        <div className="blogDetails_recent_flex_div">
          <div className="blogDetails_recent_img_div">
            <img className="blogDetails_recent_img" src={blog.img} alt="" />
          </div>

          <div className="blogDetails_recent_text_div">
            <h4>Test blog home check</h4>
            <span>Aug 18, 2023</span>
          </div>
        </div>
        <div className="blogDetails_recent_flex_div">
          <div className="blogDetails_recent_img_div">
            <img className="blogDetails_recent_img" src={blog.img} alt="" />
          </div>

          <div className="blogDetails_recent_text_div">
            <h4>Test blog home check</h4>
            <span>Aug 18, 2023</span>
          </div>
        </div>
        <div className="blogDetails_recent_flex_div">
          <div className="blogDetails_recent_img_div">
            <img className="blogDetails_recent_img" src={blog.img} alt="" />
          </div>

          <div className="blogDetails_recent_text_div">
            <h4>Test blog home check</h4>
            <span>Aug 18, 2023</span>
          </div>
        </div>
        <div className="blogDetails_recent_flex_div">
          <div className="blogDetails_recent_img_div">
            <img className="blogDetails_recent_img" src={blog.img} alt="" />
          </div>

          <div className="blogDetails_recent_text_div">
            <h4>Test blog home check</h4>
            <span>Aug 18, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
