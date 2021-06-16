import React from "react";
import { Box, Flex, PageHeader, Sticky } from "gestalt";
import "gestalt/dist/gestalt.css";
import "./Header.css";
import Navigation from "./Navigation";

const Header = () => (
  <Sticky top={0}>
    <Flex direction="column" flex="grow">
      <PageHeader
        title="Logo. For Minutes"
        primaryAction={<Navigation />}
      ></PageHeader>
      <Box
        display="flex"
        wrap
        width="80%"
        direction="column"
        marginStart={5}
      ></Box>
    </Flex>
  </Sticky>
);

export default Header;
