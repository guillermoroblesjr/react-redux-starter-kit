// import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'example',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ExampleContainer = require('components/Example/async').Container
      // const reducer = require('./reducers').default

      /*  Add the reducer to the store */
      // injectReducer(store, { key: 'ExampleContainer', reducer })

      /*  Return getComponent   */
      cb(null, ExampleContainer)

    /* Webpack named bundle   */
    }, 'ExampleRoute')
  },
})

export const exampleOneParamRoute = (store) => ({
  path: `example/:param1`,
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const ExampleContainer = require(`components/Example/async`).Container
      cb(null, ExampleContainer)
    }, `ExampleContainer`)
  },
})
