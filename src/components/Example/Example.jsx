import React, { Component, PropTypes } from 'react'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import { Component as Sample } from 'components/Sample/async'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {},
})

class Example extends Component {
  // static propTypes = {
  //   reduxState: PropTypes.shape({
  //     router: PropTypes.object.isRequired,
  //   }),
  //   reduxActions: PropTypes.shape({
  //     actionName: PropTypes.func.isRequired,
  //   }),
  // }
  // static defaultProps = {}

  constructor(props) {
    super(props)
    this.fileIdentifier = `Example.jsx`
    this.state = {}
  }

  componentWillMount = () => tryCatch(this, arguments, () => {})
  componentDidMount = () => tryCatch(this, arguments, () => {})
  componentWillReceiveProps = nextProps => tryCatch(this, arguments, () => {})
  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)
  componentWillUpdate = (nextProps, nextState) => tryCatch(this, arguments, () => {})
  componentDidUpdate = (prevProps, prevState) => tryCatch(this, arguments, () => {})
  componentWillUnmount = () => tryCatch(this, arguments, () => {})

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    const { classes } = this.props
    return (
      <div className={[`Example`, classes.root].join(` `)}>
        <Sample />
      </div>
    )
  }
}

export default withStyles(styles)(Example)
