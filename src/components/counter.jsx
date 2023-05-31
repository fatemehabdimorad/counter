import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary px-3 ">
            +
          </button>
          <button className="btn btn-secondary px-3 m-1" onClick={() => this.props.onDecrease(this.props.counter)} disabled={this.props.counter.value === 0 ? "disabled" : ""}>
            -
          </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger px-3 ">
            Delete
          </button>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge p-2 m-1 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
