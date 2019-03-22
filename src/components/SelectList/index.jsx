import React from "react";
import SelectItem from "../SelectItem";

import "./SelectList.scss";

const SelectList = ({ dataSelect }) => {
  const elements = dataSelect.map(item => {
    return (
      <li key={item.id}>
        <SelectItem
          title={item.title}
          act1={item.act1}
          act2={item.act2}
          act3={item.act3}
        />
      </li>
    );
  });
  return <ul className="SelectList">{elements}</ul>;
};

export default SelectList;
