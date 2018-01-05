import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { IndexLink, Link } from 'react-router'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    textAlign: `center`,
  },
  activeLink: {
    fontWeight: `bold`,
    textDecoration: `underline`,
  },
  viewPort: {
    paddingTop: `4rem`,
  },
})

class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
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
    const { classes } = this.props
    return (
      <div className={[`CoreLayout`, classes.root].join(` `)}>
        <h1>React Redux Starter Kit</h1>
        <IndexLink to="/" activeClassName={classes.activeLink}>Home</IndexLink>
        {` · `}
        <Link to="/counter" activeClassName={classes.activeLink}>Counter</Link>
        {` · `}
        <Link to="/example" activeClassName={classes.activeLink}>Example</Link>
        <div className={classes.viewPort}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CoreLayout)
