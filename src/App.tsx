import React, { useState } from "react";
import styled from "styled-components";
import filterFunc from "./controller/filterFunc";
import onClick from "./controller/onClick";
import {
  objCategories,
  numCategories,
  placeCategories,
} from "./model/categoryData";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 75%;
  height: 6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${(props: {isActive: boolean}) => props.isActive ? "blue" : "white"};
  color: ${(props: {isActive: boolean}) => props.isActive ? "white" : "black"};
`;

const FilteredSelectedCategories = styled.div`
  width: 12rem;
  height: 3rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;
  font-style: italic;
`;

const App = () => {
  const [filterObject, setFilterObject] = useState({
    obj: ["obj-1"],
    num: ["num-1"],
    place: ["place-1"],
  });

  const [objButtonIsClicked, setObjButtonIsClicked] = useState(false);
  const [numButtonIsClicked, setNumButtonIsClicked] = useState(false);
  const [placeButtonIsClicked, setPlaceButtonIsClicked] = useState(false);

  const filteredData = filterFunc(filterObject);

  return (
    <Container>
      <Row>
        <button
          onClick={() => {
            if (objButtonIsClicked) {
                setObjButtonIsClicked(false);

            } else {
                setObjButtonIsClicked(true);
                setNumButtonIsClicked(false);
                setPlaceButtonIsClicked(false);
            }
          }}
        >
          업무 목적
        </button>
        <button
          onClick={() => {
            if (placeButtonIsClicked) {
                setPlaceButtonIsClicked(false);
            } else {
                setPlaceButtonIsClicked(true);
                setObjButtonIsClicked(false);
                setNumButtonIsClicked(false);
            }
          }}
        >
          공간 유형
        </button>
        <button
          onClick={() => {
            if (numButtonIsClicked) {
                setNumButtonIsClicked(false);
            } else {
                setNumButtonIsClicked(true);
                setObjButtonIsClicked(false);
                setPlaceButtonIsClicked(false);
            }
          }}
        >
          인원
        </button>
      </Row>
      {objButtonIsClicked && (
        <Row>
          {objCategories.map((item) => {
            return (
              <Button
                data-category="obj"
                key={item.id}
                value={item.value}
                onClick={(e) => {
                  onClick(e, filterObject, setFilterObject);
                }}
                isActive={filterObject.obj.includes(item.id) ? true : false}
              >
                {item.value}
              </Button>
            );
          })}
        </Row>
      )}
      {placeButtonIsClicked && (
        <Row>
          {placeCategories.map((item) => {
            return (
              <Button
                data-category="place"
                key={item.id}
                value={item.value}
                onClick={(e) => {
                  onClick(e, filterObject, setFilterObject);
                }}
                isActive={filterObject.place.includes(item.id) ? true : false}
              >
                {item.value}
              </Button>
            );
          })}
        </Row>
      )}
      {numButtonIsClicked && (
        <Row>
          {numCategories.map((item) => {
            return (
              <Button
                data-category="num"
                key={item.id}
                value={item.value}
                onClick={(e) => {
                  onClick(e, filterObject, setFilterObject);
                }}
                isActive={filterObject.num.includes(item.id) ? true : false}
              >
                {item.value}
              </Button>
            );
          })}
        </Row>
      )}
      {filteredData.map((data, index) => (
        <Row key={index}>
          <FilteredSelectedCategories>
            Obj: {JSON.stringify(data.obj)}
          </FilteredSelectedCategories>
          <FilteredSelectedCategories>
            Num: {JSON.stringify(data.num)}
          </FilteredSelectedCategories>
          <FilteredSelectedCategories>
            Place: {JSON.stringify(data.place)}
          </FilteredSelectedCategories>
        </Row>
      ))}
    </Container>
  );
};

export default App;
