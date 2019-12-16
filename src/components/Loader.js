import React from "react";
import { Button } from "react-bootstrap";
import LoaderImage from "./loader_image.png";
import "./Loader.css";

const LoaderButton = ({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <img src={LoaderImage} alt="" className="spinning" />}
      {props.children}
    </Button>
  );
};

export default LoaderButton;
