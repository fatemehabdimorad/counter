import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onReset, onDecrease, counters, counter } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm my-2 " onClick={onReset}>
          Reset
        </button>

        {counters.map((counter) => (
          <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onDecrease={onDecrease} counter={counter} />
        ))}
      </div>
    );
  }
}

export default Counters;
