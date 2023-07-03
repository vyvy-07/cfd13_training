import React from "react";
import { PATHS } from "../../constants/path";
import { Link } from "react-router-dom";
import formatCurrency from "../../utils/format";

const CourseItem = (props) => {
  const { name, image, title, slug, tags, price, id, teams } = props || {};
  const findTeacher = teams?.find((member) => member.tags?.includes("Teacher"));
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
            <a href="course-detail.html" className="btn btn--default">
              <img src="img/icon-paper.svg" alt="icon paper" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
