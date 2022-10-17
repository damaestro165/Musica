import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

import { VideoHorizontal, Radio, MusicLibrary2, Profile } from "iconsax-react";

function Navbar() {
  const NavLinks = () => (
    <>
      <div className="bg-[#1A1E1F] p-3 mx-2 mt-2 rounded-[1.5rem] flex flex-col justify-evenly items-center w-[3.25rem] h-[14.375rem]">
        <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            isActive
              ? "fill-[#FACD66] opacity-100 "
              : "fill-[#EFEEE0] hover:fill-[#FACD66] opacity-25"
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={({ isActive }) =>
              isActive
                ? "fill-[#FACD66] opacity-100 "
                : "fill-[#EFEEE0] hover:fill-[#FACD66] opacity-25"
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.14373 20.7822V17.7154C9.14372 16.9382 9.77567 16.3068 10.5584 16.3019H13.4326C14.2189 16.3019 14.8563 16.9348 14.8563 17.7154V17.7154V20.7733C14.8563 21.4474 15.404 21.9952 16.0829 22.0001H18.0438C18.9596 22.0025 19.8388 21.6429 20.4872 21.0008C21.1356 20.3587 21.5 19.4869 21.5 18.5776V9.86597C21.5 9.13151 21.1721 8.43483 20.6046 7.96362L13.943 2.67439C12.7785 1.74924 11.1154 1.77913 9.98539 2.74551L3.46701 7.96362C2.87274 8.42094 2.51755 9.11968 2.5 9.86597V18.5688C2.5 20.4638 4.04738 22.0001 5.95617 22.0001H7.87229C8.19917 22.0025 8.51349 21.8752 8.74547 21.6465C8.97746 21.4179 9.10793 21.1068 9.10792 20.7822H9.14373Z" />
          </svg>
        </NavLink>
        <NavLink
          to="/collections"
          exact
          className={({ isActive }) =>
            isActive
              ? "text-[#FACD66] opacity-100 "
              : "text-[#EFEEE0] hover:text-[#FACD66] opacity-25"
          }
        >
          <MusicLibrary2
            className={({ isActive }) =>
              isActive ? "text-[#FACD66] opacity-100 " : "text-[#EFEEE0]"
            }
            size="24"
            variant="Bold"
          />
        </NavLink>
        <NavLink
          to="/hhhhh"
          exact
          className={({ isActive }) =>
            isActive
              ? "text-[#FACD66] opacity-100 "
              : "text-[#EFEEE0] opacity-25"
          }
        >
          <Radio
            className={({ isActive }) =>
              isActive ? "text-[#FACD66] opacity-100 " : "text-[#EFEEE0]"
            }
            size="24"
            variant="Bold"
          />
        </NavLink>
        <NavLink
          to="/ssss"
          exact
          className={({ isActive }) =>
            isActive
              ? "text-[#FACD66] opacity-100 "
              : "text-[#EFEEE0]opacity-25 opacity-25"
          }
        >
          <VideoHorizontal
            className={({ isActive }) =>
              isActive ? "text-[#FACD66] opacity-100 " : "text-[#EFEEE0]"
            }
            size="24"
            variant="Bold"
          />
        </NavLink>
      </div>
      <div className="bg-[#1A1E1F] p-3 mx-2 mt-2 rounded-[2rem] flex flex-col justify-evenly items-center w-[3.25rem] h-[7.94rem]">
        <NavLink
          to="/profile"
          exact
          className={({ isActive }) =>
            isActive
              ? "text-[#FACD66] opacity-100 "
              : "text-[#EFEEE0] opacity-25"
          }
        >
          <Profile
            className={({ isActive }) =>
              isActive ? "text-[#FACD66] opacity-100 " : "text-[#EFEEE0]"
            }
            size="24"
            variant="Bold"
          />
        </NavLink>
        <NavLink
          to="/logout"
          exact
          className={({ isActive }) =>
            isActive
              ? "fill-[#FACD66] opacity-100 "
              : "fill-[#EFEEE0] opacity-25"
          }
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.535 1.83333C12.8107 1.83333 14.6666 3.6575 14.6666 5.90333V10.2942H9.07072C8.66967 10.2942 8.35257 10.6058 8.35257 11C8.35257 11.385 8.66967 11.7058 9.07072 11.7058H14.6666V16.0875C14.6666 18.3333 12.8107 20.1667 10.5163 20.1667H5.9743C3.6893 20.1667 1.83331 18.3425 1.83331 16.0967V5.9125C1.83331 3.6575 3.69862 1.83333 5.98363 1.83333H10.535ZM16.9952 7.83768C17.2702 7.55352 17.7193 7.55352 17.9943 7.82852L20.671 10.496C20.8085 10.6335 20.8818 10.8077 20.8818 11.0002C20.8818 11.1835 20.8085 11.3668 20.671 11.4952L17.9943 14.1627C17.8568 14.3002 17.6735 14.3735 17.4993 14.3735C17.316 14.3735 17.1327 14.3002 16.9952 14.1627C16.7202 13.8877 16.7202 13.4385 16.9952 13.1635L18.4618 11.706H14.6668V10.2943H18.4618L16.9952 8.83685C16.7202 8.56185 16.7202 8.11268 16.9952 7.83768Z" />
          </svg>
        </NavLink>
      </div>
    </>
  );
  return (
    <>
      <div className="flex flex-col h-[100vh] bg-transparent m-2 ">
        <img src={Logo} alt="logo" className="w-[2.125rem] m-5" />
        <div className="h-[375px] ">
          <NavLinks />
        </div>
      </div>
    </>
  );
}

export default Navbar;
