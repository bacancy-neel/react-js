
import call from '../HttpInterceptor/httpInterceptor'

const getAllUser = (num) => {
	let url = `users?page=${num}`;
	let res = call._(url).get();
	return res.then(rs => {
		console.log("INTERCEPTOR RESPONSE:::", rs)
		if (rs.success) return rs.data;
		else throw new Error(rs.err);
	})
}

const getUserData = (id) => {
	let url = `users/${id}`;
	let res = call._(url).get();
	return res.then(rs => {
		console.log("INTERCEPTOR RESPONSE:::", rs)
		if (rs.success) return rs.data;
		else throw new Error(rs.err);
	})
}

const addUser = (data) => {
	let url = 'users';
	let res = call._(url).post(data);
	return res.then(rs => {
		console.log("INTERCEPTOR RESPONSE:::", rs)
		if (rs.success) return rs;
		else throw new Error(rs.err);
	})
}

const editUser = (id, data) => {
	let url = `users/${id}`;
	let res = call._(url).put(data);
	return res.then(rs => {
		console.log("INTERCEPTOR RESPONSE:::", rs)
		if (rs.success) return rs;
		else throw new Error(rs.err);
	})
}

const deleteUser = (id) => {
	let url = `users/${id}`;
	let res = call._(url).delete();
	return res.then(rs => {
		console.log("INTERCEPTOR RESPONSE:::", rs)
		if (rs.success) return rs;
		else throw new Error(rs.err);
	})
}

export { getAllUser, getUserData, addUser, editUser, deleteUser }