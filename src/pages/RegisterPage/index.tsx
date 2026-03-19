import axios from "axios";
import { Formik, Form, Field } from "formik";

interface RegisterValues {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

async function fetchRegister(values: RegisterValues){
// const res = await axios.post("https://api.escuelajs.co/api/v1/users", values)
const {data, status} = await axios.post("https://api.escuelajs.co/api/v1/users", values);
console.log(data,status);
}

export const RegisterPage = () => {
  const initialValues: RegisterValues = {
    name: "",
    email: "",
    password: "",
    avatar: "",
  };
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          // alert(JSON.stringify(values, null, 2));
          fetchRegister(values);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="Password" />

          <label htmlFor="avatar">Avatar</label>
          <Field id="avatar" name="avatar" placeholder="Avatar" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
