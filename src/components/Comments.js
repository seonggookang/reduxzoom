import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../redux/comments/actions";

const Comments = ({ fetchComments, loading, comments }) => {
  // 렌더링되면 한 번 실행 될 수 있도록
  useEffect(() => {
    fetchComments();
  }, []);
  const commentsItems = loading ? (
    <div>...is loading</div>
  ) : (
    comments.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  );
  return <div className="comments">{commentsItems}</div>;
};

const mapStateToProps = ({ comments }) => {
  return {
    comments: comments.items,
  };
};

const mapdispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapdispatchToProps)(Comments);
