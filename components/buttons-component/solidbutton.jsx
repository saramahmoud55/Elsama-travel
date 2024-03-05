import React from "react";

const Button = ({
  styles,
  padding,
  fontSize,
  fontWeight,
  content,
  furtherClasses,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ borderWidth: 1.5, borderRadius: 4, ...styles }}
      className={`bg-blue-800 border-2 border-blue-500 ${padding}  ${fontSize} ${fontWeight} ${furtherClasses}   duration-300 text-white hover:bg-white hover:text-blue-500 transition-all`}
    >
      {content}
    </button>
  );
};

export default Button;
