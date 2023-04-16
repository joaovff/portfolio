import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowMaximise } from "react-icons/ti";
import { GoLogoGithub } from "react-icons/go";
import { RiLinkedinFill } from "react-icons/ri";
import { Phrase, Char } from "animatedtxt";
import Works from "../components/Works";
import About from "../components/About";

function Main() {
  const windowSize = window.innerWidth;

  const [project, setProject] = useState("options");

  setTimeout(() => {
    const grid = document.querySelector("#hex-grid");
    const light = document.querySelector(".light");
    grid.addEventListener("mousemove", function (e) {
      light.style.left = `${e.clientX}px`;
      light.style.top = `${e.clientY}px`;
    });
  }, 1000);

  return (
    <div className="container-bg">
      <header id="hex-grid">
        <div className="light"></div>
        <div className="grid"></div>
      </header>
      {windowSize && windowSize <= 520 && (
        <div className="title">
          <Phrase
            margin={8}
            size={30}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            font="basic-medium"
          >
            <Char char="H" />
            <Char char="I" />
          </Phrase>
          <br />
          <Phrase
            margin={5}
            size={30}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            delay={1.5}
            font="font1"
          >
            <Char char="I" />
            <Char char="M" />
            <Char char="A" color="transparent" />
            <Char char="J" color="#05ad05" font="basic-medium" />
            <Char char="O" color="#05ad05" font="basic-medium" />
            <Char char="A" color="#05ad05" font="basic-medium" />
            <Char char="O" color="#05ad05" font="basic-medium" />
            <Char char="A" color="transparent" />
            <Char char="S" color="#05ad05" />
            <Char char="I" color="#05ad05" />
            <Char char="L" color="#05ad05" />
            <Char char="V" color="#05ad05" />
            <Char char="A" color="#05ad05" />
          </Phrase>
          <br />
          <Phrase
            margin={5}
            size={13}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            delay={3}
            font="basic-medium"
          >
            <Char char="F" />
            <Char char="U" />
            <Char char="L" />
            <Char char="L" />
            <Char char="C" color="transparent" />
            <Char char="S" />
            <Char char="T" />
            <Char char="A" />
            <Char char="C" />
            <Char char="K" />
            <Char char="C" color="transparent" />
            <Char char="W" />
            <Char char="E" />
            <Char char="B" />
            <Char char="C" color="transparent" />
            <Char char="D" />
            <Char char="E" />
            <Char char="V" />
            <Char char="E" />
            <Char char="L" />
            <Char char="O" />
            <Char char="P" />
            <Char char="E" />
            <Char char="R" />
          </Phrase>
        </div>
      )}
      {windowSize && windowSize > 520 && windowSize <= 1000 && (
        <div className="title">
          <Phrase
            margin={8}
            size={50}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            font="basic-medium"
          >
            <Char char="H" />
            <Char char="I" />
          </Phrase>
          <br />
          <Phrase
            margin={5}
            size={50}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            delay={1.5}
            font="font1"
          >
            <Char char="I" />
            <Char char="M" />
            <Char char="A" color="transparent" />
            <Char char="J" color="#05ad05" font="basic-medium" />
            <Char char="O" color="#05ad05" font="basic-medium" />
            <Char char="A" color="#05ad05" font="basic-medium" />
            <Char char="O" color="#05ad05" font="basic-medium" />
            <Char char="A" color="transparent" />
            <Char char="S" color="#05ad05" />
            <Char char="I" color="#05ad05" />
            <Char char="L" color="#05ad05" />
            <Char char="V" color="#05ad05" />
            <Char char="A" color="#05ad05" />
          </Phrase>
          <br />
          <Phrase
            margin={5}
            size={13}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            delay={3}
            font="basic-medium"
          >
            <Char char="F" />
            <Char char="U" />
            <Char char="L" />
            <Char char="L" />
            <Char char="C" color="transparent" />
            <Char char="S" />
            <Char char="T" />
            <Char char="A" />
            <Char char="C" />
            <Char char="K" />
            <Char char="C" color="transparent" />
            <Char char="W" />
            <Char char="E" />
            <Char char="B" />
            <Char char="C" color="transparent" />
            <Char char="D" />
            <Char char="E" />
            <Char char="V" />
            <Char char="E" />
            <Char char="L" />
            <Char char="O" />
            <Char char="P" />
            <Char char="E" />
            <Char char="R" />
          </Phrase>
        </div>
      )}
      {windowSize && windowSize > 1000 && (
        <div className="title">
          <Phrase
            margin={8}
            size={50}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            font="basic-medium"
          >
            <Char char="H" />
            <Char char="I" />
          </Phrase>
          <br />
          <Phrase
            margin={5}
            size={60}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            delay={1.5}
            font="font1"
          >
            <Char char="I" />
            <Char char="M" />
            <Char char="A" color="transparent" />
            <Char char="J" color="#05ad05" font="basic-medium" />
            <Char char="O" color="#05ad05" font="basic-medium" />
            <Char char="A" color="#05ad05" font="basic-medium" />
            <Char char="O" color="#05ad05" font="basic-medium" />
            <Char char="A" color="transparent" />
            <Char char="S" color="#05ad05" />
            <Char char="I" color="#05ad05" />
            <Char char="L" color="#05ad05" />
            <Char char="V" color="#05ad05" />
            <Char char="A" color="#05ad05" />
          </Phrase>
          <br />
          <Phrase
            margin={5}
            size={22}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            delay={3}
            font="basic-medium"
          >
            <Char char="F" />
            <Char char="U" />
            <Char char="L" />
            <Char char="L" />
            <Char char="C" color="transparent" />
            <Char char="S" />
            <Char char="T" />
            <Char char="A" />
            <Char char="C" />
            <Char char="K" />
            <Char char="C" color="transparent" />
            <Char char="W" />
            <Char char="E" />
            <Char char="B" />
            <Char char="C" color="transparent" />
            <Char char="D" />
            <Char char="E" />
            <Char char="V" />
            <Char char="E" />
            <Char char="L" />
            <Char char="O" />
            <Char char="P" />
            <Char char="E" />
            <Char char="R" />
          </Phrase>
        </div>
      )}
      <div className="circular-menu">
        <div className="inner-circle">
          <i className="fas fa-bars">
            <TiArrowMaximise className="menu-btn" fontSize="28px" />
          </i>
        </div>
        <div>
          <a className="panel">
            <i className="fab fa-facebook-f">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/joao-figueiredo-silva/"
                className="hover-link"
              >
                Linkedin
              </Link>
            </i>
          </a>

          <a className="panel">
            <i
              className="fab fa-instragram hover-link"
              style={{ marginLeft: "-25px" }}
            >
              <Link
                target="_blank"
                to="https://github.com/joaovff"
                className="hover-link"
              >
                Github
              </Link>
            </i>
          </a>

          <a className="panel">
            <i className="fab fa-linkedin works ">
              <Works project={project} setProject={setProject} />
            </i>
          </a>

          <a className="panel">
            <i className="fab fa-tiktok hover-link"> <About/></i>
          </a>

          <a className="panel">
            <i
              className="fab fa-youtube"
              style={{ marginLeft: "-15px", marginTop: "18px" }}
            >
              <a
                className="hover-link"
                href="mailto:joao.figueiredosilva@protonmail.com"
              >
                Get in touch
              </a>
            </i>
          </a>

          <a className="panel">
            <i className="fab fa-twitch">
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/13CyNZALxkCPjwqFkZzOtQ7DieOukSpoU/view?usp=sharing"
                className="hover-link"
              >
                CV
              </Link>
            </i>
          </a>
        </div>
      </div>{" "}
      <a
        href="https://www.linkedin.com/in/joao-figueiredo-silva/"
        target="_blank"
      >
        <div className="feedback-btn">
          <p className="feedback-txt">
            <RiLinkedinFill />
          </p>
        </div>
      </a>
      <a href="https://github.com/joaovff" target="_blank">
        <div className="feedback-btn2">
          <p className="feedback-txt2 ">
            <GoLogoGithub />
          </p>
        </div>
      </a>
    </div>
  );
}

export default Main;
