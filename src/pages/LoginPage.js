import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import ErrorAlert from "../components/ErrorAlert";

import { logIn } from "../api/userapi";

class LoginPage extends Component {
  state = {
    errorMessage: null
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="bg-gray-200 h-screen flex items-center justify-center flex-col">
        {errorMessage != null ? (
          <ErrorAlert errorMessage="Invalid username or password" />
        ) : null}
        <LoginForm logIn={logIn} />
      </div>
    );
  }
}

export default LoginPage;
