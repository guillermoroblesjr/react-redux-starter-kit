import React, { Component } from 'react'
import { componentLoader } from './SampleLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Sample: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { Sample } = data.Sample
      this.setState({
        Sample,
      })
    })
  }

  render() {
    if (this.state.Sample === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.Sample
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
