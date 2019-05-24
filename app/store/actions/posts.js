import API from '../../services/api/api';

import {
	GET_POSTS_START,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL,
	GET_POST_DETAILS_START,
	GET_POST_DETAILS_SUCCESS,
	GET_POST_DETAILS_FAIL
} from './actionTypes';

/* posts start */
export const getPostsStart = () => {
	return {
		type: GET_POSTS_START
	};
};

export const getPostsSuccess = posts => {
	return {
		type: GET_POSTS_SUCCESS,
		posts
	};
};

export const getPostsFail = () => {
	return {
		type: GET_POSTS_FAIL,
		posts: []
	};
};

export const getPosts = () => {
	return (dispatch, getState) => {
		dispatch(getPostsStart());
		API.getPosts()
			.then(response => {
				dispatch(getPostsSuccess(response));
			})
			.catch( error => {
				dispatch(getPostsFail());
				console.log(error);
			});

	};
};
/* posts end */

/* post details start */
export const getPostDetailsStart = () => {
	return {
		type: GET_POST_DETAILS_START
	};
};

export const getPostDetailsSuccess = postDetails => {
	return {
		type: GET_POST_DETAILS_SUCCESS,
		postDetails
	};
};

export const getPostDetailsFail = () => {
	return {
		type: GET_POST_DETAILS_FAIL
	};
};

export const getPostDetails = id => {
	return (dispatch, getState) => {
		dispatch(getPostDetailsStart());
		API.getPostDetails(id)
			.then(response => {
				dispatch(getPostDetailsSuccess(response));
			})
			.catch( error => {
				dispatch(getPostDetailsFail());
				console.log(error);
			});

	};
};
/* details end */