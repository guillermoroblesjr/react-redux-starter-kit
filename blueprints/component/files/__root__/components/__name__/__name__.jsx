import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {},
})

class <%= pascalEntityName %> extends Component {
  // static propTypes = {
  //   router: PropTypes.shape({}).isRequired,
  //   stateName: PropTypes.shape({}).isRequired,
  //   actionName: PropTypes.func.isRequired,
  // }
  // static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `<%= pascalEntityName %>.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    const { classes } = this.props
    return (
      <div className={[`<%= pascalEntityName %>`, classes.root].join(` `)}><%= pascalEntityName %></div>
    )
  }
}

export default withStyles(styles)(<%= pascalEntityName %>)
