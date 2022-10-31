import React, { Component } from "react";
import Wave from "../assets/wave.svg";
import HeroImage from "../assets/person.png";
import People from "../assets/peopleicon.png";
import Heartfill from "../assets/heartfill.svg";

export class Hero extends Component {
  render() {
    return (
      <div>
        <div className="relative h-[490px] w-[367px] overflow-hidden rounded-[2.5rem] bg-[#609EAF] md:h-[23.313rem] md:w-[42.875rem]">
          <img src={Wave} alt="wave" className="absolute top-0 right-0" />
          <img
            src={HeroImage}
            alt="HeroImage"
            className=" absolute right-0 hidden md:flex"
          />
          <div className="flex h-[100%] w-[21.69rem] flex-col justify-between py-10 px-10">
            <p className="h-1/3">Currated playlist</p>
            <div className="flex h-2/3 flex-col justify-evenly self-end md:justify-between ">
              <div>
                <h1 className="text-[2.18rem] font-bold">R & B Hits</h1>
                <p className="text-sm font-normal">
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
                </p>
              </div>
              <div className="flex w-[10rem] justify-between">
                <img src={People} />
                <img src={Heartfill} />
                <p>33k Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
