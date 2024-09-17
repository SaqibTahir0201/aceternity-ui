import React from "react";
// import SaleBanner from "../components/saleBanner/SaleBanner";
import Products from "./Products";
function Home() {
  return (
    <div className=" w-full flex flex-wrap">
      <Products />
      {/* <SaleBanner /> */}
    </div>
  );
}

export default Home;
