import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import logo from "../images/GDF 1.png";

export default function WithSubnavigation() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [language, setLanguage] = useState("ENG");
  return (
    <Box>
      <Flex
        bg=" rgba(0, 0, 0, 0.26);"
        color="white"
        minH={"60px"}
        py={{ base: 4, lg: 8 }}
        px={{ base: 6, lg: 20 }}
        align={"center"}
        justifyContent="space-between"
        zIndex="999"
        position="fixed"
        w="100vw"
        backdropFilter="auto"
        backdropBlur="336px"
      >
        <Flex flex={{ base: 1 }} justifyContent="space-between">
          <Image src={logo} alt="logo" justifySelf="flex-start" />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>

          <Flex display={{ base: "none", md: "flex" }} ml={10} align="center">
            <Box>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={"#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={"white"}
                    _hover={{
                      textDecoration: "none",
                    }}
                    fontFamily="PixelSplitter"
                  >
                    {language}
                  </Link>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"black"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    <DesktopSubNav label={"ENG"} setLanguage={setLanguage} />
                    <DesktopSubNav label={"GEO"} setLanguage={setLanguage} />
                  </Stack>
                </PopoverContent>
              </Popover>
            </Box>

            <Button bg="#AD00FF" _hover={{ bg: "#AD00FF" }}>
              Next Event
            </Button>
          </Flex>
        </Flex>

        <Flex
          flex={{ base: "end", md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon color="#dd19fd" w={10} h={10} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            colorScheme="#dd19fd"
          />
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        in={isOpen}
        animateOpacity
        placement="right"
      >
        <MobileNav />
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                background={
                  " linear-gradient(to right, #816FA0 2px, transparent 2px) 0 0,linear-gradient(to right, #816FA0 2px, transparent 2px) 0 100%,linear-gradient(to left, #816FA0 2px, transparent 2px) 100% 0,linear-gradient(to left, #816FA0 2px, transparent 2px) 100% 100%,linear-gradient(to bottom, #816FA0 2px, transparent 2px) 0 0,linear-gradient(to bottom, #816FA0 2px, transparent 2px) 100% 0,linear-gradient(to top, #816FA0 2px, transparent 2px) 0 100%,linear-gradient(to top, #816FA0 2px, transparent 2px) 100% 100%"
                }
                backgroundSize={"20px 20px"}
                backgroundRepeat="no-repeat"
                d="flex"
                alignItems={"center"}
                p={2}
                href={navItem.href ? navItem.href : "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={"white"}
                _hover={{
                  textDecoration: "none",
                }}
                fontFamily="PixelSplitter"
                my="50%"
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, setLanguage }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      onClick={() => setLanguage(label)}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
            fontFamily="PixelSplitter"
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <>
      <DrawerOverlay />
      <DrawerContent bg="#151060" color="white" zIndex="99999">
        <DrawerCloseButton color="#dd19fd" bg="red" mr="1" my="2" opacity={0} />
        <CloseIcon
          color="#dd19fd"
          w={7}
          h={7}
          ml="85%"
          my="5"
          cursor="pointer"
        />

        <DrawerBody>
          <Stack p={4} display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
              <MobileNavItem
                key={navItem.label}
                label={navItem.label}
                children={navItem.children}
                href={navItem.href}
              />
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [language, setLanguage] = useState("ENG");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} fontFamily="PixelSplitter">
          {label === "EN" ? language : label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                onClick={() => setLanguage(child.label)}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "ABOUT US",
    href: "#ABOUT",
  },
  {
    label: "EVENTS",
    href: "#",
  },
  {
    label: "SPEAKERS",
    href: "#SPEAKERS",
  },
  {
    label: "SPONSORS",
    href: "#Sponsors",
  },
  {
    label: "GALLERY",
    href: "#",
  },
];
