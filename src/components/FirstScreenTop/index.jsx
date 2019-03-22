import React from "react";
import { Nav } from "react-bootstrap";
import "./FirstScreenTop.scss";
import { FSTLinks } from "../../constans";

const FirstScreenTop = () => {
  return (
    <div className="FirstScreenTop">
      <div className="appContainer FST_content">
        <h1 className="FST_content--h1">НЕДВИЖИМОСТЬ В ГЕРМАНИИ</h1>
        <div className="FST_content--links">
          {FSTLinks.map(item => {
            return (
              <Nav.Link
                key={item}
                href={`#${item}`}
                className="Header_link FST_link"
              >
                {item}
              </Nav.Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FirstScreenTop;
