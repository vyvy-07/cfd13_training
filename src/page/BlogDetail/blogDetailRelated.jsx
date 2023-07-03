import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogItem from "../../component/BlogItem";
import { blogServices } from "../../services/blogServices";

const BlogDetailRelated = () => {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const listBlogs = async () => {
      try {
        const res = await blogServices.getListBlog(slug);
        setBlogs(res.data?.data?.blogs);
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    listBlogs();
  }, [slug]);
  const newArr = blogs.filter((item) => item.slug !== slug);
  return (
    <div className="blogdetail__related">
      <h2 className="blogdetail__related-title title --t2">
        Bài viết liên quan
      </h2>
      <div className="blog__list">
        {newArr?.length > 0 &&
          newArr?.map((item, index) => {
            return (
              <div key={item?.id || index}>
                <BlogItem {...item} />
              </div>
            );
          })}
        {/*<div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img
                src="https://cfdcircle.vn/files/thumbnails/ZettvAFqback8Jzxiyz3DVPjvkoBUhUJY94DJwSK.jpg"
                alt="Khóa học CFD"
                className="course__thumbnail"
              />
            </a>
          </div>
          <div className="content">
            <p className="label">Dev</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">
                18 xu hướng web animation nổi bật trong năm 2023
              </a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>
        <div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img
                src="https://cfdcircle.vn/files/thumbnails/Tey1o9gldaFwCrCvQ0vgSDKuE6CKFYnBm4dWIVps.jpg"
                alt="Khóa học CFD"
                className="course__thumbnail"
              />
            </a>
          </div>
          <div className="content">
            <p className="label">Dev</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">
                Zustand - State Management là gì? Liệu có thể so sánh được với
                Redux hay không?
              </a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>
        <div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img
                src="https://cfdcircle.vn/files/thumbnails/esliqep9bvqPUmju6zn1Cf6cFBBwNXhcZlwHcwtL.jpg"
                alt="Khóa học CFD"
                className="course__thumbnail"
              />
            </a>
          </div>
          <div className="content">
            <p className="label">Dev</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">Tất tần tật về Shorthands trong CSS</a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default BlogDetailRelated;
