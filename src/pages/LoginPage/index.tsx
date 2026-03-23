import axios from "axios";
import { Formik, Form, Field } from "formik";

interface LoginValues {
  email: string;
  password: string;
}

async function fetchLogin(values: LoginValues){
    const LOGIN_URL = "https://api.escuelajs.co/api/v1/auth/login"
// const res = await axios.post("https://api.escuelajs.co/api/v1/users", values)
const {data, status} = await axios.post(LOGIN_URL, values);
console.log(data,status);
const {access_token} = data;
localStorage.setItem("access_tolen", access_token)
}

export const LoginPage = () => {
  const initialValues: LoginValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          // alert(JSON.stringify(values, null, 2));
          fetchLogin(values);
          actions.setSubmitting(false);
        }}
      >
        <Form>

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="Password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
