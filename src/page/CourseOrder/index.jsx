import { message } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthen } from "../../component/AuthenContext";
import Button from "../../component/Button";
import InputPage from "../../component/Input";
import Radio from "../../component/Radio";
import SelectPage from "../../component/Select";
import { LOCAL_STOGARE } from "../../constants/localStogare";
import { PATHS } from "../../constants/path";
import useQuery from "../../hooks/useQuery";
import { CourseOder } from "../../services/courseOder";
import { CourseService } from "../../services/courseService";
import formatCurrency from "../../utils/format";
import { Validate } from "../../utils/validate";
import useDebounce from "../../hooks/useDebounce";
import PageLoading from "../../component/Loading";

const CourseOther = () => {
  const navigate = useNavigate();
  //lấy hình thức thanh toán
  const [paymentMethod, setPaymentMethod] = useState("atm");
  const onChangePayment = (value) => setPaymentMethod(value);
  //lấy thông tin người dùng
  const { profiles, courseOrder, paymentOrder, profileCourse } = useAuthen();
  const { email } = profiles || {};
  //lấy thông tin khóa học
  const { slug } = useParams();
  const { data, loading } = useQuery(() => CourseService.getCourseSlug(slug));
  console.log("loading :>> ", loading);

  const { teams, tags, id } = data || {};
  const findTeacher = useMemo(() => {
    return teams?.find((member) => member.tags?.includes("Teacher"));
  }, [teams]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const rules = {
    name: [{ required: true, message: "Vui lòng nhập thông tin!" }],
    phone: [
      { required: true, message: "Vui lòng điền thông tin!" },
      {
        regex: /(84|0[3|5|7|8|9])+([0-9]{8})/,
        message: "Vui lòng nhập đúng số điện thoại!!",
      },
    ],
  };
  const typesOption = tags?.map((tag) => {
    return (
      {
        value: tag?.toLowerCase(),
        name: tag,
      } || []
    );
  });
  console.log("typesOption :>> ", typesOption);
  const register = (fieldName) => {
    return {
      value: form[fieldName],
      onChange: (e) => {
        setForm({ ...form, [fieldName]: e.target.value });
      },
      error: errors[fieldName],
    };
  };
  console.log("profileCourse :>> ", profileCourse);
  //check khóa học trùng nhau
  const courseOdered = profileCourse?.orders?.find(
    (item) => item?.course?.id == id
  );
  console.log("courseOdered :>> ", courseOdered);
  const isAlreadyOrdered = !!courseOdered?.id;
  console.log("isAlreadyOrdered :>> ", isAlreadyOrdered);
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!isAlreadyOrdered) {
        const errorObject = Validate(rules, form);
        setErrors(errorObject);
        if (Object.keys(errorObject)?.length === 0) {
          if (data?.id) {
            const payload = {
              name: form?.name,
              phone: form?.phone,
              course: data.id,
              type: form?.type,
              paymentMethod: paymentMethod,
            };
            try {
              const respon = await CourseOder.postCourseOrder(payload);
              if (respon?.data?.data) {
                await courseOrder();
                await paymentOrder();
                message.success("Đăng kí thành công");
                navigate(PATHS.PROFILE.COURSE);
              }
            } catch (error) {
              console.log("error :>> ", error);
              message.error("Đăng kí thất bại!");
            }
          }
          console.log("form :>> ", form);
        } else {
          console.log("errors :>> ", errors);
        }
      } else {
        console.log("Bạn đã đăng kí khóa học :>> ");
        message.warning("Bạn đã đăng kí khóa học!");
      }
    },
    [form, paymentMethod, isAlreadyOrdered]
  );
  const {
    image: imgOdered,
    name: nameOdered,
    teams: teamsOdered,
    price: priceOrdered,
    tags: tagsOrdered,
    id: idOrdered,
  } = courseOdered?.course || [];

  console.log("courseOdered :>> ", courseOdered);
  const findOrderedTeacher = useMemo(() => {
    return teamsOdered?.find((member) =>
      member.tagsOrdered?.includes("Teacher")
    );
  }, [teamsOdered]);
  const token = localStorage.getItem(LOCAL_STOGARE.token);
  useEffect(() => {
    if (profiles || courseOdered) {
      setForm({
        name: courseOdered?.name || profiles?.firstName,
        email: courseOdered?.email || profiles?.email,
        phone: courseOdered?.phone || profiles?.phone,
        type: courseOdered?.type || typesOption?.[0]?.value || "",
      });
      courseOdered?.paymentMethod &&
        setPaymentMethod(courseOdered?.paymentMethod);
    }
  }, [profiles, courseOdered, setPaymentMethod]);
  console.log("paymentMethod :>> ", paymentMethod);

  const pageLoading = useDebounce(loading, 1000);
  //console.log("pageLoading :>> ", pageLoading);
  if (pageLoading) {
    return (
      <main className="mainwrapper --ptop">
        <PageLoading />
      </main>
    );
  }
  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
          <div className="itemorder infoorder">
            <h3 className="title --t3">Thông tin đơn hàng</h3>
            <div className="boxorder">
              <div className="boxorder__col">
                <label className="label">Tên khoá học</label>
                <div className="boxorder__col-course">
                  <div className="img">
                    <img src={imgOdered || data?.image} alt="" />
                  </div>
                  <div className="info">
                    <p className="name">
                      <strong>{nameOdered || data?.name}</strong>
                    </p>
                    <p>{findOrderedTeacher?.name || findTeacher?.name}</p>
                  </div>
                </div>
              </div>
              <div className="boxorder__col">
                <label className="label">Tạm tính</label>
                <p>{formatCurrency(priceOrdered || data?.price)} VNĐ</p>
              </div>
              <div className="boxorder__col">
                <label className="label">Giảm giá</label>
                <p>0%</p>
              </div>
              <div className="boxorder__col">
                <label className="label">thành tiền</label>
                <p>
                  <strong>
                    {formatCurrency(priceOrdered || data?.price)} VNĐ
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="itemorder formorder">
            <h3 className="title --t3">Thông tin cá nhân</h3>
            <div className="boxorder">
              <div className="form">
                <div className="form-container">
                  <div className="form-group">
                    <InputPage
                      disabled={isAlreadyOrdered}
                      label="họ và tên"
                      {...register("name")}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <InputPage label="Email" value={email} disabled />
                  </div>
                </div>
                <div className="form-container">
                  <div className="form-group">
                    <InputPage
                      disabled={isAlreadyOrdered}
                      label="Số điện thoại"
                      {...register("phone")}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <SelectPage
                      disabled={isAlreadyOrdered}
                      label="Hình thức học"
                      required
                      options={typesOption}
                      {...register("type")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="itemorder paymentorder">
            <h3 className="title --t3">Hình thức thanh toán</h3>
            {paymentMethod && (
              <Radio
                className="boxorder"
                disabled={isAlreadyOrdered}
                onChange={onChangePayment}
                defaultvalue={paymentMethod}
                //value={paymentMethod}
              >
                <div className="boxorder__pay">
                  <Radio.Option value="atm">
                    <img src="/img/icon-payment-method-atm.svg" alt="" />
                    <span className="checkmark" />
                    Thành toán bằng chuyển khoản
                  </Radio.Option>
                  <div className="boxorder__pay-tooltip">
                    Sau khi bấm đăng ký, mã khoá học &amp; thông tin tài khoản
                    ngân hàng sẽ được gửi đến email của bạn, bạn vui lòng chuyển
                    khoản với nội dung: mã khoá học, họ và tên, số điện thoại,
                    CFD Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học
                    của bạn sau khi giao dịch thành công.
                  </div>
                </div>
                <div className="boxorder__pay">
                  <Radio.Option value="momo">
                    <span className="checkmark" />
                    <img src="/img/icon-payment-method-mo-mo.svg" alt="" />
                    Thanh toán bằng ví Momo
                  </Radio.Option>
                  <div className="boxorder__pay-tooltip">
                    Sau khi bấm đăng ký, mã khoá học &amp; thông tin tài khoản
                    MoMo sẽ được gửi đến email của bạn, bạn vui lòng chuyển
                    khoản với nội dung: mã khoá học, họ và tên, số điện thoại,
                    CFD Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học
                    của bạn sau khi giao dịch thành công.
                  </div>
                </div>

                <div className="boxorder__pay">
                  <Radio.Option value="cash">
                    <span className="checkmark" />
                    <img src="/img/icon-payment-method-cod.svg" alt="" />
                    Thanh toán bằng tiền mặt
                  </Radio.Option>
                  <div className="boxorder__pay-tooltip">
                    Sau khi bấm đăng ký, thông tin khoá học sẽ được gửi đến
                    email của bạn, bạn vui lòng đến văn phòng CFD Circle vào
                    ngày khai giảng để đóng học phí tại số 11b, Phan Kế Bính,
                    quận 1, TP Hồ Chí Minh.
                  </div>
                </div>
              </Radio>
            )}
          </div>

          <Button
            onClick={onSubmit}
            disabled={isAlreadyOrdered}
            style={{ width: "100%" }}
          >
            <span>Đăng ký khoá học</span>
            <p></p>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CourseOther;
