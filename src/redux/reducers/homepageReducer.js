import { HOMECOMPONENTS } from "../variables";
const initialState = {};

export default function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case HOMECOMPONENTS.GET_HOME_PAGE_COMPONENTS:
      return {
        ...state,
        displayPage: action.overallCOmponent,
        category: action.category,
      };
    case HOMECOMPONENTS.CLEAR_HOME_PAGE_COMPONENTS:
      return [];

    default:
      return state;
  }
}
