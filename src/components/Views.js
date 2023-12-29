import React, { useState } from "react";
import { connect } from "react-redux";
import { addView } from "../redux"; // 액션을 가져오는 폴더도 따로 만들어서 불러오기 쉽게 만들자!

const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="items">
      <p>조회수: {count}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => addView(number)}>조회하기!</button>
      {/* button 눌렀을 떄 action 호출하기 */}
    </div>
  );
};

// state를 function 형태로 작성
const mapStateToProps = ({ views }) => {
  return {
    count: views.count, // count가 Subscribers의 prop으로 전달됨.
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
  addView: (number) => addView(number),
};

export default connect(mapStateToProps, mapdispatchToProps)(Views); // connect에 인자로 넣어줌으로써 redux와 연결하기

// redux connect공식문서
// mapStateToProps
