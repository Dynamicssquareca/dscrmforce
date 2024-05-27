// components/DropdownComponent.js
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const DropdownComponent = ({ label, items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle nav caret>
        {label}
      </DropdownToggle>
      <DropdownMenu>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownComponent;
