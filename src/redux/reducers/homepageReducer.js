import { HOMECOMPONENTS } from "../variables";
import {
  DefaultDestination,
  DefaultSource,
} from "../../common/componentsSets/HomepageSets";
import {
  AboutDestination,
  AboutSource,
} from "../../common/componentsSets/AboutSets";

const initialState = {
  pageName: "Home",
  filter: {
    category: "Home",
  },
  homecom: {
    GetDestination: DefaultDestination,
    GetSource: DefaultSource,
  },
  aboutcom: {
    GetDestination: AboutDestination,
    GetSource: AboutSource,
  },
};

export default function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case HOMECOMPONENTS.GET_HOME_PAGE_COMPONENTS:
      switch (action.pageName) {
        case "Home":
          return {
            ...state,
            homecom: {
              ...state.homecom,
              GetDestination: action.selectDestination
                ? action.selectDestination
                : DefaultDestination,
              GetSource: action.selectSource
                ? action.selectSource
                : DefaultSource,
            },
          };
        case "AboutUs":
          return {
            ...state,
            aboutcom: {
              ...state.aboutcom,
              GetDestination: action.selectDestination
                ? action.selectDestination
                : AboutDestination,
              GetSource: action.selectSource
                ? action.selectSource
                : AboutSource,
            },
          };
        default:
          return { ...state };
      }

    case HOMECOMPONENTS.UPDATE_SOURCE_COMPONENTS:
      switch (action.pageName) {
        case "Home":
          return {
            ...state,
            homecom: {
              ...state.homecom,
              GetSource: action.selectSource,
              GetDestination: state.GetDestination,
            },
          };
        case "AboutUs":
          return {
            ...state,
            aboutcom: {
              ...state.aboutcom,
              GetSource: action.selectSource,
              GetDestination: state.GetDestination,
            },
          };
        default:
          return { ...state };
      }
    case HOMECOMPONENTS.UPDATE_DESTINATION_COMPONENTS:
      switch (action.pageName) {
        case "Home":
          return {
            ...state,
            homecom: {
              ...state.homecom,
              GetDestination: action.selectDestination,
              GetSource: state.GetSource,
            },
          };
        case "AboutUs":
          return {
            ...state,
            aboutcom: {
              ...state.aboutcom,
              GetDestination: action.selectDestination,
              GetSource: state.GetSource,
            },
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
