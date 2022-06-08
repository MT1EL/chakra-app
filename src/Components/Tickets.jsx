import React from "react";

import { Box, Center, Grid, Text, Button } from "@chakra-ui/react";

function Tickets() {
  return (
    <Box mb="8">
      <Center>
        <Text
          as="u"
          fontFamily="PixelSplitter"
          color="white"
          fontSize="1.2rem"
          mt="10"
        >
          Tickets
        </Text>
      </Center>
      <Grid
        gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr" }}
        maxW="90%"
        w="min(60em, 90%)"
        mx="auto"
        justifyItems="center"
        alignItems="center"
        gap="2"
        mt="5"
      >
        {card(30)}
        <Box maxW="50%" display={{ base: "block", md: "none" }}>
          <Text color="white" fontSize="1.2rem">
            Expo & NFT gallery access only
          </Text>
        </Box>
        <Box maxW="50%" display={{ base: "block", md: "none" }}>
          <Text color="white" fontSize="1.2rem">
            Expo & NFT gallery access only
          </Text>
        </Box>
        {card(100)}
        {card(300)}
        <Box maxW="50%" display={{ base: "block", md: "none" }}>
          <Text color="white" fontSize="1.2rem">
            Expo & NFT gallery access only
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Tickets;

function card(price) {
  return (
    <Box
      py="8"
      px="5"
      width="100%"
      // height={{ base: "100%", md: "150%" }}

      bg=" linear-gradient(212.28deg, #BBEDAD 1.89%, #32D99F 22.23%, #3194BF 64.79%, #3769EA 96.14%)"
      border="1px solid rgba(0, 0, 0, 0.3)"
      borderRadius="14px"
      display={"flex"}
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Text
        color="white"
        as="u"
        fontSize="1.3rem"
        fontFamily="PixelSplitter"
        pb="4"
      >
        STANDARD
      </Text>

      <Text color="white" fontSize="1.6rem" my="2">
        {price}$
      </Text>
      <Box>
        <Text color="white" mt="2">
          One day Ticket
        </Text>
        <Center>
          <Text color="white" mb="4">
            13March
          </Text>
        </Center>
      </Box>
      <Button border="1px solid white" variant="ghost">
        BUY TICKET
      </Button>
    </Box>
  );
}
