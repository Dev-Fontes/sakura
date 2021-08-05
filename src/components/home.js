import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Home = () =>{
return (
    <>
    <Boxer>
       <Button variant="contained" color="default"><Link to="/Cartao" >Iniciar</Link></Button>
    </Boxer>
    </>
    )
}

const Boxer = styled.div`
margin: auto;

`