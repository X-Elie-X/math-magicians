import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="calcutat">
        <div className="display">
          <div className="display2">2+3</div>
          <div className="diplay3">5</div>
        </div>
        <button type="button" className="btn2">
          AC
        </button>
        <button type="button" className="btn2">
          +/-
        </button>
        <button type="button" className="btn2">
          %
        </button>
        <button type="button" className="btn3">
          ÷
        </button>
        <button type="button" className="btn2">
          7
        </button>
        <button type="button" className="btn2">
          8
        </button>
        <button type="button" className="btn2">
          9
        </button>
        <button type="button" className="btn3">
          x
        </button>
        <button type="button" className="btn2">
          4
        </button>
        <button type="button" className="btn2">
          5
        </button>
        <button type="button" className="btn2">
          6
        </button>
        <button type="button" className="btn3">
          -
        </button>
        <button type="button" className="btn2">
          1
        </button>
        <button type="button" className="btn2">
          2
        </button>
        <button type="button" className="btn2">
          3
        </button>
        <button type="button" className="btn3">
          +
        </button>
        <button type="button" className="btn">
          0
        </button>
        <button type="button" className="btn2">
          .
        </button>
        <button type="button" className="btn3">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
