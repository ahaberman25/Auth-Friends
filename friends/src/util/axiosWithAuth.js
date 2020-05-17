import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		baseURL: "https://evening-coast-75166.herokuapp.com/api",
		headers: {
			Authorization: token,
		},
	});
};
