import Button from "../components/Button";
import Input from "../components/Input";
import React, { useState } from 'react';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: handle login logic here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <Input
          label="Username:"
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />

        <Input
          label="Password:"
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <div>
          <input
            id="rememberMe"
            type="checkbox"
            value={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <Button type="primary" label="Login" onClick={handleLogin} />
      </form>
    </div>
  );
}

export default Login;
