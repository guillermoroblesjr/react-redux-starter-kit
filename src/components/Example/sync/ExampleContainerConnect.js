import { connect } from 'react-redux'
import Example from '../Example'
import { mapStateToProps, mapDispatchToProps } from '../ExampleContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Example)
