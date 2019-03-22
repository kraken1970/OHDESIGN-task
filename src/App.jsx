import React from "react";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import Footer from "./components/Footer";

import "./App.scss";
import "./fonts.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <SecondScreen />
      <Footer />
    </div>
  );
};

export default App;
