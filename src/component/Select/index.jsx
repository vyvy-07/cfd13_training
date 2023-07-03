import React from "react";
//const opptions = [
//  {
//    value: "res",
//    name: "responsive",
//  },
//  {
//    value: "react",
//    name: "react",
//  },
//  {
//    value: "w-res",
//    name: " Web Responsive",
//  },
//];
const SelectPage = ({
  options,
  label,
  value,
  required,
  error,
  onChange,
  ...selectProps //các tham số còn lại rest es6
}) => {
  //  console.log(options);
  //  console.log(options.name);
  return (
    <>
      <label className="label">
        {label} {required ? <span>*</span> : ""}
      </label>
      <select
        className={`select form__input ${error ? "formerror" : ""}`}
        value={value}
        //required
        onChange={onChange}
        {...selectProps}
      >
        {options?.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      <p className="error">{error || ""}</p>
    </>
  );
};

export default SelectPage;
