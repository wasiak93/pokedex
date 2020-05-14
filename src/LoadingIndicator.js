import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "./LoadingIndicator.css";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="loader">
        <Loader type="ThreeDots" color="orange" />
      </div>
    )
  );
};

export default LoadingIndicator;
