/* eslint-disable default-case */
import {
  GET_PEOPLE_DATA,
  SET_PEOPLE_DATA,
  ERROR_PEOPLE_DATA,
  CHANGE_FILTER_PEOPLE
} from "./actionTypes";

const initialState = {
  loading: false,
  data: { results: [] },
  filter: {
    page: 1
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_DATA:
      return {
        ...state,
        loading: true,
        error: undefined
      };

    case SET_PEOPLE_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case ERROR_PEOPLE_DATA:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case CHANGE_FILTER_PEOPLE:
      return {
        ...state,
        filter: action.payload,
        loading: true,
        error: undefined
      };

    default:
      return { ...state };
  }
};
