import React from "react";
import "./FirstScreen.scss";
import FirstScreenTop from "../FirstScreenTop";
import FirstScreenCenter from "../FirstScreenCenter";
import FirstScreenBottom from "../FirstScreenBottom";

const FirstScreen = () => {
  return (
    <div className="FirstScreen">
      <FirstScreenTop />
      <FirstScreenCenter />
      <FirstScreenBottom />
    </div>
  );
};

export default FirstScreen;
