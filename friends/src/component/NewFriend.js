import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

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
		<NewFriendContainer>
			<h2>Add a New Friend</h2>
			<form onSubmit={add}>
				<TextField
					type="text"
                    name="name"
                    label='name'
					value={input.name}
					onChange={handleChange}
				/><br />
				<TextField
					type="text"
                    name="age"
                    label='age'
					value={input.age}
					onChange={handleChange}
				/><br />
				<TextField
					type="text"
                    name="email"
                    label='email'
					value={input.email}
					onChange={handleChange}
				/><br />
				<Button className='new-friend-btn' variant="contained" color="primary" type='submit'>Add New Friend</Button>
			</form>
		</NewFriendContainer>
	);
}

const NewFriendContainer = styled.div`
	position: relative;
	top: -200px;

	.new-friend-btn {
		margin: 10px 0px;
	}
`;

export default NewFriend;
