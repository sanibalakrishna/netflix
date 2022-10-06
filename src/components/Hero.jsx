import React from "react";
import logo from "./../assets/images/outer.png";
import banks from "./../assets/images/banks.png";
import Nlogo from "./../assets/images/Nlogo.png";
import series from "./../assets/images/series.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero(props) {
  return (
    <div className="pt-5 pl-10">
      <div className="flex flex-row">
        <img src={Nlogo} className="h-9" />
        <img src={series} className="h-7 ml-2" />
      </div>
      <div>
        <img src={logo} />
        <img src={banks} />
      </div>
      <div className="mt-4">
        <h1 className="text-white text-2xl font-medium">
          Season 2 coming on 30 july
        </h1>
        <h1 className="w-2/5 overflow-clip text-white text-lg">
          On an island of haves and have-nots, teen John B enlists his three
          best friends to hunt for a legendary treasure linked to his father's
          disappearance.
        </h1>
        <div className="pt-3">
          <button className="bg-white rounded w-24 h-10 font-medium">
            <i class="fa fa-play"></i> Play
          </button>
          <button className="bg-[#999696] rounded ml-4 w-32 h-10 font-medium text-white">
            <i class="fa fa-info-circle"></i> more info
          </button>
          <div className="grid ">
            <div className="justify-self-end flex">
              <i
                class="fa fa-refresh text-white h-6 w-6"
                aria-hidden="true"
              ></i>
              <h1 className="pl-2 h-6 w-20  bg-[#7d7872]">18+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
