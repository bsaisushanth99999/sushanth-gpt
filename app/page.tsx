import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-40">Sushanth's-GPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />
            <h2> Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain somwthing to me"</p>
            <p className="infoText">"Why software is better than medicine"</p>
            <p className="infoText">"How to build a ChatGPT clone?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />
            <h2> Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Write an essay on Health care sciences"</p>
            <p className="infoText">
              "Give me the top 10 list of pokemons in Gen-1"
            </p>
            <p className="infoText">
              "Explain why buying a home is better than renting it"
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2> Limitations </h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              "Step by step process to lead a healthy life"
            </p>
            <p className="infoText">"Run a marathon for me"</p>
            <p className="infoText">
              "What happens if I fall into a blackhole with 0 density?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
