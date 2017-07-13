import { hash } from 'rsvp'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    ExampleContainer,
    Example,
  } = promisesBundles
  const promises = {
    ExampleContainer,
    Example,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    Example,
  } = promisesBundles
  const promises = {
    Example,
  }
  return hash(promises)
}
