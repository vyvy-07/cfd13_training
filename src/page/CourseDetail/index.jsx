import React from "react";
import { Link, useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { CourseService } from "../../services/courseService";
import formatCurrency, { formatDate } from "../../utils/format";
import Contentdetail from "./Contentdetail";
import CoursesDetailItem from "./CoursesDetailItem";
import Featured from "./Featured";
import Faq from "../../component/Fqa";

const CourseDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data: coursesDetail } = useQuery(
    () => CourseService.getCourseSlug(slug),
    [slug]
  );
  console.log(coursesDetail);

  const { price, teams, tags, id, title, startDate, duration, description } =
    coursesDetail || {};

  const findTeacher = teams?.find((member) => member.tags?.includes("Teacher"));
  return (
    <main className="mainwrapper coursedetailpage">
      <section className="hero herodetail">
        <div className="hero__content">
          <div className="container">
            <h3 className="category label --white">frontend</h3>
            <h2 className="title --white">{title}</h2>
            <div className="infor">
              <div className="infor__item">
                <label className="label --white">Khai giảng</label>
                <p className="title --t3 --white">{formatDate(startDate)}</p>
              </div>
              <div className="infor__item">
                <label className="label --white">Thời lượng</label>
                <p className="title --t3 --white">{duration} buổi</p>
              </div>
              <div className="infor__item">
                <label className="label --white">Hình thức</label>
                {tags && (
                  <p className="title --t3 --white">{tags.join(" | ") || ""}</p>
                )}
              </div>
            </div>
            <Link
              to={`/register/${slug}`}
              className="btn btn--primary btn-regcourse"
            >
              Đăng ký
            </Link>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="container-fluid">
            {findTeacher && (
              <a href className="user">
                <div className="user__img">
                  <img src={findTeacher?.image} alt="Avatar teacher" />
                </div>
                <p className="user__name --white">{findTeacher?.name}</p>
              </a>
            )}
            <div className="pricebox">
              <p className="title --t3 --white">{formatCurrency(price)}</p>
            </div>
            <a
              href="https://www.facebook.com/sharer/sharer.php?sdk=joey&u=https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-frontend-master-30&display=popup&ref=plugin&src=share_button"
              onclick="return !window.open(this.href, 'Facebook', 'width=640,height=580')"
              className="sharebox s--white"
            >
              Chia sẻ
              <i>
                <img
                  src="https://cfdcircle.vn/img/iconshare.svg"
                  alt="CFD Circle"
                />
              </i>
            </a>
          </div>
        </div>
        <div className="hero__background">
          <img
            className="hero__background-img"
            src="https://cfdcircle.vn/files/thumbnails/JUVoVxn36lQtCl20hHoEPMo8JJENBX5qXfI1U13k.jpg"
            alt="CFD Circle"
          />
        </div>
      </section>
      <Contentdetail {...coursesDetail} />
      <Featured {...coursesDetail} />
      <Faq {...coursesDetail} />
      <CoursesDetailItem {...coursesDetail} />
    </main>
  );
};

export default CourseDetail;
