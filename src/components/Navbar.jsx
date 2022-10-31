/* eslint-disable linebreak-style */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
// eslint-disable-next-line linebreak-style
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  VideoHorizontal,
  Radio,
  MusicLibrary2,
  Profile,
  Home,
  LogoutCurve,
} from 'iconsax-react';

import Logo from '../assets/logo.svg';

function Navbar() {
  const [open, SetOpen] = useState(false);
  const handleClick = () => SetOpen(!open);

  const navItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: MusicLibrary2, text: 'My collections', path: '/collections' },
    { icon: Radio, text: 'Radio', path: '/radio' },
    { icon: VideoHorizontal, text: 'Music videos', path: '/videos' },
    { icon: Profile, text: 'Profile', path: '/profile' },
    {
      icon: LogoutCurve,
      text: 'Log out',
      path: '/logout',
      style: 'rotate-180',
    },
  ];
  const topNav = navItems.slice(0, 4);
  const bottomNav = navItems.slice(4, 6);

  // eslint-disable-next-line react/function-component-definition
  const NavLinks = () => (
    <>
      <div className="mx-2 mt-2 flex h-[14.375rem] w-[3.25rem] flex-col items-center justify-evenly rounded-[1.5rem] bg-[#1A1E1F] p-3 ">
        {topNav.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'text-[#FACD66] opacity-100 '
                : 'text-[#EFEEE0] opacity-25 hover:text-[#FACD66] hover:opacity-100'
            }
          >
            <item.icon size="24" variant="Bold" />
          </NavLink>
        ))}
      </div>
      <div className="mx-2 mt-2 flex h-[7.94rem] w-[3.25rem] flex-col items-center justify-evenly rounded-[2rem] bg-[#1A1E1F] p-3">
        {bottomNav.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'text-[#FACD66] opacity-100 '
                : 'text-[#EFEEE0] opacity-25 hover:text-[#FACD66] hover:opacity-100'
            }
          >
            <item.icon size="24" variant="Bold" className={item.style} />
          </NavLink>
        ))}
      </div>
    </>
  );
  return (
    <div className=" m-2 flex h-[2.125rem] bg-transparent md:h-[100vh] md:flex-col">
      <img src={Logo} alt="logo" className=" m-5 w-[2.125rem] " />
      <div
        className="absolute flex flex-row-reverse gap-5   md:hidden "
        onClick={handleClick}
      >
        <img src={Logo} alt="logo" className=" w-[2.125rem]" />
        <svg
          className="top-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_107_495)">
            <path
              d="M4 8H20"
              stroke="#EFEEE0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16H20"
              stroke="#EFEEE0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_107_495">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div
          className={
            !open
              ? 'hidden'
              : ' z-50 mt-7   flex h-[422.68px] flex-col items-center justify-evenly bg-[#1D2123]'
          }
        >
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#FACD66] opacity-100 '
                  : 'text-[#EFEEE0] opacity-25 hover:text-[#FACD66] hover:opacity-100'
              }
            >
              <div className="ml-5 flex w-[100vw] items-center justify-center ">
                <div className="ml-10 w-1/12 ">
                  <item.icon size="24" variant="Bold" className={item.style} />
                </div>
                <div className="t ml-5 w-11/12 self-start">{item.text}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="hidden h-5 md:block  md:h-[375px]">
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;
