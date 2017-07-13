import React, { Component } from 'react'
import { componentLoader } from './HomeLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Home: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { Home } = data.Home
      this.setState({
        Home,
      })
    })
  }

  render() {
    if (this.state.Home === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.Home
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
