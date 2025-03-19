import React from "react";
import { Spotlight } from "./ui/spotligh-new";
import { Typewriter } from "./Typewriter";
import { TextGenerateEffect } from "./ui/text-generate-effect";
function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" className="text-center"/> */}
          <Typewriter />
          <p className="text-center md:tracking-wider mb-4 text-[0.8em] md:text-[0.9em] lg:text-[1em]">
            Hi! I&apos;m Niaz, an AI Engineer creating intelligent solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
