import React from "react";

class Counter extends React.Component {
  state = {
    coun: 0,
  };
  plus = () => {
    this.setState({
      coun: this.state.coun + 1,
    });
  };
  min = () => {
    this.setState({
      coun: this.state.coun - 1,
    });
  };
  rest = () => {
    this.setState({
      coun: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <h1>React Counter</h1>
        <span className="counter__output"></span>
        <div className="btn__container">
          <button className="control__btn" onClick={this.plus}>
            +
          </button>
          <h1> count :{this.state.coun}</h1>
          <button
            className="control__btn"
            onClick={this.state.coun > 0 ? this.min : null}
          >
            -
          </button>
          <button className="reset" onClick={this.rest}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
