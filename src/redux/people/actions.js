import {
  GET_PEOPLE_DATA,
  SET_PEOPLE_DATA,
  CHANGE_FILTER_PEOPLE
} from "./actionTypes";

export const getPoeplesData = () => ({
  type: GET_PEOPLE_DATA
});

export const setPoeplesData = data => ({
  type: SET_PEOPLE_DATA,
  payload: data
});

export const changePeopleFilter = filter => ({
  type: CHANGE_FILTER_PEOPLE,
  payload: { ...filter }
});
