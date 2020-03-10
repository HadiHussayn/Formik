import React from "react";
import { Formik, Field, Form, useField } from "formik";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  LastName: yup
    .string()
    .required()
    .max(10),
  Email: yup.string().email(),
  Age: yup
    .number()
    .positive()
    .integer()
});

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={errorText}
    />
  );
};

const contectForm = () => {
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{ firstName: "", LastName: "", Email: "" }}
        validationSchema={validationSchema}
        onSubmit={data => {
          console.log(data);
          data.resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <h3>Data Form</h3>
            <label htmlFor="FirstName">First Name</label>
            <div>
              <MyTextField
                name="firstName"
                placeholder="First name"
                type="input"
                as={TextField}
              />
            </div>

            <label htmlFor="email">Last Name</label>
            <div>
              <MyTextField
                name="LastName"
                placeholder="Last name"
                type="input"
                as={TextField}
              />
            </div>
            <label htmlFor="email">Email</label>
            <div>
              <MyTextField
                name="Email"
                placeholder="Email"
                type="input"
                as={TextField}
              />
            </div>
            <label htmlFor="email">Age</label>
            <div>
              <MyTextField
                name="Age"
                placeholder="Age"
                type="input"
                as={TextField}
              />
            </div>

            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default contectForm;
