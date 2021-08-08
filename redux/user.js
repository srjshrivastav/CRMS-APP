import * as ActionTypes from "./ActionTypes";

export const user = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...action.user
      };

    case ActionTypes.USER_LOGOUT:
      return null

    default:
      return state;
  }
};