import hash from 'promise-hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    CoreLayoutContainer,
    CoreLayout,
  } = promisesBundles
  const promises = {
    CoreLayoutContainer,
    CoreLayout,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    CoreLayout,
  } = promisesBundles
  const promises = {
    CoreLayout,
  }
  return hash(promises)
}
