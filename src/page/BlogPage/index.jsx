import { useEffect, useState } from "react";
import BlogItem from "../../component/BlogItem";
import { BlogServices } from "../../services/BlogServices";
import { message } from "antd";

const BlogPage = () => {
  const [blogsList, setBlogsList] = useState([]);
  useEffect(() => {
    const ListBlogItem = async () => {
      try {
        const res = await BlogServices.getListBlog();
        setBlogsList(res?.data.data?.blogs);
      } catch (error) {
        message.error("Vui lòng thử lại!");
      }
    };
    ListBlogItem();
  }, []);

  return (
    <main className="mainwrapper blog --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Blog</h2>
          </div>
        </div>
        <div className="blog__menu">
          <a href="#" className="blog__menu-item active">
            Tất cả
          </a>
          <a href="#" className="blog__menu-item">
            Tin tức
          </a>
          <a href="#" className="blog__menu-item">
            Dev
          </a>
          <a href="#" className="blog__menu-item">
            Design
          </a>
          <a href="#" className="blog__menu-item">
            Tài Nguyên
          </a>
        </div>
        <div className="blog__list">
          {blogsList?.length > 0 &&
            blogsList.map((item, index) => {
              return <BlogItem key={index} {...item} />;
            })}
        </div>

        <ul className="paging">
          <li>
            <a href="#">
              <i>
                <img src="img/iconprev.svg" alt="" />
              </i>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="img/iconprev.svg" alt="" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default BlogPage;
