import Auth from '../components/auth';
import cc from '../lib/utils';

import * as AuthActions from '../actions/auth'
import * as SocketActions from '../actions/socket'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => {
    cc.log("State: ", state)
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapActionsToProps = (dispatch) => { return bindActionCreators({...AuthActions, ...SocketActions}, dispatch) }

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Auth))