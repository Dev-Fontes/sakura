import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as S from "./components/styled";

export const Home = () => {
  return (
    <>
      <S.Boxer>
        <Button variant="contained" color="default">
          <Link to="/Cartao">Iniciar</Link>
        </Button>
      </S.Boxer>
    </>
  );
};
