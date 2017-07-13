import { Promise } from 'rsvp'
import { connect } from 'react-redux'

const promisesBundles =  {
  SampleContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/Sample/SampleContainer').mapDispatchToProps
      const mapStateToProps = require('components/Sample/SampleContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'SampleContainer')
  }),
  Sample: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const Sample = require('components/Sample/Sample').default

      resolve({
        Sample
      })

      /* Webpack named bundle   */
    }, 'Sample')
  })
}

export default promisesBundles
