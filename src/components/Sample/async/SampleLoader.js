import hash from 'promise-hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    SampleContainer,
    Sample,
  } = promisesBundles
  const promises = {
    SampleContainer,
    Sample,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    Sample,
  } = promisesBundles
  const promises = {
    Sample,
  }
  return hash(promises)
}
