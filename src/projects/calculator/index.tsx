import React, { useState } from "react";
import "./styles.scss";

const keys = [
  { key: "7", type: "number" },
  { key: "8", type: "number" },
  { key: "9", type: "number" },
  { key: "/", type: "operator" },
  { key: "4", type: "number" },
  { key: "5", type: "number" },
  { key: "6", type: "number" },
  { key: "*", type: "operator" },
  { key: "1", type: "number" },
  { key: "2", type: "number" },
  { key: "3", type: "number" },
  { key: "-", type: "operator" },
  { key: "0", type: "number" },
  { key: ".", type: "number" },
  { key: "+", type: "operator" },
  { key: "=", type: "operator" },
];

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<any>("");
  const [previousValue, setPreviousValue] = useState<string>("")
  const handleClick = (value: string) => {
    setPreviousValue("")
    switch (value) {
      case "=": {
        try {
          setPreviousValue(displayValue+"=")
          // eval do the all math calculations
          setDisplayValue(eval(displayValue).toString());
        } catch (error) {
          setDisplayValue("Syntax Error");
        }
        break;
      }
      case "C": {
        setDisplayValue("");
        break;
      }
      case "X": {
        setDisplayValue(displayValue.slice(0, -1));
        break;
      }
      default: {
        if (displayValue === "Syntax Error") {
          setDisplayValue(value);
          return;
        }
        setDisplayValue(displayValue + value);
      }
    }
  };

  return (
    <div className="calculator-wrapper">
      <div className="font-bold text-center text-2xl">Calculator</div>
      <div className="calculator">
        <div className="entered-data">{previousValue}</div>
        <input type="text" className="input" value={displayValue} disabled />
        <div>
          <span className="clear" onClick={() => handleClick("C")}>
            Clear
          </span>
          <span className="clear" onClick={() => handleClick("X")}>
            X
          </span>
        </div>
        <div className="keyboard">
          {keys.map((key) => (
            <span
              key={key.key}
              className="key"
              onClick={() => handleClick(key.key)}
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
