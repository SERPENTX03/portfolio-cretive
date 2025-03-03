import Image from "next/image";
import React from "react";
import bg from "@/public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-beteen relative">
   <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-85"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel >
          <Wizard/>
        </RenderModel>
      </div>
    </main>
  );
};

export default Home;
