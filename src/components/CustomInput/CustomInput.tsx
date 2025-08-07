import React from "react";
import type { CustomInputProps } from "./CustomInput.types";

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  name,
  value,
  onChange,
  className, // Destructure className from props
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none ${
        className || ""
      }`} // Combine default and passed className
    />
  );
};

export default CustomInput;
