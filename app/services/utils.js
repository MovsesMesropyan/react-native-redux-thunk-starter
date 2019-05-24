const utility = {
	updateObject: (oldObject, updatedProperties) => {
		return {
			...oldObject,
			...updatedProperties
		};
	},

	isEmptyObject: (obj) => {
		for(var key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	},

	isJson: (str) => {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}
};

export default utility;