import {
	GET_POSTS_START,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL,
	GET_POST_DETAILS_START,
	GET_POST_DETAILS_SUCCESS,
	GET_POST_DETAILS_FAIL
} from '../actions/actionTypes';
import utils from '../../services/utils';

const initialState = {
	posts: [],
	loading: false,
	postDetails: {},
	postDetailsIsLoading: false
};

/* posts start */
const getPostsStart = (state, action) => {
	return utils.updateObject(state, {
		loading: true
	});
};

const getPostsSuccess = (state, action) => {
	return utils.updateObject(state, {
		posts: action.posts,
		loading: false
	});
};

const getPostsFail = (state, action) => {
	return utils.updateObject(state, {
		posts: [],
		loading: false
	});
};
/* posts end */

/* post details start */
const getPostDetailsStart = (state, action) => {
	return utils.updateObject(state, {
		postDetailsIsLoading: true
	});
};

const getPostDetailsSuccess = (state, action) => {
	return utils.updateObject(state, {
		postDetails: action.postDetails,
		postDetailsIsLoading: false
	});
};

const getPostDetailsFail = (state, action) => {
	return utils.updateObject(state, {
		postDetails: {},
		postDetailsIsLoading: false
	});
};
/* post details end */

const postsReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case GET_POSTS_START: return getPostsStart(state, action);
		case GET_POSTS_SUCCESS: return getPostsSuccess(state, action);
		case GET_POSTS_FAIL: return getPostsFail(state, action);

		case GET_POST_DETAILS_START: return getPostDetailsStart(state, action);
		case GET_POST_DETAILS_SUCCESS: return getPostDetailsSuccess(state, action);
		case GET_POST_DETAILS_FAIL: return getPostDetailsFail(state, action);

		default:
			return state;
	}
};

export default postsReducer;