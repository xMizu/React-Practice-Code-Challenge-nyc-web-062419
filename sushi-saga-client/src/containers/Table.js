import React, { Fragment } from "react";

const Table = props => {
  console.log(props.plates);
  const renderPlates = array => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  let amountEaten =
    props.plates.length > 0
      ? props.plates.reduce((av, cv) => {
          return cv.price + av;
        }, 0)
      : 0;

  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.budget} remaining!</h1>
      <div className="table">
        <div className="stack">
          {/* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
          renderPlates(props.plates)}
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
