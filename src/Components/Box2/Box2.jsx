import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box2() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        drag
        dragConstraints={{
          // the range u can drag it to both left and right
          right: 20,
          left: -20,
          bottom: 20,
          top: 20,
        }}
        // hover, focus, active etc. styling
        whileHover={{
          scale: 1.1,
          //   background: "yellow",
          //   rotate: 180,
          //   skew: -20,
        }}
        whileTap={{
          scale: 0.8,
        }}
      ></motion.div>
    </div>
  );
}
