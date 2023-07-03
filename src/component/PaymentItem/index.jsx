import React from "react";
import formatCurrency, { formatDate } from "../../utils/format";

const PaymentItem = ({ paymentMethod, createdAt, course }) => {
  return (
    <div className="itemhistory">
      <div className="name">{course?.name}</div>
      <div className="payment">{paymentMethod}</div>
      <div className="date">{formatDate(createdAt)}</div>
      <div className="money">{formatCurrency(course?.price)} VNĐ</div>
    </div>
  );
};

export default PaymentItem;
