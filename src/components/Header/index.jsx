import React from "react";
import ReactFlagsSelect from "react-flags-select";
import SelectList from "../SelectList";
import logo from "../../img/logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import HeaderModal from "../HeaderModal";

import "./Header.scss";
import "react-flags-select/scss/react-flags-select.scss";

const dataSelect = [
  {
    id: "t01",
    title: "недвижимость",
    act1: "недвижимость1",
    act2: "недвижимость2",
    act3: "недвижимость3"
  },
  {
    id: "t02",
    title: "услуги",
    act1: "услуги1",
    act2: "услуги2",
    act3: "услуги3"
  },
  {
    id: "t03",
    title: "инфо",
    act1: "инфо1",
    act2: "инфо2",
    act3: "инфо3"
  }
];

const Header = () => {
  return (
    <Navbar expand="lg" className="appContainer Header">
      <div className="Header_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Header_wrap--links">
        <Nav.Link href="#home" className="Header_link">
          о компании
        </Nav.Link>
        <SelectList dataSelect={dataSelect} />
        <Nav.Link href="#home" className="Header_link">
          новости
        </Nav.Link>
        <Nav.Link href="#home" className="Header_link">
          контакты
        </Nav.Link>
        <HeaderModal />
      </div>

      <Nav.Link href="tel:+49 30 889 203 99" className="Header_phone">
        +49 30 889 203 99
      </Nav.Link>
      <ReactFlagsSelect defaultCountry="RU" />
    </Navbar>
  );
};

export default Header;
