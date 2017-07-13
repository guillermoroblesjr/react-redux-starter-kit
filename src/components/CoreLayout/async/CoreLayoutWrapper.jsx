import React, { Component } from 'react'
import { componentLoader } from './CoreLayoutLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CoreLayout: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { CoreLayout } = data.CoreLayout
      this.setState({
        CoreLayout,
      })
    })
  }

  render() {
    if (this.state.CoreLayout === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.CoreLayout
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
