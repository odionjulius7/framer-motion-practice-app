import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Box5() {
  // the good thing about this is as you click on one control.start() to animate and you click another
  // one instantly the old one stop for the new to start
  const control = useAnimation(); //hook

  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 650,
            transition: {
              duration: 3,
            },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 3,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
}
