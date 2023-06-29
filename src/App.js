import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "@mui/material/Button";
import Animation from "./Animation";
import AnimatedBackground from "./AnimatedBackground";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Prone from "./Assets/PrOne.jpeg";
import Prtwo from "./Assets/PrTwo.jpeg";
import BasicModal from "./Modal";
import Preight from "./Assets/PriEight.PNG";
const App = () => {
  const [clicked, setClicked] = useState(false);
  const [imag, setImag] = useState(Prone);
  const [showFinal, setShowFinal] = useState(false);
  const [text, setText] = useState(
    "HELLO SONY, WOULD YOU LIKE TO GO ON A DATE WITH THIS GUY?"
  );

  function forClicked() {
    setClicked(true);
    setText(
      "SONYYYYYYYY WHY YOU TRY TO REJECT ME! WITHOUT GIBING ME A TRYYYYYY, YOU CAN'T REJECT ME THO!!"
    );
    setImag(Prtwo);
  }
  function lastClick() {
    setShowFinal(true);
  }

  function paneer() {
    setText(
      "Paneer? Wo bhi bhejne layak recover ho jao! XD Miss you. Chalo itna hi"
    );
    setImag(Preight);
  }
  return (
    <div
      style={{
        minHeight: "40vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "pink" }}>SONY.JSX</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" image={imag} height="140" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {text}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BasicModal last={lastClick} />
        {clicked === false && (
          <Button variant="contained" color="error" onClick={forClicked}>
            NO NEVER EWW
          </Button>
        )}

        {clicked && <Animation />}

        <br></br>
        {showFinal && (
          <Button variant="contained" onClick={paneer}>
            {" "}
            By The Wayyyyyyyy!!!!!
          </Button>
        )}
      </div>
      <AnimatedBackground />
    </div>
  );
};

export default App;
