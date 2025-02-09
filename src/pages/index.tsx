import {
  VStack,
  Flex,
  Stack,
  Box,
  Text,
  Center,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/CardCarousel";
import { CardProd } from "../components/CardProd";
import { Slider } from "../components/Slider";
import { SwiperSlide, SwiperProps } from "swiper/react";

export default function Home() {
  const settings: SwiperProps = {
    spaceBetween: 0.1,
    slidesPerView: 2,
    navigation: true,
    pagination: { clickable: true },
  };

  return (
    <Stack>
      <Navbar />
      <HStack>
        <Stack ml={"10%"} mr={"5%"} maxWidth={"50 rem"}>
          <NextImage
            src={"/img/Logo.png"}
            alt={"FightOn"}
            width={"1000"}
            height={"1000"}
          />
        </Stack>
        <VStack
          align={"center"}
          direction={{ base: "column", lg: "row" }}
        >
          <HStack maxW="900">
            <Slider settings={settings}>
              <SwiperSlide>
                <Card
                  image={"/img/ataduraCarrosel.png"}
                  alt={"atadura"}
                  title={"atadura"}
                  description={
                    "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  image={"/img/canelaCarrossel.png"}
                  alt={"canela"}
                  title={"Caneleira"}
                  description={
                    "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  image={"/img/luvasCarrosel.png"}
                  alt={"luvas"}
                  title={"Luvas"}
                  description={
                    "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  image={"/img/sacoCarrosel.png"}
                  alt={"saco"}
                  title={"Saco Pancada"}
                  description={
                    "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
                  }
                />
              </SwiperSlide>
            </Slider>
          </HStack>
          <Box bg={"black"} width={"55%"} p={4} borderRadius={10} mr={10}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </Box>
          <Flex>
            <CardProd
              name={"Dobok Canelado"}
              text={"Lorem ipsum dolor sit amet."}
              price={90.9}
              image={"/img/dobok.png"}
            />
            <CardProd
              name={"Berimbau Completo"}
              text={"Lorem ipsum dolor sit amet."}
              price={90.9}
              image={"/img/berimbau.webp"}
            />
            <CardProd
              name={"Wing Chun de madeira"}
              text={"Lorem ipsum dolor sit amet."}
              price={90.9}
              image={"/img/mudjong.webp"}
            />
            <CardProd
              name={"Shinai de Bambu"}
              text={"Lorem ipsum dolor sit amet."}
              price={90.9}
              image={"/img/shinai.jpg"}
            />
          </Flex>
        </VStack>
      </HStack>
      <Footer />
    </Stack>
  );
}
