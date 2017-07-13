import { Promise } from 'rsvp'
import { connect } from 'react-redux'

const promisesBundles =  {
  AppContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/App/AppContainer').mapDispatchToProps
      const mapStateToProps = require('components/App/AppContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'AppContainer')
  }),
  App: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const App = require('components/App/App').default

      resolve({
        App
      })

      /* Webpack named bundle   */
    }, 'App')
  })
}

export default promisesBundles
