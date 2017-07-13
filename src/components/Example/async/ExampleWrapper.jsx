import React, { Component } from 'react'
import { componentLoader } from './ExampleLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Example: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { Example } = data.Example
      this.setState({
        Example,
      })
    })
  }

  render() {
    if (this.state.Example === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.Example
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
