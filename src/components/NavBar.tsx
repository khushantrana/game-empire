import React from "react";
import { Stack, HStack, VStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
