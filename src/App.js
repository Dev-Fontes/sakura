import React from 'react';
import styled from "styled-components";
import { BrowserRouter} from 'react-router-dom';
import {Routes} from './Route';


function App() {
  return (
    <BrowserRouter>
    <Formata>
      <Routes/>
    </Formata>
    </BrowserRouter>
  
  );
}

export default App;

const Formata = styled.div`
height: 100vh;
background-color: #ecd9d9;
display: flex;


`

