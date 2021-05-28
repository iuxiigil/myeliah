const DOCUMENT = "PAGES_";

const actions = {
  /**載入多筆筆資料*/
  LOAD_LIST: DOCUMENT + "LOAD_LIST ",
  LOAD_LIST_SUCCESS: DOCUMENT + "LOAD_LIST_SUCCESS",
  LOAD_ERROR: DOCUMENT + "LOAD_ERROR",
  /**開啟對話筐*/
  TOGGLE_HANDLE_MODAL: DOCUMENT + "TOGGLE_HANDLE_MODAL",

  CRUD: DOCUMENT + "CRUD",
  /**載入LIST資料*/
  loadlist: (data) => {
    return { type: actions.LOAD_LIST, payload: { data } };
  },
  /**載入LIST資料成功*/
  loadlistSuccess: (data) => ({
    type: actions.LOAD_LIST_SUCCESS,
    payload: { data },
  }),
  loadError: (error) => ({
    type: actions.LOAD_ERROR,
    payload: { error },
  }),
  crud: (data) => ({
    type: actions.CRUD,
    payload: { data },
  }),

  /**開啟對話筐*/
  toggleModal: (data = null) => ({
    type: actions.TOGGLE_HANDLE_MODAL,
    payload: { data },
  }),
};
export default actions;
