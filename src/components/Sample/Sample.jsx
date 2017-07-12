import React, { Component, PropTypes } from 'react'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import ENV from 'utils/builds/environment'
import './Sample.scss'

export default class Sample extends Component {
  static propTypes = {
    reduxState: PropTypes.shape({
      // router: PropTypes.object.isRequired,
    }),
    reduxActions: PropTypes.shape({
      // actionName: PropTypes.func.isRequired,
    }),
  }
  // static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `Sample.jsx`
    this.state = {}
  }

  componentWillMount = () => tryCatch(this, arguments, () => {})
  componentDidMount = () => tryCatch(this, arguments, () => {})
  componentWillReceiveProps = nextProps => tryCatch(this, arguments, () => {})
  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || _isEqual(this.state, nextState)
  componentWillUpdate = (nextProps, nextState) => tryCatch(this, arguments, () => {})
  componentDidUpdate = (prevProps, prevState) => tryCatch(this, arguments, () => {})
  componentWillUnmount = () => tryCatch(this, arguments, () => {})

  render = () => tryCatch(this, arguments, () => {
    console.log(ENV)
    return (
      <div className="Sample">Sample</div>
    )
  })
}
