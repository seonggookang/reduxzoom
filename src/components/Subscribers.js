import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux";

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <p>구독자 수: {count}</p>
      <button onClick={() => addSubscriber()}>구독하기!</button>{" "}
    </div>
  );
};

// state를 function 형태로 작성
const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count, // count가 Subscribers의 prop으로 전달됨.
  };
};

// 1. function으로 하는 법
// const mapdispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

// 2. object로 하는 법
const mapdispatchToProps = {
  addSubscriber,
};

export default connect(mapStateToProps, mapdispatchToProps)(Subscribers); // connect에 인자로 넣어줌으로써 redux와 연결하기

// redux connect공식문서
// mapStateToProps
