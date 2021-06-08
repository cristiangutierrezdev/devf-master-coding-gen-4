import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Tucuenta = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="DropdownStyle">
      <DropdownToggle caret className="bg-transparent block-example border border-0">
        Tu cuenta
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Iniciar Sesión</DropdownItem>
        <DropdownItem>Crear cuenta</DropdownItem>
        <DropdownItem>Consultar tu pedido</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default  Tucuenta;