import React, { Component, PropTypes } from 'react'
import _isEqual from 'lodash.isequal'
import { traceStack } from 'utils/debug'
import { Component as Sample } from 'components/Sample/async'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {},
})

class Example extends Component {
  // static propTypes = {
  //   router: PropTypes.shape({}).isRequired,
  //   stateName: PropTypes.shape({}).isRequired,
  //   actionName: PropTypes.func.isRequired,
  // }
  // static defaultProps = {}

  constructor(props) {
    super(props)
    this.fileIdentifier = `Example.jsx`
    this.state = {}
  }

  componentWillMount = () => traceStack(this, arguments, () => {})
  componentDidMount = () => traceStack(this, arguments, () => {})
  componentWillReceiveProps = nextProps => traceStack(this, arguments, () => {})
  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)
  componentWillUpdate = (nextProps, nextState) => traceStack(this, arguments, () => {})
  componentDidUpdate = (prevProps, prevState) => traceStack(this, arguments, () => {})
  componentWillUnmount = () => traceStack(this, arguments, () => {})

  shouldRenderNull = () => false

  render = () => traceStack(this, arguments, () => {
    if (this.shouldRenderNull()) return null
    const { classes } = this.props
    return (
      <div className={[`Example`, classes.root].join(` `)}>
        <Sample />
      </div>
    )
  })
}

export default withStyles(styles)(Example)
