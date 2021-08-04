import styled from "styled-components";
import React from "react";
import Button from '@material-ui/core/Button'

export function CardSome (){
    return(
        <>
            
        <CardMain>
            <CardButton>
            <div>
            <Button variant="contained" color="primary">Adcionar</Button>
            </div>
            <div>
            <Button variant="contained" color="secondary">Remover</Button>
            </div>
            </CardButton>
        </CardMain>
            
        </>
        );
}


const CardButton = styled.div`
height: 100%;
position: relative;
width: 100%;
display: flex;
justify-content: space-between;
align-content: flex-end;
flex-wrap: wrap

`

const CardMain = styled.div`
padding: 60px ;
width: 320px;
height: 220px;
background-color: #dfdfdf;
margin: 0 auto;
border: 2px solid black;
border-radius: 5px;
font-size: 12px;

`