import React from 'react'
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

export const SignedInLinks = ({ signOut, profile }) => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);