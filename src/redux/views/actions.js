import { ADD_VIEW } from "./types";

export const addView = (number) => {
  return {
    type: ADD_VIEW,
    payload: Number(number), // 값을 함께 넘겨줄 때 쓰는 속성.(관습적인 이름 payload)
  };
};
