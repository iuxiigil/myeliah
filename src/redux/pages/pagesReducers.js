import actions from "./pagesActions";

import { DefaultDestination } from "../../common/componentsSets/HomepageSets";

const initState = {
  pagesSelected: [],
  isLoading: false,
  errorMessage: false,
  modalActive: false,
  currentPage: 1,
  pageSize: 10,
  CountTotal: 0,
  pagesList: [],
  pages: {},
};

export default function pagesReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.LOAD_LIST:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false,
      };
    case actions.LOAD_LIST_SUCCESS:
      console.log(payload.data);
      return {
        ...state,
        isLoading: false,
        errorMessage: false,
        modalActive: false,
        pagesSelected: payload.data,
      };

    case actions.TOGGLE_HANDLE_MODAL:
      return {
        ...state,
        modalActive: !state.modalActive,
      };

    case actions.CRUD:
      return {
        ...state,
        pages: payload.data,
      };
    default:
      return state;
  }
}
