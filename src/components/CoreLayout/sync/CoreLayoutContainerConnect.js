import { connect } from 'react-redux'
import CoreLayout from '../CoreLayout'
import { mapStateToProps, mapDispatchToProps } from '../CoreLayoutContainer'

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
