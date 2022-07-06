import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import React from "react";
import Counter from "./component/Counter";
class App extends React.Component {
  state = {
    show: false,
  };
  handleshow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <Button
          style={{ width: "100px" }}
          variant="primary"
          onClick={this.handleshow}
          className="buttonshow"
        >
          {this.state.show === true ? "Hide " : "Show "}
        </Button>{" "}
        {this.state.show === true ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
