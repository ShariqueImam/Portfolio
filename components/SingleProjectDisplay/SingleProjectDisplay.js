import React from "react";
const style = {
  wrapper: "px-6 py-8 border-[1px] border-stone-700 flex flex-col w-[95%] md:w-[30%] my-8",
  img: "content-image h-[27vh] w-[25vw]",
  heading: "text-stone-400 font-bold my-4 md:my-6",
  description: "text-stone-300 mb-4 md:mb-6",
  btnContainer: "flex flex-col md:flex-row items-center tracking-wide my-4 justify-around w-[80%] mx-auto",
  site: "my-2 w-[100%] md:w-auto mx-3 text-center border-2 border-stone-500 bg-stone-500 hover:bg-stone-600 hover:border-stone-600 transition duration-[400ms] text-stone-200 px-12 py-1 md:px-12 md:py-2",
  code: "my-2 w-[100%] md:w-auto mx-3 text-center border-2 border-stone-400 text-stone-200  transition duration-[400ms] hover:bg-stone-100 hover:border-stone-100 hover:text-stone-800 px-12 py-1 md:px-12 md:py-2",
  hoverButton:'hover:bg-[#68d8d6] transition duration-[400ms] border-2 border-white  hover:border-black text-sm flex items-center justify-center h-20 w-20 bg-gray-100 text-gray-900 rounded-full transform rotate-[-30deg]',
};
const SingleProjectDisplay = ({ heading, img, description, code, visit }) => {

  return (
    <div className={style.wrapper}>
      <div className="content">
        <a href={`${visit}`} target="_blank">
          <div class="content-overlay"></div>
          <img
            alt={heading}
            src={`${img}`}
            className={style.img}
          />
          <div class="content-details fadeIn-bottom fadeIn-right">
            <h3 className={style.hoverButton}>WATCH</h3>
          </div>
        </a>
      </div>

      <h2 className={style.heading}>{heading}</h2>
      <p className={style.description}>{description}</p>
      <div className={style.btnContainer}>
        <a href={`${visit}`} target="__blank" className={style.site}>
          Site
        </a>
        <a href={`${code}`} target="__blank" className={style.code}>
          Code
        </a>
      </div>
    </div>
  );
};

export default SingleProjectDisplay;
