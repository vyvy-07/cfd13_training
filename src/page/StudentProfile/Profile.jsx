import { useState, useEffect } from "react";
import { useAuthen } from "../../component/AuthenContext";
import InputPage from "../../component/Input";
import { message } from "antd";
import { LOCAL_STOGARE } from "../../constants/localStogare";
import { AuthService } from "../../services/authServices";

const Profile = () => {
  const { profiles, setProfiles } = useAuthen();

  const [form, setForm] = useState({});
  const token = localStorage.getItem(LOCAL_STOGARE.token);

  useEffect(() => {
    if (profiles) {
      setForm({ ...form, ...profiles });
    }
  }, [profiles]);
  const [errors, setErrors] = useState({});
  const errObj = {};
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.email) {
        errObj.email = "Vui lòng không để trống email!!";
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
        errObj.email = "Vui lòng nhập đúng định dạng email!!";
      }
      if (!form.phone) {
        errObj.phone = "khong duoc de trong phone!!";
      } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})/.test(form.phone)) {
        errObj.phone = "Vui lòng nhập đúng định dạng phone!!";
      }

      if (!form.firstName) {
        errObj.firstName = "Vui lòng không để trống tên!!";
      }
      setErrors(errObj);

      if (Object.keys(errObj)?.length !== 0) {
        message.error("Vui lòng nhập đúng thông tin!");
      } else {
        const res = await AuthService?.putProfile(form, token);
        if (res?.status) {
          setForm(res);
        }
        setProfiles(res.data?.data);
        message.success("Cập nhật thành công!");
      }
    } catch (error) {
      console.log("error", error);
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
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <form onSubmit={onSubmit} className="form">
        <div className="form-container">
          <div className="form-group">
            <InputPage
              firstName=""
              label="firstName"
              required
              type="text"
              placeholder="Họ và tên"
              {...register("firstName")}
            />
          </div>
          <div className="form-group">
            <InputPage
              label="phone"
              required
              type="text"
              placeholder="Số điện thoại"
              {...register("phone")}
            />
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <InputPage
              label="Email"
              required
              disabled
              type="text"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              className="form__input "
              type="password"
              disabled
              defaultValue="dahscduysge"
            />
            {/*<InputPage
              defaultValue="dahscduysge"
              disabled
              label="Password"
              //required
              type="password"
              //placeholder="Mật khẩu"
              //{...register("password")}
            />*/}
          </div>
        </div>
        <div className="form-group">
          <InputPage
            required
            label="Facebook URL"
            placeholder="facebookURL"
            {...register("facebookURL")}
          />
        </div>
        <div className="form-group">
          <InputPage
            label="Website"
            placeholder="Website"
            {...register("website")}
          />
        </div>
        <div className="form-container textarea">
          <InputPage
            label="Giới thiệu bản thân"
            //required
            {...register("introduce")}
            renderInput={(inputProps) => (
              <textarea className="form__input" {...inputProps} />
            )}
          />
        </div>
        {token ? <p className="noti">Cập nhận thông tin thành công</p> : ""}
        <div className="form-group">
          <div className="btnsubmit">
            <button className="btn btn--primary">Lưu lại</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
