import React from "react";
import "./loader.css";
const Loader = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center text-center"> 
    <span className="loaderr text-primary mr-5 mb-5">Loading</span>
    <span className="loader">
      <span className="loader-dot blackWhite" />
      <span className="loader-dot blackWhite" />
    </span>
    </div>
  );
};

export default Loader;
