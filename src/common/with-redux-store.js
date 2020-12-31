import { initializeStore } from "../redux/store";

const isServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  //如果伺服器，則始終建立一個新存儲，否則狀態在請求之間共享
  //initialState目前在Redux中的state
  //isServer=false
  //window[__NEXT_REDUX_STORE__]=>dispatch: ƒ ()
  //getState: ƒ f()
  //liftedStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
  //replaceReducer: ƒ (n)
  //subscribe: ƒ subscribe(listener)
  //Symbol(observable): ƒ ()
  //__proto__: Object

  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

export default (App) => {
  /**
   * 這邊App是來自_app.js
   */
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      /**
       
      以`undefined`作為 initialState 取得或創建 store 
      這允許您設置自定義的預設 initialState
      reduxStore=>dispatch: ƒ ()
                  getState: ƒ f()
                  liftedStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
                  replaceReducer: ƒ (n)
                  subscribe: ƒ subscribe(listener)
                  Symbol(observable): ƒ ()
                  __proto__: Object
      */
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages

      /**
        console.log(appContext)=>結果如下
        AppTree: ƒ (props)
          Component: ƒ homepage1()
          ctx: {
            pathname: "/homepages/homepage1", 
            query: {…}, 
            asPath: "/homepages/homepage1", 
            reduxStore: {…}, //同上面
            AppTree: ƒ -> asPath: "/homepages/homepage1"
                          pathname: "/homepages/homepage1"
          }
          router: Router {route: "/homepages/homepage1", pathname: "/homepages/homepage1", query: {…}, asPath: "/homepages/homepage1", basePath: "", …}
       */
      appContext.ctx.reduxStore = reduxStore;

      /**
       * App
       * ƒ App(_ref) {
        var Component = _ref.Component,
            pageProps = _ref.pageProps,
            reduxStore = _ref.reduxStore;
        return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
          store: r…
       */
      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      /**
       * this.props
       *  Component: ƒ homepage1()
          err: undefined
          initialReduxState:
            cartReducer: []
            homepageReducer: {filter: {…}, GetDestination: Array(5), GetSource: Array(8)}
            shopReducers: {filter: {…}}
            wishlistReducer: []
            _persist: {version: -1, rehydrated: true}
            __proto__: Object
          router: Router
          asPath: "/homepages/homepage1"
          basePath: ""
          clc: null
          components: {/homepages/homepage1: {…}, /_app: {…}}
          events: {on: ƒ, off: ƒ, emit: ƒ}
          isFallback: false
          isSsr: false
          onPopState: ƒ (e)
          pageLoader: PageLoader {buildId: "development", assetPrefix: "", pageCache: {…}, pageRegisterEvents: {…}, loadingRoutes: {…}, …}
          pathname: "/homepages/homepage1"
          query: {}
          route: "/homepages/homepage1"
          sdc: {}
          sub: ƒ subscription(_ref6, App)
          _bps: undefined
          _getServerData: ƒ (asPath)
          _getStaticData: ƒ (asPath)
          _wrapApp: ƒ wrapApp(App)
          __proto__: Object

          this.reduxStore同上
       */
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
