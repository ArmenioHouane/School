import Image from "next/image";

import Hero from "./components/hero";
import {Navbar} from "./components/navbar";
import {Footer}from "./components/footer";
import IconSection from "./components/IconSection";
import {CourseCard}  from "./components/CourseCard";
import Card from "./components/Card";
import Pricing from "./components/pricing";
import {FixedPlugin} from "./components/fixed-plugin"; 

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Card />
    <IconSection/>
    <CourseCard />
    <Pricing />
    <Footer />
    <FixedPlugin />
    </>
  );
}
