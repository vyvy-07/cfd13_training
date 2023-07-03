import React from "react";

const formatCurrency = (price, type = "vi-VN") => {
  if (!price) return 0;
  return price.toLocaleString(type, { minimumFractionDigits: 0 });
};

export default formatCurrency;

export const formatDate = (date) => {
  if (!date) return null;
  const dateFormat = new Date(date);
  const day = ("0" + dateFormat.getUTCDate()).slice(-2);
  const month = ("0" + (dateFormat.getUTCMonth() + 1)).slice(-2);
  const year = dateFormat.getUTCFullYear();
  return `${day}/${month}/${year}`;
};
