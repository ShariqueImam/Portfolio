import React,{useState} from "react";
import Image from "next/image";
import 'animate.css';

const style = {
  social: "absolute",
  wrapper:
    "px-3 md:px-24 q w-[100vw] h-[100vh] bg-gradient-to-r from-yellow-300 to-red-300 flex flex-col justify-center",
  img: "rounded-full border-2 border-black mx-auto h-[12vh] w-[24vw] md:mx-0 md:h-[12vh] md:w-[10vw] lg:h-[11vh] lg:w-[5.5vw] my-8",
  text: "text-4xl md:text-6xl lg:text-8xl w-[95%] md:w-[85%] lg:w-[63%] font-bold flex flex-wrap",
  info: "flex my-12 flex-wrap jusitfy-center",
  line: "max-w-fit hover:scale-[1.1] transform duration-[400ms] my-5",
  line1: " border-r-2 border-stone-800 max-w-fit mx-8 my-4",
  link: "decoration-none border-move-animation max-w-fit",
  char:`hover:text-teal-300 max-w-fit text-7xl md:text-8xl lg:text-8xl`,
  char1:`hover:text-teal-300 mr-7 text-7xl md:text-8xl lg:text-8xl`,
  char2:`hover:text-teal-300 mr-1 text-7xl md:text-8xl lg:text-8xl`,
  char4:`hover:text-teal-300 mr-0 text-7xl md:text-8xl lg:text-8xl`,
  char5:`hover:text-teal-300 mr-16 text-7xl md:text-8xl lg:text-8xl`,
};
const Home = () => {
  const [letter,setLetter] = useState('')
  const handle = (val) => { 
    setLetter(val)
   }
  return (
    <div className={style.wrapper}>
      {/* adding the all the social links */}
      <div className={style.social}></div>
      <img src="/me.webp" className={style.img} />
    
      <div className={style.text} style={{ fontFamily: "Poppins, sans-serif" }}>
        <span className={`${style.char} ${letter === 'H' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('H')} >H</span>
        <span className={`${style.char1} ${letter === 'i' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('i')}>i,</span>
        <span className={`${style.char1} ${letter === 'I' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('I')}>I</span>
        <span className={`${style.char} ${letter === 'A' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('A')}>A</span>
        <span className={`${style.char1} ${letter === 'm' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('m')}>m</span>
        <div className="flex">

        <span className={`${style.char} ${letter === 'S' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('S')}>S</span>
        <span className={`${style.char} ${letter === 'h' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('h')}>h</span>
        <span className={`${style.char} ${letter === 'a' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('a')}>a</span>
        <span className={`${style.char} ${letter === 'r' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('r')}>r</span>
        <span className={`${style.char} ${letter === 'i1' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('i1')}>i</span>
        <span className={`${style.char} ${letter === 'q' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('q')}>q</span>
        <span className={`${style.char2} ${letter === 'u' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('u')}>u</span>
        <span className={`${style.char2} ${letter === 'e5' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('e5')}>e</span>
</div>
<div className="flex">

        <span className={`${style.char} ${letter === 'F' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('F')}>F</span>
        <span className={`${style.char} ${letter === 'u1' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('u1')}>u</span>
        <span className={`${style.char} ${letter === 'l' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('l')}>l</span>
        <span className={`${style.char4} ${letter === 'l1' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('l1')}>l</span>
</div>
<div className="flex">

        <span className={`${style.char} ${letter === 'S1' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('S1')}>S</span>
        <span className={`${style.char} ${letter === 't' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('t')}>t</span>
        <span className={`${style.char} ${letter === 'a1' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('a1')}>a</span>
        <span className={`${style.char} ${letter === 'c' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('c')}>c</span>
        <span className={`${style.char1} ${letter === 'k' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('k')}>k</span>
</div>
<div className="flex">

        <span className={`${style.char} ${letter === 'N' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('N')}>N</span>
        <span className={`${style.char} ${letter === 'e' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('e')}>e</span>
        <span className={`${style.char} ${letter === 'x' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('x')}>x</span>
        <span className={`${style.char} ${letter === 't1' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('t1')}>t</span>
        <span className={`${style.char} ${letter === 'J' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('J')}>J</span>
        <span className={`${style.char5} ${letter === 'S2' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('S2')}>S</span>
</div>
<div className="flex">

        <span className={`${style.char} ${letter === 'D' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('D')}>D</span>
        <span className={`${style.char} ${letter === 'e1' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('e1')}>e</span>
        <span className={`${style.char} ${letter === 'v' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('v')}>v</span>
        <span className={`${style.char} ${letter === 'e2' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('e2')}>e</span>
        <span className={`${style.char} ${letter === 'l2' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('l2')}>l</span>
        <span className={`${style.char} ${letter === 'o' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('o')}>o</span>
        <span className={`${style.char} ${letter === 'p' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('p')}>p</span>
        <span className={`${style.char} ${letter === 'e3' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('e3')}>e</span>
        <span className={`${style.char} ${letter === 'r1' && 'animate__animated animate__rubberBand'}`} onMouseLeave={()=>setLetter('')} onMouseEnter={()=>handle('r1')}>r</span>
</div>  
      </div>
      <div className={style.info}>
        <p className={style.line}>
          Visit{" "}
          <a
            href="https://github.com/ShariqueImam"
            target="_blank"
            className={style.link}
          >
            My Github
          </a>
        </p>
        <p className={style.line1}></p>
        <p className={style.line}>
          Visit{" "}
          <a
            href="https://dribbble.com/ShariqImam"
            target="_blank"
            className={style.link}
          >
            My Dribbble
          </a>
        </p>
        <p className={style.line1}></p>
        <p className={style.line}>
          {" "}
          <a
            href="https://www.fiverr.com/shariqueimam"
            target="_blank"
            className={style.link}
          >
            Fiverr
          </a>
        </p>
        <p className={style.line1}></p>
        <p className={style.line}>
          {" "}
          <a
            href="https://www.upwork.com/freelancers/~01b050b4961e4c1e70?viewMode=1"
            target="_blank"
            className={style.link}
          >
            Upwork
          </a>
        </p>
        <p className={style.line1}></p>
      </div>
    </div>
  );
};

export default Home;
