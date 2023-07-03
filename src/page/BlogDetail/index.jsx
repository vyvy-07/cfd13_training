import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/format";
import BlogDetailRelated from "./blogDetailRelated";
import { blogServices } from "../../services/blogServices";

const BlogDetail = () => {
  const [BlogDetails, setBlogDetails] = useState({});
  const { slug } = useParams();
  const { name, author, createdAt, description } = BlogDetails;

  useEffect(() => {
    const BlogDetail = async (slug) => {
      const resDetail = await blogServices.getDetailBlog(slug);
      setBlogDetails(resDetail?.data?.data);
    };
    BlogDetail(slug);
  }, [slug]);

  return (
    <main className="mainwrapper blogdetail --ptop">
      <div className="container">
        <div className="wrapper">
          <div className="blogdetail__title">
            <h1 className="title --t2">{name}</h1>
            <ul className="meta">
              <li className="meta__item">Đăng bởi {author}</li>
              <li className="meta__item">Dev</li>
              <li className="meta__item">{formatDate(createdAt)}</li>
            </ul>
          </div>
          <div className="blogdetail__content">
            <img
              src="https://cfdcircle.vn/files/thumbnails/ebQvh5lMnPglamK4Q8DDWdoyzTnHLcDej5KJnlJh.jpg"
              alt="Post thumnail"
            />
            <div className="blogdetail__content-entry">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="blogdetail__line" />
            <div className="blogdetail__content-social btngroup">
              <a href="#" className="btn btn-fb">
                <img src="img/icon-fb-share.svg" alt="" />
                <span>Share</span>
              </a>
              <a href="#" className="btn btn-linkedin">
                <img src="img/icon-in-share.svg" alt="" />
                <span>Share</span>
              </a>
            </div>
          </div>
        </div>
        <BlogDetailRelated />
      </div>
    </main>
  );
};

export default BlogDetail;
