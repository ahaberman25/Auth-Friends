import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./component/Login";
import PrivateRoute from "./component/PrivateRoute";
import Friends from "./component/Friends";
import NewFriend from "./component/NewFriend";

function App() {
	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		window.location.reload(false);
	};

	return (
		<Router>
			<div className="App">
				<ul>
					{localStorage.getItem("token") === null ? (
						<h2>Login</h2>
					) : (
						<div className="protected">
							<button onClick={logout}>Logout</button>
							<li>
								<Link to="/friends">Friends</Link>
							</li>
							<li>
								<Link to="/addfriend">Add Friend</Link>
							</li>
						</div>
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
						path="/addfriend"
						component={NewFriend}
					/>
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
