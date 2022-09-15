import React, { useState, useEffect } from 'react';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [info, setInfo] = useState({
    total: null,
    next: null,
  });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const { total, next } = info;
    if (!next && !total) setDisplay('0');
    else setDisplay(next ?? total);
  }, [info]);

  const handleClick = (e) => {
    const buttonName = e.target.innerText;
    setInfo((prevState) => ({
      ...calculate(prevState, buttonName),
    }));
  };
  return (
    <div className="calcutat">
      <div className="display">{display}</div>
      <button type="button" className="btn2" onClick={handleClick}>
        AC
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        +/-
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        %
      </button>
      <button type="button" className="btn3" onClick={handleClick}>
        ÷
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        7
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        8
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        9
      </button>
      <button type="button" className="btn3" onClick={handleClick}>
        x
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        4
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        5
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        6
      </button>
      <button type="button" className="btn3" onClick={handleClick}>
        -
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        1
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        2
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        3
      </button>
      <button type="button" className="btn3" onClick={handleClick}>
        +
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        0
      </button>
      <button type="button" className="btn2" onClick={handleClick}>
        .
      </button>
      <button type="button" className="btn3" onClick={handleClick}>
        =
      </button>
    </div>
  );
};

export default Calculator;
