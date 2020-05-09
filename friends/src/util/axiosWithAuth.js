import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		baseURL: "https://ah-auth-friends-server.herokuapp.com/api",
		headers: {
			Authorization: token,
		},
	});
};
