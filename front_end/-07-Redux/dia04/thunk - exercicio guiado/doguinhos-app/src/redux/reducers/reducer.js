import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions/action";

const INITIAL_STATE = { // sempre que for usar API, pelo menos isFatching e errorMessage vão fazer parte do INITIAL_STATE
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

const dogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
        errorMessage: "",
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        imageURL: '',
        errorMessage: action.payload,
      }

    default:
      return state;
  }
};

export default dogReducer;
