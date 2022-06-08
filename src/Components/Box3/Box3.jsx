import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box3() {
  // variant for parent
  const boxVariant = {
    hidden: {
      // it will be pushed to the left and out of view
      x: "-100vw",
    },
    visible: {
      // this will make the item go back to it initial state
      x: 0,
      transition: {
        // u can add delay
        delay: 0.5, // seconds
        when: "beforeChildren", // when helps the parent animate first before the children start animation
      },
    },
  };

  //   for list(children)
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.3, // let each child animate independently 0.3sec before any child follows sit so on ans so forth
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        //   use variant here
        variants={boxVariant}
        animate="visible" // use the visisble key in the boxVariant
        initial="hidden" // use  the hidden key in the boxVariant
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              className="boxItem"
              variants={listVariant}
              //   animate="visible" // u don't really need to put the hidden and visible any for children since the parent has same name
              //   initial="hidden" // it will automatic animated that way
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
