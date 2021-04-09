const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return { ...state, authError: null };
        case 'LOGIN_ERROR':
            return { ...state, authError: 'Login failed' };
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success: ');
            return { ...state }
        case 'SIGNUP_SUCCESS':
            console.log('Signup success');
            return { ...state, authError: null }
        case 'SIGNUP_ERROR':
            console.log('Signup error');
            return { ...state, authError: action.err.message }
        default:
            return { ...state }
    }
}

export default authReducer;