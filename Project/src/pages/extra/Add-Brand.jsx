
import { SiNike } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { SiNewbalance } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { SiReebok } from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";
import { SiUnderarmour } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { Link } from "react-router-dom";
const Brand = () => {
  return (
   <div className="p-2 shadow rounded-lg ">
    <Link to={'/brandsPage'}>
    <div className="p-3 font-bold md:text-3xl md:block hidden">Explore our Brands</div>
     <div data-aos="flip-up" className="md:text-9xl text-3xl pt-10 pb-10 flex justify-around md:p-5 items-center overflow-auto  "><SiNike/><SiPuma/><SiNewbalance/><CgAdidas/><SiReebok/><GiConverseShoe/><SiUnderarmour/>
    <SiJordan />
    
    </div>
    </Link>
   </div>
  )
}

export default Brand