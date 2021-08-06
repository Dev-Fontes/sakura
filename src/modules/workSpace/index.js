import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import imgCereja from "../../assets/images/cerejeira.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
  },

  alinha: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

export function Cartao() {
  const [petalas, setPetalas] = useState(0);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="A Cerejeira Mágica"
          height="140"
          width="340"
          image={imgCereja}
          title="A Cerejeira Mágica"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cerejeira
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Conte as pétalas que passam ao seu redor e veja se é seu dia de
            sorte
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.alinha}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => setPetalas(EhZero(petalas + 1))}
        >
          Adcionar
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => setPetalas(EhZero(petalas - 1))}
        >
          Remover
        </Button>
        <Typography variant="h2">{petalas}</Typography>
      </CardActions>
    </Card>
  );
}

function EhZero(petalas) {
  if (petalas >= 0) {
    ChamaCard(petalas);
    return petalas;
  } else {
    alert("Não é possível executar esta ação");
    return (petalas = 0);
  }
}

function ChamaCard(value) {
  if (value === 10) {
    return <Link to="/resultado" />;
  }
}
