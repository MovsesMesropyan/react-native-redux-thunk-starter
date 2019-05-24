import utils from '../../services/utils';
import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_START,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from './actionTypes';

/* auth start */
const loginStart = () => {
	return {
		type: LOGIN_START
	};
};

const loginSuccess = user => {
	return {
		type: LOGIN_SUCCESS,
		user
	};
};

const loginFail = () => {
	return {
		type: LOGIN_FAIL
	};
};

const logoutStart = () => {
	return {
		type: LOGOUT_START
	};
};

const logoutSuccess = user => {
	return {
		type: LOGOUT_SUCCESS,
		user
	};
};

const logoutFail = () => {
	return {
		type: LOGOUT_FAIL
	};
};

export const login = userData => {
	return (dispatch, getState) => {
		dispatch(loginStart());

		//TODO imitation backend call
		setTimeout(() => {
			dispatch(loginSuccess({email: userData.email}));
		}, 500);
	};
};

export const logout = () => {
	return (dispatch, getState) => {
		dispatch(logoutStart());

		//TODO imitation backend call
		setTimeout(() => {
			dispatch(logoutSuccess({}));
		}, 200);
	};
};
/* auth end */