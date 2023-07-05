import { useEffect } from "react";

import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useAuthen } from "../component/AuthenContext";
import { LOCAL_STOGARE } from "../constants/localStogare";
import { CourseOder } from "../services/courseOder";

const ProfileLayout = () => {
  const token = localStorage.getItem(LOCAL_STOGARE.token);
  if (!token) {
    return <Navigate to={"/"} />;
  }
  const { profiles } = useAuthen();
  const { firstName, email, facebookURL, phone, introduce } = profiles;

  return (
    <main className="mainwrapper profilepage">
      <div className="container">
        <div className="wrapper">
          <div className="sidebar">
            <div className="sidebar__info">
              <div className="useravatar">
                <div className="avatar">
                  <div className="img">
                    <img src="/img/avtvy.JPG" alt="avatar" />
                  </div>
                </div>
                <h3 className="title --t3">{firstName}</h3>
              </div>
            </div>
            <div className="sidebar__content">
              <h4>Giới thiệu</h4>
              <p className="description">{introduce}</p>
              <ul>
                <li>
                  <img src="/img/icon-mail-outline.svg" alt="icon" />
                  <span>{email}</span>
                </li>
                <li>
                  <img src="/img/icon-phone-outline.svg" alt="icon" />
                  <span>{phone}</span>
                </li>
                <li>
                  <img src="/img/icon-link.svg" alt="icon" />
                  <a href="#" target="_blank">
                    {facebookURL}
                  </a>
                </li>
              </ul>
              <div className="social">
                <a href="#">
                  <img src="/img/icon-facebook-dark.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/img/icon-linkedin-dark.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/img/icon-youtube-dark.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="tabwrap">
            <div className="tab">
              <div className="tab__title">
                <NavLink end to={"/profile"}>
                  Thông tin cá nhân
                </NavLink>
                <NavLink to={"/profile/mycourses"}>Khóa học của tôi</NavLink>
                <NavLink to={"/profile/mypayment"}>Lịch sử thanh toán</NavLink>
              </div>
              <div className="tab__content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileLayout;
