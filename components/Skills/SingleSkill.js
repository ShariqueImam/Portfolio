import React, { useState } from "react";

const SingleSkill = ({ Icon }) => {
  const [isEnter, setIsEnter] = useState(false);
  const style = {
    wrapper: `${
      isEnter ? "t1" : ""
    } border-2 border-stone-400 px-8 py-8 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-12 lg:py-12 m-8 mx-auto md:m-8 text-stone-400 hover:text-stone-900 `,
    icon: ` text-4xl md:text-6xl transform transition duration-[800ms] ${
      isEnter ? "scale-[1.15]" : ""
    }`,
  };
  const handleEnter = () => {
    setIsEnter(true);
  };
  const handleLeave = () => {
    setIsEnter(false);
  };
  return (
    <div
      className={style.wrapper}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Icon className={style.icon} />
    </div>
  );
};

export default SingleSkill;
