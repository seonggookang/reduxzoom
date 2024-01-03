// useSelector, useDispatch를 쓰면 아주 코드가 짧아지고 직관적임.

import React from "react";
import { addSubscriber } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const Subscribers = () => {
  // 인자가 필요없어짐
  let count = useSelector((state) => state.subscribers.count); // reducer들을 합친 store
  let dispatch = useDispatch();

  console.log("state >>> ", count); // 370
  console.log("dispatch >>> ", dispatch);

  return (
    <div className="items">
      <p>구독자 수: {count}</p>
      <button onClick={() => dispatch(addSubscriber())}>구독하기!</button>
    </div>
  );
};

export default Subscribers;
