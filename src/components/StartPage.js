import React from "react";
import { Image } from 'semantic-ui-react';
import books from '../img/books.jpg';
import styled from 'styled-components';

const BRH1 = styled.h1`
text-align: center;
margin: 20px;
padding: 20px;
`;






export default function StartPage() {
  return (
    <section className="start-page">
      
        <BRH1>Welcome to Better Reads!</BRH1>
        <Image src={books} size='large' circular centered />
      
    </section>
  );
}

