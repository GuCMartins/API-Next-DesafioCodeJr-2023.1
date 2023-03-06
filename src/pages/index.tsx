import { VStack,Flex, Stack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { CardSlider } from "../components/CardSlider/CardSlider";
import { Card } from "../components/CardCarousel";
import { CardProd } from "../components/CardProd";

export default function Home() {
  return (
    <Stack>
      <Navbar />
      {/* <Center> arrumar o carrossel
                <Box maxWidth={"45%"}>
                    <CardSlider/>
                </Box>
            </Center> */}
      <VStack justify={"flex-end"} direction={{ base: "column", lg: "row" }}>
        <Box bg={"black"} width={"45%"} p={5} borderRadius={10} mr={10}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Box>
        <Flex>
            <CardProd name={"Dobok Canelado"} text={"Lorem ipsum dolor sit amet."} price={90.90} image={"/img/dobok_canelado.webp"}
            />
            <CardProd name={"Berimbau Completo"} text={"Lorem ipsum dolor sit amet."} price={90.90} image={"/img/berimbau.webp"}
            />
            <CardProd name={"Wing Chun"} text={"Lorem ipsum dolor sit amet."} price={90.90} image={"/img/mudjong.webp"}
            />
            <CardProd name={"Shinai de Bambu"} text={"Lorem ipsum dolor sit amet."} price={90.90} image={"/img/shinai.jpg"}
            />
        </Flex>
      </VStack>
      <Footer />
    </Stack>
  );
}
