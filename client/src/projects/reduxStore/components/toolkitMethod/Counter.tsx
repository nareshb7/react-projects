import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/counterSlice";
import { Button } from "common/Components";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  return (
    <div>
      <span className="font-semibold">Counter: {counter.count}</span>
      <div>
        <Button title="Increment" onClick={() => dispatch(increment())} />
        <Button title="Decrement" onClick={() => dispatch(decrement())} />
      </div>
    </div>
  );
};

export default Counter;
