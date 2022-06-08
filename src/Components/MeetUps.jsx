import React from "react";

import { Box, Text, Grid, Image } from "@chakra-ui/react";
import firstImage from "../images/Team.png";
import secondImage from "../images/Guy.png";
function MeetUps() {
  return (
    <Box mt="24" width={{ base: "90%", xl: "70%" }} mx="auto">
      <Box display={{ base: "none", sm: "flex" }}>
        <Text as="u" fontFamily="PixelSplitter" color="white" fontSize="1.2rem">
          MONTHLY MEETUPS
        </Text>
      </Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        color="white"
        gap="5"
        alignItems="center"
      >
        <Text
          background="rgba(207, 207, 207, 0.08)"
          boxShadow="0px 8px 32px rgba(0, 0, 0, 0.25)"
          backdropFilter={"auto"}
          backdropBlur="27px"
          borderBottomRadius="18px"
          borderTopRadius={{ md: "18px" }}
          //   mb="20"
          mb={{ base: "20", md: "0" }}
          p="5"
          pt="8"
        >
          DeGameFi organizes monthly meetups in a different formats Our
          community is dedicated to connect people interested in Blockchain
          development around the world. DeGameFi links you to the future
        </Text>
        <Image
          src={firstImage}
          alt="first"
          gridRow="1"
          gridColumnStart={{ md: "2" }}
          gridColumnEnd={{ md: "4" }}
          mb={{ base: "-6", md: "-0" }}
          zIndex="10"
          opacity="0.7"
        />
        <Image
          src={secondImage}
          alt="second"
          borderRadius="18px"
          mb={{ base: "-8", md: "0" }}
          zIndex="10"
          gridColumnStart={{ md: "1" }}
          gridColumnEnd={{ md: "3" }}
          opacity="0.7"
        />
        <Text
          background="rgba(207, 207, 207, 0.08)"
          boxShadow="0px 8px 32px rgba(0, 0, 0, 0.25)"
          backdropFilter={"auto"}
          backdropBlur="27px"
          borderBottomRadius="18px"
          mb={{ base: "20", md: "0" }}
          p="5"
          pt="8"
          borderTopRadius={{ md: "18px" }}
        >
          is simply dummy tex oftheprintingandtypesetting industry. Lorem Ipsum
          has been the industry's standarddummy text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only fivecenturies, but also
          the leap into is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standarddummy text ever
          since and typesetting industry. Lorem Ipsum has been the industry's
          standarddummy text ever since
        </Text>
      </Grid>
    </Box>
  );
}

export default MeetUps;
