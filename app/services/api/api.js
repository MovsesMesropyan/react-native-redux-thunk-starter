const checkStatus = async response => {
	if (response.status === 204) {
		return null;
	}

	const responseJson = await response.json();
	if (response.ok) {
		return responseJson;
	}

	throw {message: responseJson.detail, validationErrors: responseJson.validation_messages};
};

const API = {
	getPosts: () => {
		return fetch(`https://jsonplaceholder.typicode.com/posts`, {
			method: 'GET',
		}).then(checkStatus);
	},

	getPostDetails: id => {
		return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'GET',
		}).then(checkStatus);

	}
};

export default API;
