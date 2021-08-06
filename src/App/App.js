import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../Route";
import * as S from "./components/styled";
import { SideBar } from "../modules/sideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <S.Formata>
          <SideBar />
          <Routes />
        </S.Formata>
      </BrowserRouter>
    </>
  );
}

export default App;
