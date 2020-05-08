import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

function NewFriend(props) {
	const [input, setInput] = useState({
		name: "",
		age: "",
		email: "",
		id: Date.now(),
	});

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
				<input
					type="text"
                    name="name"
                    Placeholder='name'
					value={input.name}
					onChange={handleChange}
				/>
				<input
					type="text"
                    name="age"
                    Placeholder='age'
					value={input.age}
					onChange={handleChange}
				/>
				<input
					type="text"
                    name="email"
                    Placeholder='email'
					value={input.email}
					onChange={handleChange}
				/>
				<button>Add New Friend</button>
			</form>
		</div>
	);
}

export default NewFriend;
