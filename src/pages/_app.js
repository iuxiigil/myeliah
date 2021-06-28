import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../redux/store";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import { addLocaleData } from "react-intl";

import "../styles/styles.scss";
import Loading from "../components/Other/Loading";
import withReduxStore from "../common/with-redux-store";
import AppProvider from "./AppProvider";
import "nextjs-breadcrumbs/dist/index.css";

// import "assets/css/nextjs-material-dashboard.css?v=1.0.0";
/*
  Next.js使用App組件來初始化頁面 
  Component屬性即當前page，因此，每當你在路由之間切換時，Component都會更新為新的page。因此，你傳遞給Component的任何屬性都將會被page接收到。
  pageProps是帶有初始屬性的物件，該初始屬性由我們的某個數據獲取方法預先加載到你的頁面中，否則它將是一個空物件。
  console.log(
    "Component:" + Component,
    "pageProps:" + pageProps,
    "reduxStore:" + reduxStore
  ) 結果如下
  Component:function homepage1() {
    _s();

    customerSelect = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
      return state.homepageReducer.GetDestination ? state.homepageReducer.GetDestination : _common_componentsSets_HomepageSets__WEBPACK_IMPORTED_MODULE_2__["DefaultDestination"];
    });
    customerDestination = [];
    customerSelect.map(function (comp, _key1) {
      _common_componentsSets_HomepageSets__WEBPACK_IMPORTED_MODULE_2__["DefaultSource"].map(function (item, _key2) {
        if (item.id === comp.id) customerDestination.push(item);
      });
    });
    layoutScreen = customerDestination.map(function (comp) {
      return comp.comName;
    });
    return __jsx(_components_Layout_LayoutOne__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\u7F8E\u9E97\u4F73\u4EBA",
      className: "-style-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }
    }, layoutScreen);
  } 
  pageProps:undefined 
  reduxStore:[object Object] =>liftedStore":{}
  */
const App = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
        <ToastContainer position="bottom-left" autoClose={1500} />

        <ScrollToTop
          smooth
          component={<i className="fas fa-angle-double-up" />}
          style={{
            backgroundColor: "#f7f5f4",
            borderRadius: "999px",
            height: "50px",
            width: "50px",
          }}
        />
      </PersistGate>
    </Provider>
  );
};

export default withReduxStore(App);
