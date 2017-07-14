import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    AppContainer,
    App,
  } = promisesBundles
  const promises = {
    AppContainer,
    App,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    App,
  } = promisesBundles
  const promises = {
    App,
  }
  return hash(promises)
}
