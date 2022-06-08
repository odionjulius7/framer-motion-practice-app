import React, {useState} from 'react'
import {motion} from 'framer-motion'

export default function Box1() {
const [isAnimating, setIsAnimating] = useState(false)

  return (
      <div className="box-container">
          <motion.div 
          className='box' 
        //   react way of using framer-motion
          animate={{
              x: isAnimating ? 1200 : 0, // move in the x-axis
              opacity: isAnimating ? 1: 0.5,
              rotate: isAnimating ? 360 : 0
            //   backgroundColor: "yellowgreen"
          }}
          initial={{
            //   is the initial stage/style we want the animated tag/item to be before the animation takes place
            opacity: 0.5
          }}
          transition={{
            type: "spring", // JUST TO MAKE THE ANIMATed item to heve bounce effect before settling down
            stiffness: 80, // WORKS WITH spring AND NOT TWEEN, defines how stiff it should be and duration it takes
            // damping: 1
        }}
        //   transition={{
        //       type: "tween", // JUST TO MAKE THE ANIMATION STARIGHT FORWARd
        //       duration: 2 // WORKS WITH TWEEN AND NOT SPRNG
        //   }}
        onClick={() => setIsAnimating(!isAnimating)}
          >

          </motion.div>
      </div>
  )
}
