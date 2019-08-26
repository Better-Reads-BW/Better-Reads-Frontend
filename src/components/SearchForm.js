import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const SearchForm = ({ errors, touched, values, status }) => {
  const [info, setInfo] = useState([]);
  console.log("this is touched", touched);
  useEffect(() => {
    if (status) {
      setInfo([...info, status]);
    }
  }, [status]);

  return (
    <div className="search-box">
      <h1>What kind of book are you looking for?</h1>
      <Form>
        
        <Field
          component="textarea"
          type="text"
          name="bookdesc"
          placeholder="Book Description"
        />
        {touched.bookdesc && errors.booksdesc && (
          <p className="error">{errors.bookdesc}</p>
        )}

        <button type="submit">Submit!</button>
      </Form>

      
    </div>
  );
};


const FormikSearchForm = withFormik({

  mapPropsToValues({  bookdesc }) {
    return {
     
      booksdesc: bookdesc || ""
    };
  },

  validationSchema: Yup.object().shape({
    notes: Yup.string().required('A description is required.')
  }),

  handleSubmit(values, { setStatus }) {
    axios
      
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(SearchForm);
export default FormikSearchForm;
