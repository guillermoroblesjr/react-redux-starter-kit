// import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: '',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const HomeContainer = require('components/Home/async').Container
      // const reducer = require('./reducers').default

      /*  Add the reducer to the store */
      // injectReducer(store, { key: 'HomeContainer', reducer })

      /*  Return getComponent   */
      cb(null, HomeContainer)

    /* Webpack named bundle   */
    }, 'HomeRoute')
  },
})
