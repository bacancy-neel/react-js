import API from '../API';

export default {
	_(url) {
		return {
			get: () => API.get(url)
				.then(res => {
					console.log(res);
					return res.data;
				})
				.catch(err => { return this.handleError(err) }),
			post: (data) => API.post(url, data)
				.then(res => {
					console.log(res);
					return res;
				})
				.catch(err => { return this.handleError(err) }),
			put: (data) => API.put(url, data)
				.then(res => {
					console.log(res);
					return res;
				})
				.catch(err => { return this.handleError(err) }),
			delete: () => API.delete(url)
				.then(res => {
					console.log(res);
					return res;
				})
				.catch(err => { return this.handleError(err) })

		}
	},

	handleError(err) {
		return {
			error: { error: true, msg: err }
		}
	}
}