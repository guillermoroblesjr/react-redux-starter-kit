import { connect } from 'react-redux'

const promisesBundles = {
  HomeContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const mapDispatchToProps = require(`components/Home/HomeContainer`).mapDispatchToProps
      const mapStateToProps = require(`components/Home/HomeContainer`).mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, `HomeContainer`)
  }),
  Home: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const Home = require(`components/Home/Home`).default

      resolve({
        Home,
      })

      /* Webpack named bundle   */
    }, `Home`)
  }),
}

export default promisesBundles
