import React, { useEffect } from "react";
import { errorSVG } from "../../assets/svgs";
import { ErrorToastStyles } from "./ErrorToastStyles";

const ErrorToast = ({ isActive, setIsError }) => {
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsError(false);
      }, 4000);
    }
  }, [isActive, setIsError]);
  return (
    <ErrorToastStyles aria-hidden={!isActive} data-testid="error" isActive={isActive}>
      {errorSVG}
      <p>Input must have a comma and space after each item: 0, 1, 2, 3, 4, 5, 6, 7, 8</p>
    </ErrorToastStyles>
  );
};

export default ErrorToast;
