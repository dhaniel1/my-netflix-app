import React from "react";
import { Button, Card, Img, Navbar } from "../components";
import { img } from "../assets";
import { rootCardData } from "../store/contentData";
import { useNavigate } from "react-router";
import { path } from "../routes";

const Root = () => {
  const navigate = useNavigate();

  const navitageTo = () => {
    navigate(path.signIn);
    return;
  };

  return (
    <>
      <div className="root">
        <Navbar clickFn={navitageTo} />
        <div className="root__container">
          <div className="root__header">
            <h1 className="root__header-primary">
              Unlimited movies, TV shows, and more
            </h1>
            <h6 className="root__header-secondary">
              Watch anywhere. Cancel anytime.
            </h6>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="root__form">
              <input
                type="text"
                title="email"
                name="email"
                placeholder="Email address"
                value=""
              />
              <Button title="Get Started" styles="rounded root__btn btnRed">
                <Img className="root__forwardImg" src={img.forward} />
              </Button>
            </div>
          </div>
          <div className="sectionTwo">
            <div>
              <div className="card__container ">
                {rootCardData.map((data) => {
                  return <Card data={data} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
