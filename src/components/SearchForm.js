import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import BookList from './BookList';
import * as Yup from "yup";
import styled from 'styled-components';

const SearchDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;


const SearchForm = ({ errors, touched, values, isSubmitting, status }) => {
  const [info, setInfo] = useState([]);
  console.log("this is touched", touched);
  useEffect(() => {
    if (status) {
      setInfo([...info, status]);
    }
  }, [info, status]);

  return (
    <SearchDiv>
      <h1>Search by Author</h1>
      
      <Form>
      
        
        <Field
          type="author"
          name="author"
          placeholder="Author Name"
          
        />
        {touched.bookdesc && errors.booksdesc &&  <p>{errors.bookdesc}</p>}


      </Form>

      <button type="submit" disabled = {isSubmitting}>Submit!</button>

      <BookList />

      
    </SearchDiv>
  );
};


const FormikSearchForm = withFormik({

  mapPropsToValues({  author }) {
    return {
      author: author || ""
     
    };
  },

  validationSchema: Yup.object().shape({
    author: Yup.string().required('An author name is required')
  }),

  handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting }) {
    axios
      
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res)
        setStatus(res.data)
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false)
      });
    }
})(SearchForm);
export default FormikSearchForm;
