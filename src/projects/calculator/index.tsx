import React, { useState } from "react";
import "./styles.scss";

const keys = [
  { key: "7", type: "number" },
  { key: "8", type: "number" },
  { key: "9", type: "number" },
  { key: "/", type: "char" },
  { key: "4", type: "number" },
  { key: "5", type: "number" },
  { key: "6", type: "number" },
  { key: "*", type: "char" },
  { key: "1", type: "number" },
  { key: "2", type: "number" },
  { key: "3", type: "number" },
  { key: "-", type: "char" },
  { key: "0", type: "number" },
  { key: ".", type: "char" },
  { key: "+", type: "char" },
  { key: "=", type: "char" },
];

const calculator = (char: string, valueA: number, valueB: number) => {
  if (!valueA || !valueB) {
    return valueB;
  }
  const num1 = Number(valueA);
  const num2 = Number(valueB);
  switch (char) {
    case "+": {
      return num1 + num2;
    }
    case "-": {
      return num1 - num2;
    }
    case "/": {
      return num1 / num2;
    }
    case "*": {
      return num1 * num2;
    }
    default:
      return num2;
  }
};

const Calculator = () => {
  const [value, setValue] = useState<any>("");
  const [result, setResult] = useState(0);
  const [lastKey, setLastKey] = useState<any>("");
  const handleClick = (key: string, type: string) => {
    if (key === "=") {
      showResult();
      return;
    }
    if (type === "char") {
      const res = calculator(key, result, lastKey);
      setResult(res);
    }
    if (type === "number") {
      setLastKey(key);
    }
    setValue(`${value}${key}`);
  };
  const showResult = () => {
    setValue(result);
    setResult(0);
  };
  const handleClear = () => {
    setValue("");
    setResult(0);
    setLastKey("");
  };
  return (
    <div className="calculator-wrapper">
      <div className="font-bold text-center text-2xl">Calculator</div>
      <div className="calculator">
        <input type="text" className="input" value={value} disabled />
        <div>
          <span className="clear" onClick={handleClear}>
            Clear
          </span>
          <span className="clear">Del</span>
        </div>
        <div className="keyboard">
          {keys.map((key) => (
            <span
              key={key.key}
              className="key"
              onClick={() => handleClick(key.key, key.type)}
            >
              {key.key}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
