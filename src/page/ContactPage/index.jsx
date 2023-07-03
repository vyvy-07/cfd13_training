//import React from "react";

import { useState } from "react";
import InputPage from "../../component/Input";
import SelectPage from "../../component/Select";

const ContactPage = () => {
  //khi báo state cho form
  const [form, setForm] = useState({});
  //tạo state để quản lí lỗi
  const [errors, setErrors] = useState({});
  //tạo obj rỗng để chứa lỗi
  const errObj = {};
  console.log(form.email);
  //khi click vào btn thì hàm submit làm việc
  const onSubmit = () => {
    console.log(errObj);
    console.log(form);
    if (!form.name) {
      errObj.name = "khong duoc de trong!!";
    }
    if (!form.email) {
      errObj.email = "khong duoc de trong email!!";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errObj.email = "khong dung dinh dang email!!";
    }
    if (!form.phone) {
      errObj.phone = "khong duoc de trong phone!!";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})/.test(form.phone)) {
      errObj.phone = "khong dung dinh dang phone!!";
      console.log("khong dung dinh dNG");
    }
    if (!form.topic) {
      errObj.topic = "vui long chon!!";
    }
    if (!form.content) {
      errObj.content = "vui long nhap!!";
    }
    setErrors(errObj);
  };
  const register = (fieldName) => {
    return {
      value: form[fieldName], //value ban đầu là k có gì cả

      error: errors[fieldName],
      onChange: (e) => {
        setForm({ ...form, [fieldName]: e.target.value }); //xét fieldName có gtri ng dung
        // nhap vao bằng cú pháp e.target.value sau đó gán lại lên form[fieldName] rồi lưu lại
      },
    };
  };
  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <div className="textbox">
          <h2 className="title --t2">Liên hệ &amp; Hỗ trợ</h2>
          <p className="desc">
            Bạn có bất cứ thắc mắc nào thì đừng ngần ngại liên hệ để được hỗ
            trợ?
            <br />
            Chúng tôi luôn ở đây
          </p>
        </div>
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <div className="sidebar">
              <div className="sidebar__address infor">
                <div className="infor__item">
                  <label className="label">CFD Circle</label>
                  <p className="title --t4">
                    666/46/29 Ba Tháng Hai, phường 14, quận 10, TPHCM
                  </p>
                </div>
                <div className="infor__item">
                  <label className="label">Email</label>
                  <p className="title --t4">info@cfdcircle.vn</p>
                </div>
                <div className="infor__item">
                  <label className="label">Số điện thoại</label>
                  <p className="title --t4">098 9596 913</p>
                </div>
              </div>
              <div className="sidebar__business">
                <p>
                  Đối với yêu cầu kinh doanh xin vui lòng gửi cho chúng tôi tại:
                </p>
                <a href="#">business@cfdcircle.vn</a>
              </div>
              <a href="#" className="sidebar__messenger btn btn--primary">
                Trò chuyện trực tuyến
              </a>
            </div>
            <div className="form">
              <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
              <div className="form-group">
                {/*<label className="label">
                  Họ và tên <span>*</span>
                </label>
                <input
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                  type="text"
                  className={`form__input ${errors.name ? "formerror" : ""}`}
                />
                <p className="error">{errors.name || ""}</p>*/}

                <InputPage
                  label="họ và tên"
                  required
                  value={form.name}
                  error={errors.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                {/*<label className="label">
                  Email <span>*</span>
                </label>
                <input defaultValue type="text" className="form__input" />*/}

                <InputPage
                  label="Email"
                  required
                  {...register("email")} //...truyền tất cả các giá trị của object vào thay cho các tham số

                  //value={form.email}
                  //onChange={(e) => {
                  //  setForm({ ...form, email: e.target.value });
                  //}}
                  //error={errors.email}
                />
              </div>
              <div className="form-group">
                <InputPage
                  label="số điện thoại"
                  required
                  {...register("phone")}
                />
              </div>
              <div className="form-group">
                <SelectPage
                  label="Chủ đề cần hỗ trợ"
                  required
                  {...register("topic")}
                  options={[
                    {
                      value: "--",
                      name: "--",
                    },
                    {
                      value: "res",
                      name: "responsive",
                    },
                    {
                      value: "react",
                      name: "react",
                    },
                    {
                      value: "w-res",
                      name: " Web Responsive",
                    },
                  ]}
                />
              </div>
              <div className="form-group">
                <label className="label">
                  Nội dung <span>*</span>
                </label>
                <textarea
                  className={` form__input ${errors.name ? "formerror" : ""}`}
                  value={form.content}
                  onChange={(e) => {
                    setForm({ ...form, content: e.target.value });
                  }}
                />
                <p className="error">{errors.name || ""}</p>
              </div>
              <div className="btncontrol">
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn--primary"
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
