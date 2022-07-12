import React from "react";
import Image from "next/image";
const style = {
  wrapper: " w-[90%] md:w-[85%] mx-auto mt-24 p-16",
  heading: "text-gray-50 text-3xl md:text-5xl lg:text-6xl my-12",
  description: "text-stone-400 w-[90%] md:w-[90%] mx-auto",
  info: "flex my-12 text-stone-200 w-[90%] md:w-[90%] mx-auto",
  line: "font-semibold max-w-fit ",
  line1: " border-r-2 border-stone-800 max-w-fit mx-8",
  link: "decoration-none border-move-animation max-w-fit",
};
const Contact = () => {
  return (
    <div className={style.wrapper}>
      {/* adding the img */}
      {/* <Image /> */}
      <h2 className={style.heading}>Get in touch</h2>
      <p className={style.description} style={{fontFamily:"Poppins , sans-serif"}}>
      Prolific, full stack web developer with a passion for metrics and
          beating former "best-yets." Prototyped 45 new products last year for
          my clients. Decreased rework by 22% and costs by 15%. Consistently
          receive high user experience scores for all web development projects,
          including a 55% increase in page speed and performance
      </p>
      {/* info div here */}
      <div className={style.info}>
        <p className={style.line}>
          Visit{" "}
          <a href="https://github.com/ShariqueImam" target="_blank" className={style.link}>
            My Github
          </a>
        </p>
        <p className={style.line1}></p>
        <p className={style.line}>
        Visit{" "}
          <a href="https://dribbble.com/ShariqImam" target="_blank" className={style.link}>
            My Dribbble
          </a>
        </p>
        <p className={style.line1}></p>
        <p className={style.line}>
        {" "}
          <a href=" https://www.fiverr.com/shariqueimam" target="_blank" className={style.link}>
             Fiverr
          </a>
        </p>
        <p className={style.line1}></p>
      </div>
    </div>
  );
};

export default Contact;
