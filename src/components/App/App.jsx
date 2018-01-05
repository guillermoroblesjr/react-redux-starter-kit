import React, { Component } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme()

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.fileIdentifier = `App.jsx`
    this.state = {}
  }

  shouldComponentUpdate = () => false

  render = () => (
    <Provider store={this.props.store}>
      <div style={{ height: `100%` }}>
        <MuiThemeProvider theme={theme}>
          <Router history={browserHistory} children={this.props.routes} />
        </MuiThemeProvider>
      </div>
    </Provider>
  )
}
