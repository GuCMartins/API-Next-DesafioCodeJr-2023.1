import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Saco de Pancada Troyan 20kg",
      text: "Firmemente fixado ao chão, o saco de pancada Troyan 20kg é ideal para todos treinos. Com um design moderno e um acabamento de qualidade, é um equipamento de treino indispensável para qualquer atleta.",
      image:
        "produto a ser especificado",
    },
    {
      title: "Bandagem Elastica com Alça para o polegar Venum",
      text: "Proteção para os dedos e polegar, possuindo alta resistência e durabilidade. A bandagem Venum é ideal para treinos de Muay Thai, Boxe, MMA e Kickboxing.",
      image:
        "produto a ser especificado",
    },
    {
      title: "Luva de Boxe e Muai Thai Venum",
      text: "Conforto e durabilidade, possuem um design ergonomico e um acabamento de qualidade, podendo ser utilizadas em quaisquer treinos.",
      image:
        "produto a ser especificado",
    },
    {
      title: "Protetor de Canela e Pé Venum",
      text: "Agilidade e firmeza, possuem um design moderno e um acabamento de qualidade, indispensaveis para todos os momentos de sparring e luta.",
      image:
        "produto a ser especificado",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"21%"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        {/* <BiLeftArrowAlt size="40px" /> */}
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        {/* <BiRightArrowAlt size="40px" /> */}
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index)  => (
            //para cada item do array cards, ele vai retornar um box com as informações do card
          <Box //aqui é o box que ira retornar os valores de cada item a ser exibido no carrosel
            key={index} 
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
