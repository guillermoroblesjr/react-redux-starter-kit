import { Promise } from 'rsvp'
import { connect } from 'react-redux'

const promisesBundles =  {
  ExampleContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/Example/ExampleContainer').mapDispatchToProps
      const mapStateToProps = require('components/Example/ExampleContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'ExampleContainer')
  }),
  Example: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const Example = require('components/Example/Example').default

      resolve({
        Example
      })

      /* Webpack named bundle   */
    }, 'Example')
  })
}

export default promisesBundles
