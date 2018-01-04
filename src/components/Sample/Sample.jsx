import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

  constructor(props) {
    super(props)
    this.fileIdentifier = `Sample.jsx`
    this.state = {
      showTextareaForm: false,
    }
  }

  // componentWillMount = () => tryCatch(this, arguments, () => {})
  // componentDidMount = () => tryCatch(this, arguments, () => {})
  // componentWillReceiveProps = nextProps => tryCatch(this, arguments, () => {})
  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)

  // componentWillUpdate = (nextProps, nextState) => tryCatch(this, arguments, () => {})
  // componentDidUpdate = (prevProps, prevState) => tryCatch(this, arguments, () => {})
  // componentWillUnmount = () => tryCatch(this, arguments, () => {})

  nextButtonOnClick = () => {
    console.log(`clicked button`)
    this.setState({
      showTextareaForm: true,
    })
  }

  render = () => tryCatch(this, arguments, () => (
    <div className="Sample">
      <div>{`Please click button continue`}</div>
      <button
        className={[`btn`, `primary`].join(` `)} onClick={() => {
          this.nextButtonOnClick()
        }}
      >Next</button>

      <div
        className={[
          this.state.showTextareaForm
          ? null
          : `hidden`,
        ].join(` `)}
      >
        <h3>{`Please enter random text`}</h3>
        <textarea rows="10" cols="30" />
      </div>

      <p>{`Your current environment is: ${ENV}`}</p>
    </div>
    ))
}
