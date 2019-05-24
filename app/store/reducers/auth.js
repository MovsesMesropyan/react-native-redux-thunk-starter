import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_START,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from '../actions/actionTypes';
import utils from '../../services/utils';

const initialState = {
	user: {},
	loading: false
};

/* auth start */
const loginStart = (state, action) => {
	return utils.updateObject(state, {
		loading: true
	});
};

const loginSuccess = (state, action) => {
	return utils.updateObject(state, {
		user: action.user,
		loading: false
	});
};

const loginFail = (state, action) => {
	return utils.updateObject(state, {
		user: {},
		loading: false
	});
};

const logoutStart = (state, action) => {
	return utils.updateObject(state, {
		loading: true
	});
};

const logoutSuccess = (state, action) => {
	return utils.updateObject(state, {
		user: action.user,
		loading: false
	});
};

const logoutFail = (state, action) => {
	return utils.updateObject(state, {
		user: {},
		loading: false
	});
};
/* auth end */

const authReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOGIN_START: return loginStart(state, action);
		case LOGIN_SUCCESS: return loginSuccess(state, action);
		case LOGIN_FAIL: return loginFail(state, action);

		case LOGOUT_START: return logoutStart(state, action);
		case LOGOUT_SUCCESS: return logoutSuccess(state, action);
		case LOGOUT_FAIL: return logoutFail(state, action);

		default:
			return state;
	}
};

export default authReducer;