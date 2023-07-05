import React from "react";
import { PATHS } from "../../constants/path";
import { Link } from "react-router-dom";
import formatCurrency, { formatDate } from "../../utils/format";

const CourseItem = ({
  name,
  image,
  title,
  slug,
  tags,
  price,
  id,
  teams,
  startDate,
  type = "nomal",
  ...props
}) => {
  const findTeacher = teams?.find((member) => member.tags?.includes("Teacher"));
  //console.log("type :>> ", type);
  if (type == "coming") {
    return (
      <div className="coursecoming__item">
        <div className="coursecoming__item-img">
          <Link to={PATHS.COURSE_DETAIL.replace(":slug", slug)}>
            <img src={image} alt="Khóa học sắp ra mắt CFD" />
          </Link>
        </div>
        <div className="coursecoming__item-content">
          <p className="category label">Front-end</p>
          <h2 className="title --t2">
            <Link to={PATHS.COURSE_DETAIL.replace(":slug", slug)}>{name}</Link>
          </h2>
          {findTeacher && (
            <div className="user">
              <div className="user__img">
                <img src={findTeacher?.image} alt="Avatar teacher" />
              </div>
              <p className="user__name">{findTeacher.name}</p>
            </div>
          )}
          <div className="info">
            <div className="labeltext">
              <span className="label --blue">Ngày khai giảng</span>
              <p className="title --t2">{formatDate(startDate)}</p>
            </div>
            <div className="labeltext">
              <span className="label --blue">Hình thức học</span>
              {tags && <p className="title --t2">{tags.join(" | ") || ""}</p>}
            </div>
          </div>
          <div className="btnwrap">
            <Link
              to={PATHS.REGISTER.replace(":slug", slug)}
              //href="course-order.html"
              className="btn btn--primary"
            >
              Đăng Ký Học
            </Link>
            <Link
              to={PATHS.COURSE_DETAIL.replace(":slug", slug)}
              className="btn btn--border --black"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="courses__list-item" key={id}>
        <div className="img">
          <Link to={PATHS.COURSE_DETAIL.replace(":slug", slug)}>
            <img src={image} alt="Khóa học CFD" className="course__thumbnail" />
            {tags && (
              <span className="course__img-badge badge">
                {tags.join(" | ") || ""}
              </span>
            )}
          </Link>
        </div>
        <div className="content">
          <p className="label">{title}</p>
          <h3 className="title --t3">
            <Link to={PATHS.COURSE_DETAIL.replace(":slug", slug)}>{name}</Link>
          </h3>
          {findTeacher && (
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src={findTeacher.image} alt="Avatar teacher" />
                </div>
                <p className="user__name">{findTeacher.name}</p>
              </div>
              {price && (
                <div className="price">
                  <strong>{formatCurrency(price)}đ</strong>
                </div>
              )}
            </div>
          )}
          <div className="content__action">
            <Link to={"/register" + `/${slug}`} className="btn btn--primary">
              Đăng ký ngay
            </Link>
            <Link
              to={PATHS.COURSE_DETAIL.replace(":slug", slug)}
              //href="course-detail.html"
              className="btn btn--default"
            >
              <img src="/img/icon-paper.svg" alt="icon paper" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
