import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Login from "./component/Login.js";
import PrivateRoute from "./component/PrivateRoute";
import Friends from "./component/Friends";
import NewFriend from "./component/NewFriend";

// image import
import friendsImage from "./images/friends-together.jpg";

// material ui
import {
	AppBar,
	Toolbar,
	Typography,
	Button
} from "@material-ui/core";

function App() {
	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		window.location.reload(false);
	};

	return (
		<MainContainer>
			<Router>
				<Image>
					<img src={friendsImage} alt="friends" />
				</Image>
				<AppContainer>
					<AppInnerContainer>
						<ul>
							{localStorage.getItem("token") === null ? (
								<h2>Login to FRIENDS</h2>
							) : (
								<ProtectedContainer>
									<AppBar position="static">
										<Toolbar>
											<Typography
												variant="h6"
												className="title">
												<Link to="/friends">
													Friends
												</Link>
											</Typography>
											<Typography
												variant="h6"
												className="title">
												<Link to="/addFriend">
													Add Friend
												</Link>
											</Typography>
											<Button
												className='logout'
												color="inherit"
												onClick={logout}>
												logout
											</Button>
										</Toolbar>
									</AppBar>
								</ProtectedContainer>
							)}
						</ul>
						<Switch>
							<PrivateRoute
								exact
								path="/friends"
								component={Friends}
							/>
							<PrivateRoute
								exact
								path="/addFriend"
								component={NewFriend}
							/>
							<Route path="/login" component={Login} />
							<Route component={Login} />
						</Switch>
					</AppInnerContainer>
				</AppContainer>
			</Router>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const AppContainer = styled.div`
	width: 45%;
`;

const AppInnerContainer = styled.div`
	position: relative;
	top: 200px;
	left: 225px;
	width: 400px;

	ul {
		padding-inline-start: 0px;
	}
`;

const ProtectedContainer = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	top: -200px;

	.title {
		padding: 0px 10px;

		a {
			color: white;
			text-decoration: none;
		}
	}

	li {
		list-style: none;
		padding: 5px;
	}

	.logout {
		position: relative;
		left: 100px;
	}
`;

const Image = styled.div`
	width: 55%;
	overflow: hidden;

	img {
		height: 150vh;
		width: 90vw;
	}
`;

export default App;
