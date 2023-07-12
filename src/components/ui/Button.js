"use client";
import { Loader } from "lucide-react";
import React from "react";

const Button = ({
  className = "",
  text,
  icon,
  isLoading = false,
  onClick,
  variant = "primary",
}) => {
  const buttonClasses = `rounded-lg px-6 py-4 flex items-center justify-center ${className}`;

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "text-white bg-black";
      break;
    case "blue":
      variantClasses = "text-white bg-blue-500";
      break;
    case "secondary":
      variantClasses = "text-black bg-transparent border border-black";
      break;
    default:
      variantClasses = "text-white bg-black";
  }

  return (
    <button
      type="button"
      className={`${variantClasses} ${buttonClasses}`}
      onClick={() => {
        if (!isLoading) {
          onClick();
        }
      }}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader className="mr-2 h-4 w-4 animate-spin" />
      ) : icon ? (
        icon
      ) : null}
      {text}
    </button>
  );
};

export default Button;
