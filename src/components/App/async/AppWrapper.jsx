import React, { Component } from 'react'
import { componentLoader } from './AppLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      App: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { App } = data.App
      this.setState({
        App,
      })
    })
  }

  render() {
    if (this.state.App === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.App
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
