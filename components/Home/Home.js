import React from "react";
import Image from "next/image";
const style = {
  social: "absolute",
  wrapper: "px-24 q w-[100vw] h-[100vh] bg-gradient-to-r from-yellow-300 to-red-300 flex flex-col justify-center",
  img: "rounded-full border-2 border-black h-[11vh] w-[6vw] my-8",
  text: "text-4xl md:text-6xl lg:text-8xl w-[95%] md:w-[70%] font-bold",
  info: "flex my-12",
  line: "font-semibold max-w-fit ",
  line1: " border-r-2 border-stone-800 max-w-fit mx-8",
  link: "decoration-none border-move-animation max-w-fit",
};
const Home = () => {
  return (
    <div className={style.wrapper}>
      {/* adding the all the social links */}
      <div className={style.social}></div>
      <img src="/me.webp" className={style.img} />
      <div className={style.text} style={{ fontFamily: "Poppins, sans-serif" }}>
        Hi, I am Sharique, full Stack Next JS developer
      </div>
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

export default Home;
