import {
  Box,
  Button,
  Center,
  Heading,
  Image,
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

function Works({ project, setProject }) {
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
        <i className="fab fa-linkedin works hover-link">Work</i>
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent
          backgroundColor="rgb(255,255,255,0.002)"
          color="white"
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
        >
          <ModalHeader color="white">Browse my projects</ModalHeader>
          <ModalCloseButton />
          {project && project === "options" ? (
            <ModalBody display="flex" flexDirection="column">
              <Button
                color="white"
                backgroundColor="rgb(255,255,255,0.08)"
                marginBottom="4px"
                onClick={() => setProject("idea")}
                className="hover-link"
              >
                IDEA Restaurant (Digital Menu)
              </Button>
              <Button
                color="white"
                backgroundColor="rgb(255,255,255,0.08)"
                onClick={() => setProject("auto")}
                className="hover-link"
              >
                Auto-Premium
              </Button>
            </ModalBody>
          ) : project === "idea" ? (
            <Center marginTop="50px" className="modal-card" py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={"transparent"}
                boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"230px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: "/idea.png",
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <a href="https://idea-restaurant.cyclic.app/" target="_blank">
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src="/idea.png"
                    />
                  </a>
                </Box>
                <Stack pt={10} align={"center"}>
                  <Text color={"gray.500"} fontSize={"sm"} textAlign="center">
                    Nodejs | Express | Javascript(ES6) | MongoDB | Handlebars |
                    HTML & CSS
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                  >
                    <a
                      href="https://idea-restaurant.cyclic.app/"
                      className="hover-link"
                      target="_blank"
                      style={{ color: "white" }}
                    >
                      IDEA Restaurant{" "}
                    </a>
                  </Heading>
                  <Stack direction={"row"} textAlign={"justify"}>
                    <Text color={"white"}>
                      A digital menu for a restaurant, where the website owner
                      can create, edit and delete dishes from the database, also
                      has an API to generate QR Codes to facilitate access to
                      the menu for customers.{" "}
                    </Text>
                  </Stack>
                  <br />
                  <Button
                    className="hover-link"
                    color="white"
                    backgroundColor="rgb(255,255,255,0.08)"
                  >
                    <a
                      className="hover-link"
                      href="https://github.com/joaovff/restaurant-project"
                      target="_blank"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "white",
                      }}
                      color="white"
                    >
                      <BsGithub
                        className="hover-link"
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                        color="white"
                        backgroundColor="transparent"
                      />
                    </a>
                  </Button>
                </Stack>
              </Box>
            </Center>
          ) : (
            <Center marginTop="50px" className="modal-card" py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg="transparent"
                boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"230px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: "/autopremium.png",
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <a href="https://auto-premium.netlify.app/" target="_blank">
                    <Image
                      rounded={"lg"}
                      height={220}
                      width={282}
                      objectFit={"cover"}
                      src="/autopremium.png"
                    />
                  </a>
                </Box>
                <Stack pt={10} textAlign={"center"}>
                  <Text color={"gray.400"} fontSize={"sm"}>
                    React | Nodejs | Express | Javascript(ES6) | MongoDB | HTML
                    & CSS
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                  >
                    <a
                      href="https://auto-premium.netlify.app/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "white" }}
                      className="hover-link"
                    >
                      Auto Premium{" "}
                    </a>
                  </Heading>
                  <Stack direction={"row"} textAlign={"justify"}>
                    <Text color={"white"}>
                      As a big fan of cars, it was a pleasure to develop
                      Auto-Premium. In this project any user can create an
                      account and advertise it for sale, the advertisement will
                      be displayed to all users of the site, as well as all its
                      technical specifications.
                    </Text>
                  </Stack>
                  <br />
                  <Button
                    className="hover-link"
                    color="white"
                    backgroundColor="rgb(255,255,255,0.08)"
                  >
                    <a
                      href="https://github.com/joaovff/Auto-Premium-Backend"
                      target="_blank"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                      }}
                      color="white"
                      backgroundColor="transparent"
                      className="hover-link"
                    >
                      Back-end{" "}
                      <BsGithub
                        style={{
                          marginLeft: "8px",
                          marginTop: "2px",
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                        color="white"
                        backgroundColor="transparent"
                      />
                    </a>{" "}
                  </Button>
                  <Button
                    className="hover-link"
                    color="white"
                    backgroundColor="rgb(255,255,255,0.08)"
                    style={{
                      backgroundColor: "rgb(255,255,255,0.08)",
                      color: "white",
                    }}
                  >
                    <a
                      href="https://github.com/joaovff/Auto-Premium-Frontend"
                      target="_blank"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "white",
                      }}
                      color="white"
                      className="hover-link"
                    >
                      Front-end{" "}
                      <BsGithub
                        style={{
                          marginLeft: "8px",
                          marginTop: "2px",
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                        color="white"
                      />
                    </a>
                  </Button>
                </Stack>
              </Box>
            </Center>
          )}

          <ModalFooter>
            {project && project !== "options"}
            <Button
              marginRight="10px"
              onClick={() => setProject("options")}
              backgroundColor="rgb(255,255,255,0.08)"
              className="hover-link"
            >
              <AiOutlineRollback color="white" />
            </Button>
            <Button bg={"red.500"} onClick={onClose}>
              <AiOutlineClose color="white" />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Works;
