import React, { Component } from 'react'
import { containerLoader } from './CoreLayoutLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CoreLayoutContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { CoreLayout } = data.CoreLayout
      const { connect, mapStateToProps, mapDispatchToProps } = data.CoreLayoutContainer
      const CoreLayoutContainer = connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
      this.setState({
        CoreLayoutContainer,
      })
    })
  }

  render() {
    if (this.state.CoreLayoutContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.CoreLayoutContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
