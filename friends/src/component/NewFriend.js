import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

function NewFriend(props) {
	const [input, setInput] = useState({
		name: "",
		age: "",
		email: "",
		id: Date.now(),
	});

	// useEffect(() => {
	// 	axiosWithAuth().post().then().catch();
	// }, []);

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const add = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post(`/friends`, input)
			.then((res) => {
				console.log("res ", res);
				props.history.push("/friends");
			})
			.catch((err) => {
				console.log("error login: ", err);
			});
	};

	return (
		<div>
			<form onSubmit={add}>
				Name: &nbsp;
				<input
					type="text"
					name="name"
					value={input.name}
					onChange={handleChange}
				/>
				<br />
				Age: &nbsp;
				<input
					type="text"
					name="age"
					value={input.age}
					onChange={handleChange}
				/>
				<br />
				Email: &nbsp;
				<input
					type="text"
					name="email"
					value={input.email}
					onChange={handleChange}
				/>
				<br />
				<button>Add New Friend</button>
			</form>
		</div>
	);
}

export default NewFriend;
