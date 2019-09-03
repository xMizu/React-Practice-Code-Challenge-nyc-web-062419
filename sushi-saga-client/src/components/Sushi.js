import React, { Fragment } from "react";

const Sushi = props => {
  console.log(props.plates);
  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={/* Give me a callback! */ () => props.click(props.sushi)}
      >
        {/* Tell me if this sushi has been eaten! */
        props.plates.includes(props.sushi) ? null : (
          <img
            src={/* Give me an image source! */ props.sushi.img_url}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */ props.sushi.name} - $
        {/* Give me a price! */ props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
