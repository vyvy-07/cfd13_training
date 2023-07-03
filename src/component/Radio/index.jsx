import { createContext, useState, useEffect, useContext } from "react";

const RadioContext = createContext({
  selectedValue: "",
  handleChange: () => {},
});
//component Cha
const Radio = ({
  children,
  defaultvalue,
  onChange,
  disabled,
  className,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultvalue);
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };
  useEffect(() => {
    setSelectedValue(defaultvalue);
  }, [defaultvalue]);

  return (
    <RadioContext.Provider value={{ selectedValue, handleChange }}>
      <div style={{ pointerEvents: disabled ? "none" : "auto" }} {...props}>
        {children}
      </div>
    </RadioContext.Provider>
  );
};
//conn
const RadioOption = ({ value, children, className }) => {
  const { selectedValue, handleChange } = useContext(RadioContext);
  console.log("selectedValue :>> ", selectedValue);
  return (
    <label className={`radiocontainer ${className}`}>
      <input
        type="radio"
        name="radio"
        value={value}
        checked={selectedValue == value}
        onChange={handleChange}
      />
      {children}
    </label>
  );
};
Radio.Option = RadioOption;
export default Radio;
