import React from "react";
import { FaTrophy } from "react-icons/fa";
const style = {
  bg: "",
  wrapper: " h-[50vh] w-[90%] sm:w-[85%] md:w-[75%] mx-auto",
  info: "text-stone-300 text-2xl md:text-3xl my-12",
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
            <a target="__blank" href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-e560c14c-db3e-4df6-96dc-976a800978d9.pdf">
            <p className={style.achieveInfo}>Complete ReactJS Bootcamp 2021 (Courseera) </p></a>
          </div>
          <div className={style.single}>
            <FaTrophy className="text-yellow-400 text-3xl mx-6 my-2" />
            <a target="__blank" href="https://www.udemy.com/certificate/UC-b587d542-b0fd-480d-bc00-4081a41291d6/">
            <p className={style.achieveInfo}>Full Stack Webdeveloper Bootcamp 2020 (Udemy) </p></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
