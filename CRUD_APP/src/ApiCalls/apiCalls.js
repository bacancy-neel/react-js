
import call from '../HttpInterceptor/httpInterceptor'

const apiCall = (url) => {
	return {
		getUserData: () => call._(url).get(),
		addUser: (data) => call._(url).post(data),
		editUser: (data) => call._(url).put(data),
		deleteUser: () => call._(url).delete()
	}
}

export default apiCall;