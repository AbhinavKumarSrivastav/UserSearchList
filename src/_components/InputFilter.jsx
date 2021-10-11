import React from "react";
import { Input } from 'reactstrap';

function InputFilter(props) {
  const { searchHandler, handleKeyDown,searchSubmit  } = props;
  return (
    <div>
      <Input
        onKeyDown={handleKeyDown}
        onChange={searchHandler}
        onKeyPress={searchSubmit}
        type="input"
        id="searchBar"
        placeholder='Enter search...'
      />
    </div>
  );
}

export { InputFilter };
