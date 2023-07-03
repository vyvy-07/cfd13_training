import React from "react";
import { Link } from "react-router-dom";
import CourseItem from "../../component/CourseItem";
import Faq from "../../component/Fqa";
import { PATHS } from "../../constants/path";
import useQuery from "../../hooks/useQuery";
import HeroHome from "./HeroHome";

import FeaturedHomePage from "../../component/Featured";
import Teams from "../../component/TeamsCFD/Teams";
import { CourseService } from "../../services/courseService";
import { homeServices } from "../../services/homeServices";
import Gallery from "./Gallery";
import RateHome from "./Rate";
import CallRegister from "./callRegister";

const HomePage = () => {
  const { data } = useQuery(() => CourseService.getCourse());
  console.log("data :>> ", data);
  const { data: gallery } = useQuery(() => homeServices.getGallery());
  const { galleries } = gallery || [];

  return (
    <main className="mainwrapper">
      <HeroHome />
      <section className="coursecoming --scpadding">
        <div className="container">
          <div className="heading">
            <h2 className="heading__title title --t2">
              Khoá học <span className="color--primary">sắp khai giảng</span>
            </h2>
            <div className="control">
              <div className="control__prev">
                <img src="img/icon-btn-control.svg" alt="icon prev" />
              </div>
              <div className="control__next">
                <img src="img/icon-btn-control.svg" alt="icon next" />
              </div>
            </div>
          </div>
        </div>
        <div className="coursecoming__list" id="coursecoming__slider">
          <div className="coursecoming__item">
            <div className="coursecoming__item-img">
              <a href="course-detail.html">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/JUVoVxn36lQtCl20hHoEPMo8JJENBX5qXfI1U13k.jpg"
                  alt="Khóa học sắp ra mắt CFD"
                />
              </a>
            </div>
            <div className="coursecoming__item-content">
              <p className="category label">Front-end</p>
              <h2 className="title --t2">
                <a href="course-detail.html">Frontend Master</a>
              </h2>
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Ngày khai giảng</span>
                  <p className="title --t2">04/05/2023</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Hình thức học</span>
                  <p className="title --t2">Offline | Online</p>
                </div>
              </div>
              <div className="btnwrap">
                <a href="course-order.html" className="btn btn--primary">
                  Đăng Ký Học
                </a>
                <a
                  href="course-detail.html"
                  className="btn btn--border --black"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="coursecoming__item">
            <div className="coursecoming__item-img">
              <a href="course-detail.html">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg"
                  alt="Khóa học sắp ra mắt CFD"
                />
              </a>
            </div>
            <div className="coursecoming__item-content">
              <p className="category label">Front-End</p>
              <h2 className="title --t2">
                <a href="course-detail.html">Web Responsive</a>
              </h2>
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Ngày khai giảng</span>
                  <p className="title --t2">04/05/2023</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Hình thức học</span>
                  <p className="title --t2">Offline | Online</p>
                </div>
              </div>
              <div className="btnwrap">
                <a href="course-order.html" className="btn btn--primary">
                  Đăng Ký Học
                </a>
                <a
                  href="course-detail.html"
                  className="btn btn--border --black"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="coursecoming__item">
            <div className="coursecoming__item-img">
              <a href="course-detail.html">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg"
                  alt="Khóa học sắp ra mắt CFD"
                />
              </a>
            </div>
            <div className="coursecoming__item-content">
              <p className="category label">Front-end</p>
              <h2 className="title --t2">
                <a href="course-detail.html">Frontend Newbie</a>
              </h2>
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Ngày khai giảng</span>
                  <p className="title --t2">04/05/2023</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Hình thức học</span>
                  <p className="title --t2">Offline | Online</p>
                </div>
              </div>
              <div className="btnwrap">
                <a href="course-order.html" className="btn btn--primary">
                  Đăng Ký Học
                </a>
                <a
                  href="course-detail.html"
                  className="btn btn--border --black"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses">
        <div className="container">
          <div className="heading">
            <h2 className="heading__title title --t2">
              Tất cả <span className="color--primary">khóa học</span>
            </h2>
          </div>
          <div className="courses__list">
            {data?.courses?.length > 0 &&
              data?.courses?.map((item, index) => (
                <CourseItem {...item} key={index} />
              ))}
          </div>
          <div className="courses__btnall">
            <Link to={PATHS.COURSES} className="course__btn btn btn--grey">
              Tất cả khoá học
            </Link>
          </div>
        </div>
      </section>
      <Teams />
      <FeaturedHomePage />
      {/* --------------------------------Testimonial-------------------------------- */}
      <RateHome />
      {/* --------------------------------faq-------------------------------- */}
      <Faq />
      <Gallery {...gallery} />
      <CallRegister />
    </main>
  );
};

export default HomePage;
