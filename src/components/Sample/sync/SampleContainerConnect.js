import { connect } from 'react-redux'
import Sample from '../Sample'
import { mapStateToProps, mapDispatchToProps } from '../SampleContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Sample)
