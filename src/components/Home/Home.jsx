import React, { Component, PropTypes } from 'react'
import _isEqual from 'lodash.isequal'
import DuckImage from 'static/img/Duck.jpg'
import ENV from 'utils/builds/environment'
import { Component as Sample } from 'components/Sample/sync'
import './Home.scss'

export default class Home extends Component {
  // static propTypes = {
  //   reduxState: PropTypes.shape({
  //     router: PropTypes.object.isRequired,
  //   }),
  //   reduxActions: PropTypes.shape({
  //     actionName: PropTypes.func.isRequired,
  //   }),
  // }
  // static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `Home.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="Home">
        <h4>Welcome!</h4>
        <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
        <p>{`Your current environment is: ${ENV}`}</p>
        <Sample></Sample>
      </div>
    )
  }
}
