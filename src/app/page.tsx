
import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Card from "./components/card/card";
import Footer from "./components/footer/footer";
import Team from "./components/team/team";
import Courses from "./components/courses/courses";
import Achivement from "./components/achivements/achivements";

const Page = () => {
  return (
    <div>
    
    <Header/>
    <Hero/>
    <Courses/>
    <Achivement/>
    <Card/>
    <Team/>
    <Footer/>
    </div>
    
  );
};

export default Page;
