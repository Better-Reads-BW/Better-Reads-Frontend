import React from "react";
import { Card, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const CardDiv = styled.div`
border-radius: 25% 10%;
margin: 10px;
`;


export default function BookCard(props) {
  
  return (
    
    <Grid.Column padded='horizontally' key={props.id}>
      <CardDiv>
      <Card>
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>by {props.author}</Card.Meta>
          <Card.Description>Description: {props.description}</Card.Description>
        </Card.Content>
      </Card>
      </CardDiv>
    </Grid.Column>
    
  )
}
