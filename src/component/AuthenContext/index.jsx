import { message } from 'antd';
import React, { createContext, useEffect, useContext, useState } from 'react';
import { LOCAL_STOGARE } from '../../constants/localStogare';
import { AuthService } from '../../services/authServices';
import { CourseOder } from '../../services/courseOder';
const AuthenContext = createContext({});
export const AuthenProvider = ({ children }) => {
  const [renderForm, setRenderForm] = useState('login');
  const [isAuthenModalOpen, setIsAuthenModalOpen] = useState(false);
  const [profiles, setProfiles] = useState({});
  //danh sách khóa học
  const [profileCourse, setProfileCourse] = useState([]);
  const [profilePayment, setProfilePayment] = useState([]);

  const openAuthModal = () => {
    if (!!!localStorage.getItem(LOCAL_STOGARE.token))
      setIsAuthenModalOpen(true);
  };
  const closeAuthModal = () => {
    setRenderForm('login');
    setIsAuthenModalOpen(false);
  };
  const onLogin = async (loginData) => {
    //call API
    try {
      const res = await AuthService.login(loginData);
      const { token, refreshToken } = res.data?.data || '';
      //lưu vào localstogare
      localStorage.setItem(LOCAL_STOGARE.token, token);
      localStorage.setItem(LOCAL_STOGARE.refreshToken, refreshToken);
      if (!!token) {
        message.success('Đăng nhập thành công!');
        //đóng modal popup
        closeAuthModal();
        onGetProfile(token);
        courseOrder(token);
        paymentOrder(token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onRegister = async (registerData) => {
    try {
      const res = await AuthService.register(registerData);
      closeAuthModal();
      if (res.data?.data?.id) {
        message.success('đăng kí thành công');
        onLogin({
          email: registerData.email,
          password: registerData.password,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onLogOut = () => {
    setProfiles({});
    setProfilePayment([]);

    localStorage.removeItem(LOCAL_STOGARE.token);
    localStorage.removeItem(LOCAL_STOGARE.refreshToken);
  };
  const paymentOrder = async (token) => {
    try {
      const resPaymentoder = await CourseOder.getPaymentOrder(token);
      setProfilePayment(resPaymentoder.data?.data);
      console.log('token :>> ', token);
    } catch (error) {
      console.log(error);
    }
  };
  const courseOrder = async (token) => {
    try {
      const resCourseoder = await CourseOder.getCourseOrder(token);
      if (resCourseoder?.data?.data) {
        const mapCourse = resCourseoder?.data?.data;

        setProfileCourse(resCourseoder?.data?.data ?? []);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onGetProfile = async (token) => {
    const resProfile = await AuthService.getProfile(token);
    if (resProfile?.data?.data) {
      setProfiles(resProfile?.data?.data);
      console.log('resProfile?.data?.data :>> ', resProfile?.data?.data);
    }
  };

  useEffect(() => {
    const accesstoken = localStorage.getItem(LOCAL_STOGARE.token);
    if (accesstoken) {
      //call api profile
      courseOrder(accesstoken);
      paymentOrder(accesstoken);
      onGetProfile(accesstoken);
    }
  }, []);
  return (
    <>
      <AuthenContext.Provider
        value={{
          isAuthenModalOpen,
          profiles,
          renderForm,
          profileCourse,
          profilePayment,
          courseOrder,
          paymentOrder,
          setProfileCourse,
          setProfilePayment,
          setProfiles,
          onLogOut,
          setRenderForm,
          onRegister,
          openAuthModal,
          onLogin,
          closeAuthModal,
        }}
      >
        {children}
      </AuthenContext.Provider>
    </>
  );
};

export const useAuthen = () => useContext(AuthenContext);
