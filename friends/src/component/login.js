import React, { useState } from "react";
// import { axiosWithAuth } from "../util/axiosWithAuth";

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
    // axiosWithAuth()
    //   .post("/login", cred.credentials)
    //   .then(res => {
    //     console.log("res ", res);
    //     localStorage.setItem("token", res.data.payload);
    //     props.history.push("/protected");
    //   })
    //   .catch(err => {
    //     console.log("error login: ", err);
    //   });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={cred.credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={cred.credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
