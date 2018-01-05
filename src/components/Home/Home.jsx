import React, { Component, PropTypes } from 'react'
import _isEqual from 'lodash.isequal'
import DuckImage from 'static/img/Duck.jpg'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {},
  duck: {
    display: `block`,
    width: `120px`,
    margin: `1.5rem auto`,
  },
})

class Home extends Component {
  // static propTypes = {
  //   router: PropTypes.shape({}).isRequired,
  //   stateName: PropTypes.shape({}).isRequired,
  //   actionName: PropTypes.func.isRequired,
  // }
  // static defaultProps = {}

  constructor(props) {
    super(props)
    this.fileIdentifier = `Home.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    const { classes } = this.props
    return (
      <div className={[`Home`, classes.root].join(` `)}>
        <h4>Welcome!</h4>
        <img alt="This is a duck, because Redux!" className={classes.duck} src={DuckImage} />
      </div>
    )
  }
}

export default withStyles(styles)(Home)
