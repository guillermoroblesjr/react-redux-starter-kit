import React, { Component } from 'react'
import { containerLoader } from './ExampleLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ExampleContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { Example } = data.Example
      const { connect, mapStateToProps, mapDispatchToProps } = data.ExampleContainer
      const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(Example)
      this.setState({
        ExampleContainer,
      })
    })
  }

  render() {
    if (this.state.ExampleContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.ExampleContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
