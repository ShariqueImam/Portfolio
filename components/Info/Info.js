import React from "react";
import { FaTrophy } from "react-icons/fa";
const style = {
  bg: "",
  wrapper: " h-[60vh] w-[90%] sm:w-[85%] md:w-[75%] mx-auto",
  info: "text-stone-300 text-2xl md:text-3xl my-16",
  single: "flex items-center  text-stone-400",
  achieveInfo:'',
};
const Info = () => {
  return (
    <div className={style.bg}>
      <div className={style.wrapper}>
        <p className={style.info} style={{fontFamily:"Poppins, sans-serif"}}>
          Prolific, full stack web developer with a passion for metrics and
          beating former "best-yets." Prototyped 45 new products last year for
          my clients. Decreased rework by 22% and costs by 15%. Consistently
          receive high user experience scores for all web development projects,
          including a 55% increase in page speed and performance.
        </p>
        {/* adding the certificate */}
        <div className={style.achieve}>
          <div className={style.single}>
            <FaTrophy className="text-yellow-400 text-3xl mx-6 my-2" />
            <p className={style.achieveInfo}>Complete ReactJS Bootcamp 2021 (Courseera) </p>
          </div>
          <div className={style.single}>
            <FaTrophy className="text-yellow-400 text-3xl mx-6 my-2" />
            <p className={style.achieveInfo}>Full Stack Webdeveloper Bootcamp 2020 (Udemy) </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
