import React, { useRef } from "react";
import { useState } from "react";
import InputPage from "../Input";
import { styled } from "styled-components";
import { message } from "antd";
import { useAuthen } from "../AuthenContext";
const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;
const LoginModal = () => {
  const { renderForm, setRenderForm, onLogin, closeAuthModal } = useAuthen();
  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});
  const formRef = useRef();
  const errObj = {};
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      errObj.email = "khong duoc de trong email!!";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errObj.email = "khong dung dinh dang email!!";
    }
    if (!form.password) {
      errObj.password = message.error("Lỗi");
    }
    setErrors(errObj);
    if (Object.keys(errObj).length === 0) {
      onLogin?.(form);
      setForm({});
      setErrors({});
      formRef.current?.reset();
    } else {
      message.error("errObj error");
    }
  };
  const register = (fieldName) => {
    return {
      value: form[fieldName],
      error: errors[fieldName],
      onChange: (e) => {
        setForm({ ...form, [fieldName]: e.target.value });
      },
    };
  };
  const isRender = renderForm === "login";

  return (
    <div
      className={`modal__wrapper-content mdlogin ${isRender ? "active" : ""}`}
    >
      <h3 className="title --t3">Đăng nhập</h3>
      <Form ref={formRef} onSubmit={onSubmit} className="form">
        <InputPage
          label="Email"
          required
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <InputPage
          label="Password"
          required
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <div className="form__bottom">
          <p>
            Bạn chưa có tài khoản?{" "}
            <span
              className="color--primary btnmodal"
              onClick={() => setRenderForm("register")}
            >
              Đăng ký
            </span>
          </p>
          {/*<a className="color--primary" href="#">
            Quên mật khẩu?
          </a>*/}
        </div>
        <button className="btn btn--primary form__btn-register" type="submit">
          Đăng nhập
        </button>
      </Form>
    </div>
  );
};

export default LoginModal;
