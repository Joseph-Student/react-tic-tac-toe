import React from 'react';
import {Formik, Form} from 'formik';
import {Input, Submit} from "formstrap";
import {Col, FormGroup, Label, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

function SignUp(props) {
  const onSubmit = async (values, {setSubmitting}) => {
    console.log(values);
    const response = await fetch("/api/users/create/", {
      method: 'POST',
      data: values
    });
    setSubmitting(false);
  }

  return (
    <Row xs="1" className="justify-content-center py-4">
      <Col xs="4">
        <div className="form-header text-center mb-5">
          <h2 className="fs-2 fw-bold border-bottom border-3 border-info d-inline pb-1">Sign Up</h2>
        </div>
        <div className="border px-4">
          <Formik onSubmit={onSubmit}>
            <Form className="p-5">
              <FormGroup className="mb-4">
                <Label className="form-label" for="idUsername">Username:</Label>
                <Input type="text" name="username" id="idUsername" placeholder="UserTic" autofocus />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label className="form-label" for="idFirstName">First name:</Label>
                <Input type="text" name="first_name" id="idFirstName" placeholder="Jhon" />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label className="form-label" for="idLastName">Last name:</Label>
                <Input type="text" name="last_name" id="idLastName" placeholder="Evans" />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label className="form-label" for="idEmail">Email:</Label>
                <Input type="email" name="email" id="idEmail" placeholder="user@domain.com" />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label className="form-label" for="idPassword1">Password:</Label>
                <Input type="password" name="password1" id="idPassword1" placeholder="Password" />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label className="form-label" for="idPassword2">Password confirmation:</Label>
                <Input type="password" name="password" id="idPassword2" placeholder="Password confirmation" />
              </FormGroup>
              <div className="d-flex">
                <Submit withSpinner outline>Sign Up</Submit>
                <a className="btn btn-outline-secondary ms-auto" href="/login">Login</a>
              </div>
            </Form>
          </Formik>
        </div>
      </Col>
    </Row>
  )
}

export default SignUp;