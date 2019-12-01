import * as React from 'react';
import { Dropdown } from '@citi-icg-158830/elemental-chameleon-react';
const DropdownItem = Dropdown.Item;

 const ActionOperations = (props: any):JSX.Element => {

  return (
    <div style={{ width: '200px' }}>
    <Dropdown pureMenu name="Single Select"
    defaultValue={null}
    handleChange={function () {
      alert(12)
    }}
    style={{ width: '200px' }}
    >
    <DropdownItem value="lucy">lucy</DropdownItem>
      {/* {
        props.children(props.opers)
      } */}
    </Dropdown>
  </div>
  );
};

export default ActionOperations;