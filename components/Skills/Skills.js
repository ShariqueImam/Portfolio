import React from "react";
import SingleSkill from "./SingleSkill";
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
const Skills = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading} style={{fontFamily:'Poppins, sans-serif'}}>Skills that I have</h2>
      {/* skill container */}
      <div className={style.container}>
        <SingleSkill Icon={SiHtml5} />
        <SingleSkill Icon={SiCss3} />
        <SingleSkill Icon={SiJavascript} />
        <SingleSkill Icon={GrReactjs} />
        <SingleSkill Icon={TbBrandNextjs} />
        <SingleSkill Icon={SiMongodb} />
        <SingleSkill Icon={SiExpress} />
        <SingleSkill Icon={SiTailwindcss} />
        <SingleSkill Icon={SiSass} />
        <SingleSkill Icon={SiJest} />
      </div>
    </div>
  );
};

export default Skills;
