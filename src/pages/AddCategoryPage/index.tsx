import s from "./AddCategory.module.css";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

interface CategoryValues {
  name: string;
  image: string;
}

//  async function fetchAddCategory(values:CategoryValues) {
//   const {data,status} = await axios.post("https://api.escuelajs.co/api/v1/categories/", values,);
//   console.log(data, status);

// }

const AddCategoryPage = () => {
  const [newCategory, setNewCategory] = useState<any>(null);
  const initialValues: CategoryValues = {
    name: "",
    image: "",
  };
  return (
    <div>
      <h1>Add category</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          try {
            const { data } = await axios.post(
              "https://api.escuelajs.co/api/v1/categories/",
              values,
            );

            console.log(data);

            // сохраняем новую категорию
            setNewCategory(data);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        <Form className={s.form}>
          <label htmlFor="name">First Name</label>
          <Field id="name" name="name" placeholder="Category name" />
          <label htmlFor="image">Category image</label>
          <Field id="image" name="image" placeholder="Category image" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {newCategory && (
        <div className={s.container}>
          <h3>New category successfully aded</h3>
          <h3>Category: {newCategory.name}</h3>
          <img src={newCategory.image} alt={newCategory.name} />
          <p>ID: {newCategory.id}</p>
        </div>
      )}
    </div>
  );
};

export default AddCategoryPage;
