import React, { Component } from 'react'
import { containerLoader } from './HomeLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      HomeContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { Home } = data.Home
      const { connect, mapStateToProps, mapDispatchToProps } = data.HomeContainer
      const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
      this.setState({
        HomeContainer,
      })
    })
  }

  render() {
    if (this.state.HomeContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.HomeContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
