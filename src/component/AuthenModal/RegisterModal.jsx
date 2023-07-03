import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import InputPage from "../Input";
import { useAuthen } from "../AuthenContext";
import { message } from "antd";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /*width: 280px;*/
  gap: 5px;
`;
const RegisterModal = () => {
  const formRef = useRef();
  const { onRegister, renderForm, setRenderForm, closeAuthModal } = useAuthen();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  //tạo obj rỗng để chứa lỗi
  const errObj = {};
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName) {
      errObj.firstName = "Khong duoc de trong ten!!";
    }
    if (!form.email) {
      errObj.email = "khong duoc de trong email!!";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errObj.email = "khong dung dinh dang email!!";
    }
    if (!form.password) {
      errObj.password = "Khong duoc de trong ten!!";
    }
    setErrors(errObj);
    if (Object.keys(errObj).length === 0) {
      onRegister?.({
        firstName: form.firstName,
        lastName: "",
        email: form.email,
        password: form.password,
      });
      setForm({});
      formRef.current.reset();
    } else {
      message.error("register errObj error");
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
  const isRender = renderForm === "register";

  return (
    <div
      className={`modal__wrapper-content mdregister ${
        isRender ? "active" : ""
      }`}
    >
      <h3 className="title --t3">Đăng ký tài khoản</h3>
      <Form ref={formRef} onSubmit={onSubmit} className="form">
        <InputPage
          label="Họ và tên"
          placeholder="Họ và tên"
          required
          type="text"
          value={form.firstName}
          error={errors.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <InputPage
          label="Email"
          placeholder="Email"
          required
          type="text"
          value={form.email}
          error={errors.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <InputPage
          label="password"
          required
          type="password"
          placeholder="Mật khẩu"
          {...register("password")}
        />
        <p>
          Bạn đã có tài khoản?{" "}
          <span
            className="color--primary btnmodal"
            onClick={() => setRenderForm("login")}
          >
            Đăng nhập
          </span>
        </p>
        <button className="btn btn--primary form__btn-register" type="submit">
          Đăng ký
        </button>
      </Form>
    </div>
  );
};

export default RegisterModal;
