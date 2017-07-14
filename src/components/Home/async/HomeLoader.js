import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    HomeContainer,
    Home,
  } = promisesBundles
  const promises = {
    HomeContainer,
    Home,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    Home,
  } = promisesBundles
  const promises = {
    Home,
  }
  return hash(promises)
}
