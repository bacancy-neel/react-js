import API from '../API';

export default {
	_(url) {
		return {
			get: () => API.get(url)
				.then(res => {
					console.log("API RESPONSE:::", res);
					return onSuccess(res);
				})
				.catch(() => { return handleError() }),
			post: (data) => API.post(url, data)
				.then(res => {
					console.log("API RESPONSE:::", res);
					return onSuccess(res);
				})
				.catch(() => { return handleError() }),
			put: (data) => API.put(url, data)
				.then(res => {
					console.log("API RESPONSE:::", res);
					return onSuccess(res);
				})
				.catch(() => { return handleError() }),
			delete: () => API.delete(url)
				.then(res => {
					console.log("API RESPONSE:::", res);
					return onSuccess(res);
				})
				.catch(() => { return handleError() })

		}
	},
}

const onSuccess = (res) => {
	return {
		success: true,
		data: res.data,
		err: null
	}
}
const handleError = () => {
	return {
		success: false,
		data: null,
		err: "SOMETHING WENT WRONG"
	}
}