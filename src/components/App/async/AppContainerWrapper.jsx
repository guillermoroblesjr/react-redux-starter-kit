import React, { Component } from 'react'
import { containerLoader } from './AppLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AppContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { App } = data.App
      const { connect, mapStateToProps, mapDispatchToProps } = data.AppContainer
      const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
      this.setState({
        AppContainer,
      })
    })
  }

  render() {
    if (this.state.AppContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.AppContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
