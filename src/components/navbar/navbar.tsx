import React, { useContext, useEffect, useState } from "react";
import { Button, Img } from "../shared";
import { svg } from "../../assets";
import { img } from "../../assets/img";
import { authContext } from "../../store/authContext";
import { NavLink, useLocation } from "react-router-dom";
import { path } from "../../routes";

const Navbar = (props: IpropNav) => {
  const { authenticated } = useContext(authContext);

  const [darkNav, setDarkNav] = useState(false);

  const location = useLocation();
  // console.log(location);

  const transitionNavBar = () => {
    if (window.scrollY > 100) setDarkNav(true);
    else setDarkNav(false);
  };
  console.log(authenticated);
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <nav className={`nav ${authenticated && darkNav && "nav-black"}`}>
        <div className="nav__contents">
          <div className="nav__primaryContainer">
            <Img
              src={authenticated ? svg.netflixLogo : svg.netflixLogoBig}
              className="nav__logo"
            />
            {authenticated && <Ul />}
          </div>
          <div className="nav__secondaryContainer">
            {authenticated && <Img src={svg.search} className="nav__avatar" />}
            {authenticated && (
              <Img src={img.notification} className="nav__avatar" />
            )}
            {authenticated && (
              <Img src={img.profile1} className="nav__avatar" />
            )}
            {!location.pathname.includes("/signin") && !authenticated && (
              <Button
                onClick={props.clickFn}
                styles="rounded banner__button btnRed">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

function Ul() {
  return (
    <ul className="nav__list">
      <li className="nav__listItem">
        <NavLink to={path.home}>Home</NavLink>
      </li>
      <li className="nav__listItem">
        <NavLink to={path.tvshows}>TV Shows</NavLink>
      </li>
      <li className="nav__listItem">
        <NavLink to={path.movies}>Movies</NavLink>
      </li>
      <li className="nav__listItem">
        <NavLink to={path.newandpopular}>New & Popular</NavLink>
      </li>
      <li className="nav__listItem">
        <NavLink to={path.mylist}>My List</NavLink>
      </li>
      <li className="nav__listItem">
        <NavLink to={path.browsebylanguage}>Browse by Languages</NavLink>
      </li>
    </ul>
  );
}
