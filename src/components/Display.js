import React from "react";
import { connect } from "react-redux";

const Display = (prop) => {
  return (
    <div>
      <p>구독자 수 : {prop.count}</p>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

export default connect(mapStateToProps)(Display);
