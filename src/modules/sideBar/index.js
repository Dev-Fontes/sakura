import { MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {Favorite, AcUnit, AccountTree, Archive, Assistant, LocalActivity, ListAlt} from "@material-ui/icons/";
import * as S from "./components/styled";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <S.ProSidebarCustom>
      <S.MenuCustom iconShape="">
        <MenuItem icon={<LocalActivity />}>
          <Link to="/" /> Início
        </MenuItem>

        <SubMenu title="Notícias" icon={<ListAlt />}>
          <MenuItem>
            <Link to="/Cartao" />
            Cerejeira
          </MenuItem>

          <MenuItem>
            <Link to="/resultado" />
            Teste
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<AcUnit />}>
          <Link to="/" /> Atividades
        </MenuItem>
        <MenuItem icon={<AccountTree />}>
          <Link to="/" /> Conexão
        </MenuItem>
        <MenuItem icon={<Assistant />}>
          <Link to="/" /> Aulas
        </MenuItem>
        <MenuItem icon={<Favorite />}>
          <Link to="/" /> Favoritos
        </MenuItem>
        <MenuItem icon={<Archive />}>
          <Link to="/" /> Arquivos
        </MenuItem>
      </S.MenuCustom>
    </S.ProSidebarCustom>
  );
};
