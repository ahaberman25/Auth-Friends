import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import styled from 'styled-components';

// Material UI
import { TextField, Button } from '@material-ui/core';


function Login(props) {
	console.log("app props: ", props);

	const [cred, setCred] = useState({
		credentials: {
			username: "",
			password: "",
		},
	});

	const handleChange = (e) => {
		setCred({
			credentials: {
				...cred.credentials,
				[e.target.name]: e.target.value,
			},
		});
	};

	const login = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post("/login", cred.credentials)
			.then((res) => {
				console.log("res ", res);
				localStorage.setItem("token", res.data.payload);
				props.history.push("/friends");
			})
			.catch((err) => {
				console.log("error login: ", err);
			})
			.finally(() => window.location.reload());
	};

	return (
		<Container>
			<form onSubmit={login}>
				<TextField
					id='standard-basic'
					type="text"
					name="username"
					label='Username'
					value={cred.credentials.username}
					onChange={handleChange}
				/>
				&nbsp;
				<TextField
					id='standard-basic'
					type="password"
					name="password"
					label='Password'
					value={cred.credentials.password}
					onChange={handleChange}
				/><br />
				<Button className='log-in-btn' variant="contained" color="primary" type='submit'>Log in</Button>
			</form>
		</Container>
	);
}

const Container = styled.div`

	.log-in-btn {
		margin: 10px 0px;
	}
`;

export default Login;


