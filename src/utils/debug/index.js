import React from 'react'
import ENV from 'utils/builds/environment'

export const traceStack = (that, args, fn) => {
  if (ENV === `dev` || ENV === `development` || `local`) {
    try {
      return fn.apply(that, args)
    }
    catch (e) {
      console.log(e)
    }

    return (<h1>Oops! Something went wrong.</h1>)
  }

  return fn.apply(that, args)
}
