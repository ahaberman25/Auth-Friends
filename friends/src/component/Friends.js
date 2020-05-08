import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

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

	console.log("friends from api ", friends);

	return (
		<div>
			{friends
				? friends.map((friend) => (
						<div key={friend.id}>
							<p>
								Name: {friend.name}
								<br />
								Age: {friend.age}
								<br />
								Email: {friend.email}
							</p>
							<button
								onClick={(e) => unFriend(e, friend.id)}>
								unfriend
							</button>
						</div>
				))
				: "loading"}
		</div>
	);
}

export default Friends;
