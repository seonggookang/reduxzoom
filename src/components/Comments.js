import React, { useEffect } from "react";
import { fetchComments } from "../redux/comments/actions";
import { useSelector, useDispatch } from "react-redux";

// const Comments = ({ fetchComments, loading, comments }) => {
const Comments = () => {
  let items = useSelector((state) => state.comments.items); // reducer들을 합친 store
  let loading = useSelector((state) => state.comments.loading);
  let dispatch = useDispatch();

  // 렌더링되면 한 번 실행 될 수 있도록
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const commentsItems = loading ? (
    <div>...is loading</div>
  ) : (
    items.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  );

  return <div className="comments">{commentsItems}</div>;
};

export default Comments;
