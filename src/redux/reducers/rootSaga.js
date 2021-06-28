import { all } from "redux-saga/effects";
// import PostSaga from "../../store/post/saga";
import pagesSaga from "../pages/pagesSagas";
// import CollectionSaga from "./collection/saga";
// import MediaSaga from "./media/saga";
// import AppSaga from "./app/saga";

export default function* rootSaga() {
  yield all([pagesSaga()]);
}
