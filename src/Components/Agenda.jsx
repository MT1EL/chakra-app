import React from "react";

import {
  Box,
  Text,
  Grid,
  HStack,
  VStack,
  Center,
  Circle,
} from "@chakra-ui/react";
import { useState } from "react";

function Agenda() {
  const [Day, setDay] = useState(2);

  return (
    <Box color="white" mt="20">
      <Text
        display={{ base: "none", md: "block" }}
        fontFamily="PixelSplitter"
        fontSize="44px"
        textAlign="center"
      >
        DEGAMEFI ANNUAL CONFERENCE 2022{" "}
      </Text>
      <Text
        display={{ base: "none", md: "block" }}
        fontFamily="PixelSplitter"
        fontSize="33px"
        textAlign="center"
      >
        SEPTEMBER 16,17 GEORGIA
      </Text>
      <Center my="5">
        <Text
          as="u"
          fontWeight="bold"
          fontSize={"2rem"}
          fontFamily="PixelSplitter"
        >
          AGENDA
        </Text>
      </Center>
      <Center>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr 0.1fr 1fr" }}
          bg="#383838"
          w="min(60em, 90%)"
          justifyItems="center"
          border="2px solid rgba(255, 255, 255, 0.3)"
          boxShadow={" 0px 0px 126px 37px rgba(0, 159, 150, 0.25)"}
          borderRadius="18px"
          p="10"
        >
          <HStack display={{ base: "block", md: "none" }}>
            <Text
              as="u"
              fontFamily={"PixelSplitter"}
              color={Day === 2 && "#817979"}
              onClick={() => setDay(1)}
              cursor="pointer"
            >
              DAY 1
            </Text>
            <Text
              as="u"
              fontFamily={"PixelSplitter"}
              color={Day === 1 && "#817979"}
              onClick={() => setDay(2)}
              cursor="pointer"
            >
              DAY 2{" "}
            </Text>
          </HStack>

          <Box display={{ base: Day === 2 ? "none" : "block", md: "block" }}>
            <Center>
              <Text
                as="u"
                fontFamily={"PixelSplitter"}
                display={{ base: "none", md: "block" }}
              >
                DAY 1
              </Text>
            </Center>
            {list()}
          </Box>
          <Box
            height="105%"
            width="2.5px"
            bg="#FFF"
            borderRadius="10px"
            display={{ base: "none", md: "block" }}
          />
          <Box display={{ base: Day === 1 ? "none" : "block", md: "block" }}>
            <Center display={{ base: "none", md: "block" }}>
              <Text as="u" fontFamily={"PixelSplitter"}>
                DAY 2
              </Text>
            </Center>
            {list()}
          </Box>
        </Grid>
      </Center>
    </Box>
  );
}

export default Agenda;

const arr = [
  {
    time: "20:00",
    title: "Pre party, For VIP guests and Speakers Place: Armani Prive",
  },
  {
    time: "13:00",
    title: "Registration & Coffee Networking",
  },
  {
    time: "14:00",
    title: "Lunch",
  },
  {
    time: "15:15",
    title:
      "Welcoming speech by Ahmed Elmetwally CEO at Private Office with Sheikh Mohamed Bin Ahmed Bin Hamdan ",
  },
  {
    time: "15:20",
    title:
      "Keynote: Hoda Alkhzaimi, President at Emirates Digital Association for  Women “Building financial structures for Metaverse tech buildup”",
  },
  {
    time: "20:00",
    title: "Pre party, For VIP guests and  Speakers Place: Armani Prive",
  },
];

function list() {
  return arr.map((item) => {
    return (
      <Box>
        <HStack mt="2" display={{ base: "none", md: "flex" }}>
          <Text fontSize={"1.2rem"} fontWeight="bold" alignSelf="start">
            {item.time}
          </Text>
          <Circle
            size="5"
            bg="#616161"
            alignSelf="start"
            mt="2"
            display={{ base: "none", md: "block" }}
          />
          <Text fontWeight="medium" alignSelf="start">
            {item.title}
          </Text>
        </HStack>
        <VStack mt="2" display={{ base: "block", md: "none" }}>
          <Text fontSize={"1.2rem"} fontWeight="bold" alignSelf="start">
            {item.time}
          </Text>
          <Text fontWeight="medium" alignSelf="start">
            {item.title}
          </Text>
          <Box width="50px" height="2px" background="#eee" alignSelf="start" />
        </VStack>
      </Box>
    );
  });
}
