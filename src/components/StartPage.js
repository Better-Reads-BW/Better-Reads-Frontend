import React from "react";
import FormikSearchForm from "./SearchForm";

export default function StartPage() {
  return (
    <section className="start-page">
      <header>
        <h1>Welcome to Better Reads!</h1>
        <FormikSearchForm />
        />
      </header>
    </section>
  );
}