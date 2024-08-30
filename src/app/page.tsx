import Image from "next/image";

import Hero from "./components/hero";
import {Navbar} from "./components/navbar";
import {Footer}from "./components/footer";
import {FixedPlugin} from "./components/fixed-plugin"; 

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Footer />
    <FixedPlugin />
    </>
  );
}
