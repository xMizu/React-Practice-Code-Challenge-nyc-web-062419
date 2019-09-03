import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {
  state = {
    start: 0,
    end: 4
  };

  clickHandler = () => {
    this.setState({ start: (this.state.start += 4) });
    this.setState({ end: (this.state.end += 4) });
  };

  render() {
    let list = this.props.sushiList
      .slice(this.state.start, this.state.end)
      .map(sushi => (
        <Sushi
          sushi={sushi}
          click={this.props.click}
          plates={this.props.plates}
        />
      ));
    return (
      <Fragment>
        <div className="belt">
          {
            /* 
             Render Sushi components here!
             
          */
            list
          }
          <MoreButton click={this.clickHandler} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
