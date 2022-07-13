import React, { useRef, useEffect } from "react";
import SingleSkill from "./SingleSkill";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiSass,
  SiJest,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";

const style = {
  wrapper: "w-[90%] sm:w-[85%] md:w-[90%] lg:w-[80%] mx-auto my-8",
  heading: "text-stone-300 text-4xl my-6",
  container: "flex flex-wrap items-center justify-center",
};
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0,
      staggerChildren: 0.5,
      delayChildren: 0.3,

    },
  },
};

const item = {
  hidden: { opacity: 0, y: 500 },
  show: { opacity: 1, y: 0 },
};
let ani = 1;
const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation1 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("show");
      setTimeout(() => {
        animation1.start("show");
      }, 1000);
    }
  }, [inView]);
  return (
    <div className={style.wrapper}>
      <h2
        className={style.heading}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Skills that I have
      </h2>
      {/* skill container */}
      <motion.div
        className={style.container}
        variants={container}
        animate={animation}
        initial="hidden"
        ref={ref}
      >
        <motion.div
          variants={item}
          ref={ref}
          initial="hidden"
          animate={animation1}
        >
          <SingleSkill Icon={SiHtml5} />
        </motion.div>
        <motion.div
          variants={item}
          ref={ref}
          initial="hidden"
          animate={animation1}
        >
          <SingleSkill Icon={SiCss3} />
        </motion.div>
        <motion.div
          variants={item}
          ref={ref}
          initial="hidden"
          animate={animation1}
        >
          <SingleSkill Icon={SiJavascript} />
        </motion.div>
        <motion.div
          variants={item}
          ref={ref}
          initial="hidden"
          animate={animation1}
        >
          <SingleSkill Icon={GrReactjs} />
        </motion.div>
        <motion.div
          variants={item}
          ref={ref}
          initial="hidden"
          animate={animation1}
        >
          <SingleSkill Icon={TbBrandNextjs} />
        </motion.div>
        {/* <motion.div animate={animation1}>
          <SingleSkill Icon={SiMongodb} />
        </motion.div>
        <motion.div animate={animation1}>
          <SingleSkill Icon={SiExpress} />
        </motion.div>
        <motion.div animate={animation1}>
          <SingleSkill Icon={SiTailwindcss} />
        </motion.div>
        <motion.div animate={animation1}>
          <SingleSkill Icon={SiSass} />
        </motion.div>
        <motion.div animate={animation1}>
          <SingleSkill Icon={SiJest} />
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Skills;
