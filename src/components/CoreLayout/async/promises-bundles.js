import { Promise } from 'rsvp'
import { connect } from 'react-redux'

const promisesBundles =  {
  CoreLayoutContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/CoreLayout/CoreLayoutContainer').mapDispatchToProps
      const mapStateToProps = require('components/CoreLayout/CoreLayoutContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'CoreLayoutContainer')
  }),
  CoreLayout: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const CoreLayout = require('components/CoreLayout/CoreLayout').default

      resolve({
        CoreLayout
      })

      /* Webpack named bundle   */
    }, 'CoreLayout')
  })
}

export default promisesBundles
