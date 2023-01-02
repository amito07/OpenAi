import { Inter } from "@next/font/google";
import { useTheme, Button } from "@nextui-org/react";
import Head from "next/head";
import Nav from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Nav />
    </>
  );
}
