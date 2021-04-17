import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FormNotLogged from "../../components/FormNotLogged";
import callApi from "../../api/config";
import {Redirect} from "react-router-dom";

function Login(props) {
  let extra = (
    <div className="text-center mb-4">
      <a className="text-decoration-none" href="/password/reset">Password Reset</a>
    </div>
  )
  const onSubmit = async (values, {setSubmitting}) => {
    const response = await callApi("api/auth/token/", {
      method: 'POST',
      body: JSON.stringify(values),
    });
    if (response.token) {
      localStorage.setItem("token", JSON.stringify(response.token));
    }
    setSubmitting(false);
  }
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  return (
    <>
      { token && <Redirect to="/game" />}
    <FormNotLogged
      extraData={extra}
      title="Login"
      onSubmit={onSubmit}
      buttonCancel={{name: "Sign Up", url: "/sign-up"}}
      submitName="Login"
      initialValues={{username: "", password: ""}}
      fields={[
        {
          id: "idUsername",
          name: "username",
          required: true,
          labelName: "Username",
          labelSuffix: ":",
          type: "text",
          placeholder: "username",
          helpText: ""
        },
        {
          id: "idPassword",
          name: "password",
          required: true,
          labelName: "Password",
          labelSuffix: ":",
          type: "password",
          placeholder: "Password",
          helpText: ""
        }
      ]}
    />
    </>
  )
}

export default Login;
