import { useContext } from "react";
import Cta from "../components/common/Cta";
import Description from "../components/common/Description";
import { ResumeContext } from "../components/context/ResumeContext";
import Hero from "../components/layout/Hero";


const Home = () => {  
  const description = "Build your professional resume effortlessly with ResumeAI."
  return (
    <>
      <Hero />
      <Description />
      <Cta title="Ready To Land Your Dream Job?" description={description} />
    </>
  );
};
export default Home;
