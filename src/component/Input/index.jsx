import React from "react";
//props truyền từ component cha vào thằng con để tái sử dụng lại
const InputPage = ({
  label,
  required,
  error,
  renderInput = undefined,
  ...inputProps
}) => {
  return (
    <>
      <label className="label">
        {label}
        {required ? <span>*</span> : ""}
      </label>
      {renderInput?.inputProps || (
        <input
          {...inputProps}
          className={`form__input ${error ? "formerror" : ""}`}
        />
      )}
      <p className="error">{error || ""}</p>
    </>
  );
};

export default InputPage;
