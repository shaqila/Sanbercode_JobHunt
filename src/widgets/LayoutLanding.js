import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const LayoutLanding = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutLanding;
