import React from "react";
import SingleProjectDisplay from '../SingleProjectDisplay/SingleProjectDisplay'
const style = {
  wrapper: "bg-[rgba(0,0,0,0.75)] w-[90%] sm:w-[85%] md:w-[95%] lg:w-[80%] mx-auto",
  heading: "text-stone-300 text-2xl md:text-4xl ",
  container:'flex items-center justify-around flex-wrap',
};
const Projects = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading} style={{fontFamily:"Poppins, sans-serif"}}>Take a look at my projects</h2>
      {/* projects container */}
      <div className={style.container}>
        <SingleProjectDisplay heading={'ElRoyle Restaurant'} img={'/p1.png'} description={'The restuarant was designed with the history and soft industrial dining room.'} code={'https://github.com/ShariqueImam/elroyle'} visit={'https://shariqel.vercel.app'}/>
        <SingleProjectDisplay heading={'Okeere Store'} img={'/p1.png'} description={'Okeere is an e-commerce store to buy all sort of electric and daily goods'} code={'https://github.com/ShariqueImam/okeere  '} visit={'https://okeere.vercel.app'}/>
        <SingleProjectDisplay heading={'Power Ranger Games'} img={'/p1.png'} description={'An flash less site to play power ranger retro games without any plugin and lag'} code={'https://github.com/ShariqueImam/elroyle'} visit={'https://shariqel.vercel.app'}/>
      </div>
    </div>
  );
};

export default Projects;
