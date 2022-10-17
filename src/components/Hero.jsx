import React, { Component } from "react";
import Heroimg from "../assets/HeroSection.png";
import Wave from "../assets/wave.svg";
import HeroImage from "../assets/person.png";
import People from "../assets/peopleicon.png";
import Heartfill from "../assets/heartfill.svg";

export class Hero extends Component {
  render() {
    return (
      <div>
        <div className="bg-[#609EAF] w-[42.875rem] h-[23.313rem] rounded-[2.5rem] relative overflow-hidden">
          <img src={Wave} alt="wave" className="absolute right-0" />
          <img src={HeroImage} alt="HeroImage" className="absolute right-0" />
          <div className="flex flex-col w-[21.69rem] py-10 px-10 justify-between h-[100%]">
            <p className="h-1/3">Currated playlist</p>
            <div className="h-2/3 flex flex-col justify-between">
              <div>
                <h1>R & B Hits</h1>
                <p>
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
                </p>
              </div>
              <div className="flex justify-between w-[10rem]">
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
