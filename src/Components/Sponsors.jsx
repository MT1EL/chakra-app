import React from "react";

import { Box, Text, Circle, Grid, Button } from "@chakra-ui/react";

function Sponsors() {
  return (
    <Box mt="24" id="Sponsors">
      <Text
        as="u"
        color="white"
        fontFamily="PixelSplitter"
        ml="24"
        mt="4"
        fontSize="2.5rem"
      >
        Sponsors
      </Text>
      <Grid
        gridTemplateColumns="repeat(4,  1fr)"
        rowGap="4"
        w="90%"
        mx="auto"
        mt="20"
      >
        <Circle size="150" bg="white" justifySelf="end" />
        <Circle size="150" bg="white" justifySelf="end" />
        <Circle size="150" bg="white" justifySelf="end" />
        <Circle size="150" bg="white" justifySelf="end" />

        <Circle size="150" bg="white" justifySelf="start" />
        <Circle size="150" bg="white" justifySelf="start" />
        <Circle size="150" bg="white" justifySelf="start" />
        <Circle size="150" bg="white" justifySelf="start" />

        <Circle size="150" bg="white" justifySelf="end" />
        <Circle size="150" bg="white" justifySelf="end" />
        <Circle size="150" bg="white" justifySelf="end" />
        <Circle size="150" bg="white" justifySelf="end" />
      </Grid>

      <Button
        display={{ base: "none", lg: "flex" }}
        variant="ghost"
        background="rgba(235, 235, 235, 0.28)"
        boxShadow="0px 1px 6px rgba(0, 0, 0, 0.25)"
        backdropFilter={"auto"}
        backdropBlur="23px"
        _hover={{ background: "#EBEBEB20" }}
        height="12"
        borderRadius="11px"
        mx="auto"
        my="20"
        color="white"
      >
        GET YOUR TICKET!
      </Button>
    </Box>
  );
}

export default Sponsors;
