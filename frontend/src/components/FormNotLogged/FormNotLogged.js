import React from 'react';
import {Formik, ErrorMessage, Field, Form} from "formik";
import {Col, FormGroup, FormText, Label, Row} from "reactstrap";
import {Submit} from "formstrap";

function FormNotLogged({initialValues, fields, title, buttonCancel, submitName, extraData, onSubmit}) {

  return (
    <Row xs="1" className="justify-content-center py-4">
      <Col xs="4">
        <div className="form-header text-center mb-5">
          <h2 className="fs-2 fw-bold border-bottom border-3 border-info d-inline pb-1">{title}</h2>
        </div>
        <div className="border px-4">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            { formik => (
              <Form className="p-5">
                {fields.map(field => (
                    <FormGroup className="mb-4" key={field.id}>
                      <Label className={"form-label" + (field.required && " required")} htmlFor={field.id}>
                        {field.labelName}{field.labelSuffix}
                      </Label>
                      <Field
                        type={field.type}
                        name={field.name}
                        id={field.id}
                        required={field.required}
                        placeholder={field.placeholder}
                        {...formik.getFieldProps(field.name)}
                      />
                      <FormText className="text-muted">{field.helpText}</FormText>
                      <ErrorMessage name={field.name} component="span"/>
                    </FormGroup>
                  )
                )}
                {extraData}
                <div className="d-flex">
                  <Submit withSpinner outline disabled={formik.isSubmitting}>{submitName}</Submit>
                  <a className="btn btn-outline-secondary ms-auto" href={buttonCancel.url}>{buttonCancel.name}</a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
    </Row>
  )
}

export default FormNotLogged;
