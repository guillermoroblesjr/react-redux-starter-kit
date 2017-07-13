import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { IndexLink, Link } from 'react-router'
import './CoreLayout.scss'

export default class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    // reduxState: PropTypes.shape({
    //   router: PropTypes.object.isRequired,
    // }),
    // reduxActions: PropTypes.shape({
    //   actionName: PropTypes.func.isRequired,
    // }),
  }
  // static defaultProps = {}

  constructor(props) {
    super(props)
    this.fileIdentifier = `CoreLayout.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="CoreLayout container text-center">
        <h1>React Redux Starter Kit</h1>
        <IndexLink to="/" activeClassName="page-layout__nav-item--active">Home</IndexLink>
        {` · `}
        <Link to="/counter" activeClassName="page-layout__nav-item--active">Counter</Link>
        {` · `}
        <Link to="/example" activeClassName="page-layout__nav-item--active">Example</Link>
        <div className="page-layout__viewport">
          {this.props.children}
        </div>
      </div>
    )
  }
}
