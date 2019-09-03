import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushiList: [],
    plates: [],
    budget: 50
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({ sushiList: data }));
  }

  clickHandler = obj => {
    if (!this.state.plates.includes(obj)) {
      if (this.state.budget - obj.price >= 0) {
        this.setState({ plates: [...this.state.plates, obj] });
        this.setState({ budget: this.state.budget - obj.price });
      } else {
        alert("You can't afford another bite");
      }
    } else {
      alert("none");
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.state.sushiList}
          plates={this.state.plates}
          click={this.clickHandler}
          budget={this.state.budget}
        />
        <Table plates={this.state.plates} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
