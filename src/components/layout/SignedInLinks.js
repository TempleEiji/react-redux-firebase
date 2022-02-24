import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
            <ul className="right">
            <li><NavLink to='/create'>新規投稿</NavLink></li>
            <li><a onClick={props.signOut} >ログアウト</a></li>
            <li><NavLink to='/' className="btn btn-floating lighten-2 lighten-1">
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);