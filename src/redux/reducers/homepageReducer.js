import { HOMECOMPONENTS } from "../variables";
import {
  DefaultDestination,
  DefaultSource,
} from "../../common/componentsSets/HomepageSets";

const initialState = {
  pageName: "Home",
  homeSelected: DefaultDestination,
  aboutusSelected: [],
  serviceSelected: [],
  source: DefaultSource,
};

export default function homepageReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case HOMECOMPONENTS.GET_HOME_PAGE_COMPONENTS:
      return {
        ...state,
        homeSelected: action.selectDestination,
        homeSource: action.selectSource ? action.selectSource : DefaultSource,
      };

    case HOMECOMPONENTS.UPDATE_SOURCE_COMPONENTS:
      console.log(action);

      return {
        ...state,
        homeSelected: action.selectDestination,
        homesource: action.selectSource ? action.selectSource : DefaultSource,
      };

    case HOMECOMPONENTS.UPDATE_DESTINATION_COMPONENTS:
      return {
        ...state,
        homeSelected: action.selectDestination,
        homesource: action.selectSource ? action.selectSource : DefaultSource,
      };

    case HOMECOMPONENTS.CATEGORY_SOURCE_COMPONENTS:
      return {
        ...state,
        category: action.selectCategoryData,
      };
    case HOMECOMPONENTS.SET_FILTER_CATEGORY_COMPONENTS:
      return {
        ...state,
        pageName: action.category,
        filter: {
          ...state.filter,

          category: action.category,
        },
      };
    case HOMECOMPONENTS.RESET_FILTER_COMPONENTS:
      return {
        ...state,
        pageName: "Home",
        filter: {
          category: "Home",
        },
      };
    case HOMECOMPONENTS.CLEAR_HOME_PAGE_COMPONENTS:
      return [];

    default:
      return state;
  }
}
