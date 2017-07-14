export default hashOfPromises => {
  const keys = Object.keys(hashOfPromises)
  return Promise.all(keys.map((key) => hashOfPromises[key])).then((list) => list.reduce((hashOfResolved, value, i) => {
    hashOfResolved[keys[i]] = value
    return hashOfResolved
  }, {}))
}
