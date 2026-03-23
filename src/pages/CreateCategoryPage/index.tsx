import s from "./CreateCategoryPage.module.css";
import axios, { AxiosError } from "axios";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";

const CreateCategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(80, "Too Long!")
    .required("Required"),
  image: Yup.string().url("Invalid URL").required("Required"),
});

interface CategoryValues {
  name: string;
  image: string;
}

const CreateCategoryPage = () => {
  const navigate = useNavigate();
  const [newCategory, setNewCategory] = useState<any>(null);
  const initialValues: CategoryValues = {
    name: "",
    image: "",
  };
  return (
    <div>
      <h1>Create category</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={CreateCategorySchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { data, status } = await axios.post(
              "https://api.escuelajs.co/api/v1/categories/",
              values,
            );

            console.log(data);
            if (status === 201) {
              navigate("/categories");
            }
            // сохраняем новую категорию
            setNewCategory(data);
            // actions.resetForm();
          } catch (error) {
            if (error instanceof AxiosError) {
              console.log(error.response?.data.message[0] || "Server error");
              console.log(error.response?.data);
              console.log(error.response?.status);

              if (error.response?.data?.code === "SQLITE_CONSTRAINT_UNIQUE") {
                alert("This name of category already exsist");
              }
            }

            console.error(error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <Field name="name" placeholder="Category name" />
            {touched.name && errors.name && <div>{errors.name}</div>}

            <Field name="image" placeholder="Image URL" />
            {touched.image && errors.image && <div>{errors.image}</div>}

            <button type="submit">Submit</button>
          </Form>
        )}
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

export default CreateCategoryPage;

/*
 //errors - отдельный объект в кот объеденены все ошибки по ключам (в нашем случае по name, image)
            //touched - чтоб началась валидация после того как пользователь начнет заполнять это поле, 
            // т.к. у нас по умолчанию поле  по initialValues = ", а проверка на поле чтоб длина была более 2
            //.min(2, "Too Short!")
*/
