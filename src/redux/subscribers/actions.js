// const ADD_SUBSCRIBER = "ADD_SUBSCRIBER"; // reducer에서도 사용할 거기 때문에 따로 관리
// const REMOVE_SUBSCRIBER = "REMOVE_SUBSCRIBER";

import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types";

export const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};
export const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER,
  };
};
