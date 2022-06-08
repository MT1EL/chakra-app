import React from "react";

import {
  Box,
  Button,
  Image,
  Text,
  SimpleGrid,
  Center,
  Grid,
} from "@chakra-ui/react";

import Image1 from "../images/bla.png";
import Image2 from "../images/About2.png";
import RAK from "../images/RAK.png";
import AST from "../images/AST.png";
function About() {
  return (
    <Box overflow="hidden" pt="28" id="ABOUT">
      <SimpleGrid columns={2} w={{ base: "90%", sm: "80%" }} mx="auto">
        <Center>
          <Box position="relative">
            <Image src={Image1} alt="first" minW="100%" minH="110%" />
            <Box
              color="white"
              position="absolute"
              top={{ base: "0", sm: "50%", md: "60%" }}
              left={{ base: "0", sm: "40%", md: "50%" }}
              transform={{ base: "", sm: "translate(-50%, -50%)" }}
              fontSize={{ base: "1rem", sm: "2rem", md: "2.5rem" }}
              width="80%"
              height="100%"
              overflow="hidden"
            >
              <Text
                fontFamily="PixelSplitter"
                mt="4"
                fontSize={{ base: "1.2rem", sm: "3rem", md: "3rem" }}
              >
                Upcoming Event...
              </Text>
              <Text fontFamily="Nova Square" mb={{ base: "0", md: "3" }}>
                Annual Conference
              </Text>
              <Text fontFamily="Nova Square" mb={{ base: "0", md: "3" }}>
                Radisson Blu Iveria
              </Text>
              <Text> Tbilisi, Georgia</Text>
              <Text fontFamily="Nova Square" mb={{ base: "0", md: "3" }}>
                September 15 13:00
              </Text>
              <Button
                display={{ base: "none", lg: "flex" }}
                variant="ghost"
                backdropFilter={"auto"}
                backdropBlur="23px"
                background="#EBEBEB47"
                _hover={{ background: "#EBEBEB20" }}
                height="12"
                rounded="2xl"
              >
                GET YOUR TICKET!
              </Button>
            </Box>
          </Box>
        </Center>
        <Center>
          <Box>
            <Image src={Image2} alt="second" w="100%" h="100%" />
          </Box>
        </Center>
      </SimpleGrid>

      <Grid
        color="white"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gridTemplateRows={{ base: "", md: "0.5fr, 1fr" }}
        justifyItems="center"
        alignItems="center"
        maxW="90%"
        mx="auto"
      >
        <Box
          w="85%"
          background="rgba(207, 207, 207, 0.08)"
          boxShadow="0px 8px 32px rgba(0, 0, 0, 0.25)"
          backDropFilter="auto"
          backdropBlur="27px"
          borderRadius="18px"
          fontWeight="bold"
          px="5"
          pb="10"
          mb="5"
        >
          <Text fontFamily="PixelSplitter" my="5" fontSize="1.3rem">
            WHAT WE DO
          </Text>
          <Text fontSize="1.2rem" maxWidth={{ base: "90%", md: "100%" }}>
            is simply dummy text of the printing and typesetting dustry. Lorem
            Ipsum has been the industry's standarddummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It{" "}
          </Text>
        </Box>
        <Box alignSelf="end">
          <Image
            src={AST}
            alt="AStrounat"
            display={{ base: "none", md: "block" }}
          />
        </Box>
        <Box>
          <Image
            src={RAK}
            alt="Raketa"
            display={{ base: "none", md: "block" }}
            mt="-36"
          />
        </Box>
        <Box
          w="85%"
          background="rgba(207, 207, 207, 0.08)"
          boxShadow="0px 8px 32px rgba(0, 0, 0, 0.25)"
          backDropFilter="auto"
          backdropBlur="27px"
          borderRadius="18px"
          px="5"
          pb="10"
          mb="5"
          alignSelf="start"
        >
          <Text
            fontFamily="PixelSplitter"
            my="5"
            fontSize="1.3rem"
            py={{ base: "", md: "5" }}
          >
            GOALS
          </Text>
          <Text
            fontSize="1.2rem"
            maxWidth={{ base: "90%", md: "100%" }}
            py={{ base: "", md: "5" }}
          >
            is simply dummy text of the printing and typesetting dustry. Lorem
            Ipsum has been the industry's standarddummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It{" "}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default About;
