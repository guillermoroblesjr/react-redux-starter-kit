import { connect } from 'react-redux'
import Home from '../Home'
import { mapStateToProps, mapDispatchToProps } from '../HomeContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Home)
