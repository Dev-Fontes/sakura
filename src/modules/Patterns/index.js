import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Cartao } from "../workSpace";
import * as S from "./components/styled";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: "auto",
    display: "flex",
    backgroundColor: "#ff8a9f",
    flexDirection: "column",
  },
  title: {
    fontSize: 14,
    fontWeight: "bolder",
    marginBottom: 24,
  },
  pos: {
    marginBottom: 12,
  },
  alinha: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function NewsCard() {
  const classes = useStyles();

  return (
    <S.Container>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            10 pétalas, requer um grande momento não acha?
          </Typography>
          <Typography variant="h5" component="h2">
            Ganhou um chá com limão do Sr.Setra!
          </Typography>
        </CardContent>
        <CardActions className={classes.alinha}>
          <Button
            size="small"
            variant="contained"
            onClick={() => <Link to={Cartao()}></Link>}
          >
            Voltar
          </Button>
        </CardActions>
      </Card>
    </S.Container>
  );
}
