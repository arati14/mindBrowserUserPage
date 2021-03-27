import * as actions from "../actiontypes";
export const addUser = (data) => {
  return {
    type: actions.ADD_USER,
    data,
  };
};
export const deleteUser = (id) => {
  return {
    type: actions.DELETE_USER,
    id,
  };
};
