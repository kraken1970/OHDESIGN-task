import React from "react";
import { FSBCart } from "../../constans";
import "./FirstScreenBottom.scss";

const FirstScreenBottom = () => {
  return (
    <div className="appContainer FSB_container">
      <h2 className="FSB_h2">
        Жилая, элитная и доходная недвижимость в Германии
      </h2>
      <ul className="FSB_wrapCart">
        {FSBCart.map(item => {
          const bgStyle = { backgroundImage: `url("${item.img}")` };
          return (
            <li key={item.id} style={bgStyle} className="Cart" id={item.title}>
              <div className="Cart_content">
                <p className="Cart_content--text">{item.title}</p>
                <span className="Cart_content--number">{item.number}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FirstScreenBottom;
