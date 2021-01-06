import { HOMECOMPONENTS } from "../variables";
import { DefaultSource } from "../../common/componentsSets/HomepageSets";

const initialState = {
  pageName: "Home",
  homeSelected: [],
  aboutusSelected: [],
  serviceSelected: [],
  homeSource: DefaultSource.filter(
    (item) => item.category.filter((single) => single === "Home")[0]
  ),
  aboutusSource: DefaultSource.filter(
    (item) => item.category.filter((single) => single.includes("AboutUs"))[0]
  ),
  serviceSource: DefaultSource.filter(
    (item) => item.category.filter((single) => single === "Service")[0]
  ),
  source: DefaultSource,
  filter: {
    category: "Home",
  },
};

export default function homepageReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case HOMECOMPONENTS.GET_HOME_PAGE_COMPONENTS:
      switch (action.pageName) {
        case "Home":
          return {
            ...state,
            homeSelected: action.selectDestination,
            homeSource: action.selectSource
              ? action.selectSource
              : DefaultSource,
          };
        case "AboutUs":
          return {
            ...state,
            aboutusSelected: action.selectDestination,
            aboutusSource: action.selectSource
              ? action.selectSource
              : DefaultSource,
          };
        default:
          return { ...state };
      }

    case HOMECOMPONENTS.UPDATE_SOURCE_COMPONENTS:
      console.log(action);
      switch (action.pageName) {
        case "Home":
          return {
            ...state,
            // homeSelected: action.selectDestination,
            homesource: action.selectSource
              ? action.selectSource
              : DefaultSource,
          };
        case "AboutUs":
          return {
            ...state,
            // aboutusSelected: action.selectDestination,
            aboutusSource: action.selectSource
              ? action.selectSource
              : DefaultSource,
          };
        default:
          return { ...state };
      }
    case HOMECOMPONENTS.UPDATE_DESTINATION_COMPONENTS:
      switch (action.pageName) {
        case "Home":
          return {
            ...state,
            homeSelected: action.selectDestination,
            homesource: action.selectSource
              ? action.selectSource
              : DefaultSource,
          };
        case "AboutUs":
          return {
            ...state,
            aboutusSelected: action.selectDestination,
            aboutusSource: action.selectSource
              ? action.selectSource
              : DefaultSource,
          };
        default:
          return { ...state };
      }

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
