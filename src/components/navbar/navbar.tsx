import React, { useContext, useEffect, useState } from "react";
import { Button, Img } from "../shared";
import { svg } from "../../assets";
import { img } from "../../assets/img";
import { authContext } from "../../store/authContext";
import { Link } from "react-router-dom";
import { path } from "../../routes";

const Navbar = (props: IpropNav) => {
  const { authenticated } = useContext(authContext);

  const [darkNav, setDarkNav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) setDarkNav(true);
    else setDarkNav(false);
  };

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
            {!authenticated && (
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
        <Link to={path.home}>Home</Link>
      </li>
      <li className="nav__listItem">
        <Link to={path.tvshows}>TV Shows</Link>
      </li>
      <li className="nav__listItem">
        <Link to={path.movies}>Movies</Link>
      </li>
      <li className="nav__listItem">
        <Link to={path.newandpopular}>New & Popular</Link>
      </li>
      <li className="nav__listItem">
        <Link to={path.mylist}>My List</Link>
      </li>
      <li className="nav__listItem">
        <Link to={path.browsebylanguage}>Browse by Languages</Link>
      </li>
    </ul>
  );
}
