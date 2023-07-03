import React from "react";
import { useAuthen } from "../../component/AuthenContext";
import PaymentItem from "../../component/PaymentItem";

const MyPayment = () => {
  const { profilePayment } = useAuthen();

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {profilePayment?.orders?.length > 0
        ? profilePayment?.orders?.map((item, index) => {
            return item && <PaymentItem key={index} {...item} />;
          })
        : "Không có thông tin thanh toán"}
    </div>
  );
};

export default MyPayment;
