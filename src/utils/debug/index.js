import React from 'react'
// import ENV from 'utils/builds/environment'
const ENV = `dev`

export const tryCatch = (that, args, fn) => {
  if (ENV === `prod` || ENV === `production`) {
    // return fn.apply(that, args)
    try {
      return fn.apply(that, args)
    }
    catch (e) {
      console.log(e)
    }
    return null
  }

  try {
    return fn.apply(that, args)
  }
  catch (e) {
    console.log(e)
  }

  return (<h1>Oops! Something went wrong.</h1>)
}
