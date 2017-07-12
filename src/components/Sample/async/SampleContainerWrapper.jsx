import React, { Component } from 'react'
import { containerLoader } from './SampleLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SampleContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { Sample } = data.Sample
      const { connect, mapStateToProps, mapDispatchToProps } = data.SampleContainer
      const SampleContainer = connect(mapStateToProps, mapDispatchToProps)(Sample)
      this.setState({
        SampleContainer,
      })
    })
  }

  render() {
    if (this.state.SampleContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.SampleContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
