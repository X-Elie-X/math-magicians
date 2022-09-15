import React, { PureComponent } from 'react';

import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      display: '0',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttonName = e.target.innerText;

    this.setState(
      (prevState) => ({
        ...calculate(prevState, buttonName),
      }),
      this.displayOnScreen,
    );
  }

  displayOnScreen() {
    const { total, next } = this.state;

    if (!next && !total) this.setState({ display: '0' });
    else this.setState({ display: next ?? total });
  }

  render() {
    const { display } = this.state;

    return (
      <div className="calcutat">
        <div className="display">{display}</div>
        <button type="button" className="btn2" onClick={this.handleClick}>
          AC
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          +/-
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          %
        </button>
        <button type="button" className="btn3" onClick={this.handleClick}>
          ÷
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          7
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          8
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          9
        </button>
        <button type="button" className="btn3" onClick={this.handleClick}>
          x
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          4
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          5
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          6
        </button>
        <button type="button" className="btn3" onClick={this.handleClick}>
          -
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          1
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          2
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          3
        </button>
        <button type="button" className="btn3" onClick={this.handleClick}>
          +
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          0
        </button>
        <button type="button" className="btn2" onClick={this.handleClick}>
          .
        </button>
        <button type="button" className="btn3" onClick={this.handleClick}>
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
