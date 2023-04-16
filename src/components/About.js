import {
  Box,
  Button,
  Center,
  Heading,
  Avatar,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineRollback, AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

function About() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(50deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        style={{
          textDecoration: "none",
          backgroundColor: "transparent",
          transform: "rotate(-180deg)",
          marginLeft: "-60px",
          fontWeight: "400",
          fontSize: "18px",
        }}
      >
        <i className="fab fa-linkedin works hover-link">About me</i>
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent backgroundColor="transparent" marginTop="80px">
          <ModalHeader>A bit more about me</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={"center"}
          >
            <Avatar src="/i.jpeg" height="220px" width="200px" />
            <Text textAlign={"justify"}>
              I'm a junior developer, passionate about cars, motorcycles and
              games like racing simulators, DOTA2, football, etc. I'm 24 years
              old, living in Portugal since I was 19. <br /> At the age of 14 I
              had my first contact with code, where I had the opportunity to
              learn .NET(VB), but it was only in 2022 that I started to study
              Web Development, since then I have had contact and learned more
              every day with technologies such as: React, Nodejs, Javascript,
              Express, MongoDB, HTML and CSS. <br /> I currently work as a
              Frontend Developer at Manutan using jQuery, HTML and CSS. Among my
              tasks are creating new pages, updating old pages with
              responsiveness on each device, testing new features and in some
              cases implementing them.
              <br /> If you want to get in touch, you can do so by clicking on
              the "Get in touch" button in the previous menu. <br />
              <br />I am available for any clarification.
              <br />
              <br /> Best regards,
              <br /> Joao Silva
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>
              <AiOutlineClose />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default About;
