import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "@mui/material/Button";
const Animation = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    zIndex: -1,
  };

  const getRandomPosition = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const posX = Math.random() * (windowWidth - 50);
    const posY = Math.random() * (windowHeight - 50);
    return { x: posX, y: posY };
  };

  const animateObject = useAnimation();

  useEffect(() => {
    const updateAnimation = async () => {
      while (true) {
        await animateObject.start({
          ...getRandomPosition(),
          transition: {
            duration: 0.1,
            type: "tween",
            ease: "linear",
          },
        });
      }
    };

    updateAnimation();
  }, [animateObject]);

  return (
    <div style={containerStyle}>
      <motion.div animate={animateObject}>
        <Button variant="contained" color="error">
          NO NEVER EWW
        </Button>
      </motion.div>
    </div>
  );
};

export default Animation;
