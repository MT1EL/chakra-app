import React from "react";

import { Box, Image, Grid } from "@chakra-ui/react";

import Man from "../images/CarousleMan.png";

function Speakers() {
  const carousel = [1, 2, 3, 4];
  return (
    <Box id="SPEAKERS">
      <Grid
        gridTemplateColumns="repeat(4, 1fr)"
        mx="auto"
        w="fit-content"
        gap="4"
      >
        {carousel.map((item) => {
          return (
            <Image
              src={Man}
              alt="carousel man"
              rounded="full"
              minW="150px"
              display={{ base: item >= 2 && "none", xs: "block" }}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

export default Speakers;
