import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { InputFilter } from "../../_components/InputFilter";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../_actions";
import { ItemDetails } from "../ItemDetails";
import { LoadingComponent } from "../../_components";
import "./index";

function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [cursor, selectCursor] = useState(0);
  const [selectedValue, setItemSelection] = useState("");
  const user = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.LoaderReducer.loader);

  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && cursor > 0) {
      selectCursor(cursor - 1);
    } else if (e.keyCode === 40 && cursor < user.sku.length - 1) {
      selectCursor(cursor + 1);
    }
  };

  const searchHandler = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    dispatch(userActions.searchInput(searchInput));
  };

  const searchSubmit = () => {
    setItemSelection(user.sku[cursor]);
  };

  return (
    <Container className="list-container">
      {}
      <InputFilter
        searchHandler={searchHandler}
        handleKeyDown={handleKeyDown}
        onKeyPress={searchSubmit}
        value={selectedValue.sku_name}
      ></InputFilter>
      {loading && loading.data && <LoadingComponent loading={loading.data} />}
      <div className="list-item">
        <ListGroup>
          {user &&
            user.sku &&
            user.sku.map((item, i) => {
              return (
                <ListGroupItem
                  key={item.sku_id}
                  className={cursor === i ? "active focus" : null}
                  onMouseEnter={() => {
                    selectCursor(i);
                  }}
                  onMouseLeave={() => {
                    selectCursor(0);
                  }}
                  onClick={searchSubmit}
                >
                  <div>{item.sku_name}</div>
                </ListGroupItem>
              );
            })}
          {user && user.sku && user.sku.length <= 0 && <span>No result</span>}
        </ListGroup>
      </div>
      {selectedValue && (
        <div>
          <ItemDetails selectedValue={selectedValue}></ItemDetails>
        </div>
      )}
    </Container>
  );
}

export { SearchPage };
