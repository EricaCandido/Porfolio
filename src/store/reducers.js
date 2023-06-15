import { data } from "@/pages/api/data";

const initialState = {
  globalState: false,
  data: data,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL_VISIBILITY":
      return {
        ...state,
        globalState: action.payload,
      };
    case "GLOBAL_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
