import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function NewDropdown({
  button,
  buttonItem1,
  buttonItem2,
  buttonItem3,
  buttonItem4,
}) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{button}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">{buttonItem1}</DropdownItem>
        <DropdownItem key="copy">{buttonItem2}</DropdownItem>
        <DropdownItem key="edit">{buttonItem3}</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          {buttonItem4}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
