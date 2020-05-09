import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import styled from "styled-components";
import { Button } from '@material-ui/core';

function Friends(props) {
	// console.log('friends props: ', props)
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get("/friends")
			.then((res) => {
				setFriends(res.data);
			});
	}, []);

	function unFriend(e, id) {
		e.preventDefault();
		console.log("deleting");
		axiosWithAuth()
			.delete(`friends/${id}`)
			.then((res) => console.log(res))
			.catch((err) => console.log("delete error ", err))
			.finally(() => window.location.reload());
	}

	// console.log("friends from api ", friends);

	return (
		<FriendsContainer>
			<h2>Your Friends</h2>
			{friends
				? friends.map((friend) => (
						<FriendContainer key={friend.id}>
							<p>
								Name: {friend.name}
								<br />
								Age: {friend.age}
								<br />
								Email: {friend.email}
							</p>
							<Button
								onClick={(e) => unFriend(e, friend.id)}
								variant="contained"
								color="primary">
								unfriend
							</Button>
						</FriendContainer>
				))
				: "loading"}
		</FriendsContainer>
	);
}

const FriendsContainer = styled.div`
	position: relative;
	top: -200px;
`;

const FriendContainer = styled.div`
	padding: 15px;
	margin: 15px;
	background-color: smokewhite;
	border: black 1px solid;
	text-align: center;
`;

export default Friends;
