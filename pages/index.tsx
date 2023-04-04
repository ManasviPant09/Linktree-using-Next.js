import Image from "next/image";
import { useRouter } from "next/router";
import { data } from "../data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";

const Linkcard = ({item}: {item: {title: string; url:string}}) =>{
  const router = useRouter();
  const handleClick = () => {
    router.push(item.url);
  };
  return(
    <div className="flex justify-center w-full mt-2">
      <button type="button" style={{width: "200px"}} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleClick}>
      {item.title === "Github" && <FontAwesomeIcon icon={faGithub}/>} {item.title === "LinkedIn" && <FontAwesomeIcon icon={faLinkedin}/>} {item.title}
      </button>
    </div>
  );
}

const Socialcard = ({item}: {item: {title: string; url:string}}) =>{
  const router = useRouter();
  const handleClick = () => {
    router.push(item.url);
  };
  return(
    <span className="flex justify-center mr-4 mt-4">
      {item.title === "Medium" && <FontAwesomeIcon icon={faMedium} onClick={handleClick}/>} {item.title === "Instagram" && <FontAwesomeIcon icon={faInstagram} onClick={handleClick}/>}
    </span>
  );
}


export default function Home() {
  return (
    <div className="container mx-auto" style={{backgroundImage: "linear-gradient(to top,#003A6B,#83A3BE,white 80%); min-height: 600px;"}}>
    <div className="flex justify-center w-full mt-8">
      {data.map((property) => (
        <div key={property.name}>
          <div className="w-100 h-100">
          <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.25 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
           duration: 1.0,
           delay: 0.75,
           ease: [0, 0.71, 0.2, 1.01]
          }}>
          <Image src={property.icon} alt="profile" width={100} height={100} style={{ marginLeft: "50px" }} />
          </motion.div>
          </div>
          <h1 className="font-bold mt-4 mb-6 text-xl text-center" style={{color:"#2C5D87"}}>{property.name}</h1>
          {property.links.map((items)=>(
               <Linkcard item = {items} key={items.title}/>
          ))}
          <span className="flex justify-center">
          {property.socials.map((items)=>(
               <Socialcard item = {items} key={items.title}/>
          ))}
          </span>
          </div>
      ))}
    </div>
    </div>
  )
}
