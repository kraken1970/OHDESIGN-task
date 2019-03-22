import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const SelectItem = ({ title, act1, act2, act3 }) => {
  return (
    <DropdownButton id="dropdown-basic-button" variant="light" title={title}>
      <Dropdown.Item href="#/action-1">{act1}</Dropdown.Item>
      <Dropdown.Item href="#/action-2">{act2}</Dropdown.Item>
      <Dropdown.Item href="#/action-3">{act3}</Dropdown.Item>
    </DropdownButton>
  );
};

export default SelectItem;
