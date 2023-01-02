import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  useTheme,
} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";

export default function Nav() {
  const { theme } = useTheme();
  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          hideIn="xs"
          variant="highlight-solid-rounded"
          activeColor={theme.colors.primary.value}
        >
          <Navbar.Link isActive href="#">Home</Navbar.Link>
          <Navbar.Link href="#">Learn More</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
