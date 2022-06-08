import React from "react";

import {
  Box,
  Input,
  VStack,
  Text,
  Textarea,
  Button,
  Grid,
  Center,
} from "@chakra-ui/react";

function Contact() {
  return (
    <Box my="10">
      <Center>
        <Text
          as="u"
          fontFamily="PixelSplitter"
          color="white"
          fonrSize="4rem"
          w="min(60em, 90%)"
          mb="10"
        >
          CONTACT US
        </Text>
      </Center>
      <Grid
        gridTemplateColumns="1fr 1fr"
        bg="#323232"
        w="min(60em, 90%)"
        mx="auto"
        rounded="2xl"
        justifyContent="space-around"
        p="10"
      >
        <VStack color="white">
          <Box>
            <Text>name</Text>
            <Input w="100%" fontFamily="PixelSplitter" />
          </Box>
          <Box>
            <Text>Email</Text>
            <Input w="100%" fontFamily="PixelSplitter" />
          </Box>
          <Box>
            <Text>phone</Text>
            <Input w="100%" fontFamily="PixelSplitter" />
          </Box>
        </VStack>
        <VStack color="white" ml="2">
          <Text>Message</Text>
          <Textarea height="100%" />
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
            SEND MASSAGE{" "}
          </Button>{" "}
        </VStack>
      </Grid>
    </Box>
  );
}

export default Contact;
