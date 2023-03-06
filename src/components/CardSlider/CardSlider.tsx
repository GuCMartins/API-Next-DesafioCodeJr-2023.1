import {Slider,Slide, SliderProps} from '../Slider'
import { CardType } from "../CardCarousel/types";
import { Card } from '../CardCarousel';
import { Center } from '@chakra-ui/react';

const cards = [
    {
        image:{
            url: "/img/canelaCarrosel.png",
            alt:"Caneleira",
        },
        title: "Caneleira",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        image:{
            url: "ataduraCarrosel.png",
            alt:"Ataduras",
        },
        title: "Ataduras",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        image:{
            url: "sacoCarrosel.png",
            alt:"Saco de Pancada",
        },
        title: "Saco de Pancada",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        image:{
            url: "/img/luvasCarrosel.png",
            alt:"Luvas de Boxe",
        },
        title: "Luvas de Boxe",
        description: "Lorem ipsum dolor sit amet.",
    },
];

export function CardSlider(){
    if(cards.length === 1) return(

        <Center>
            <Card card={cards[0]}/>
        </Center>
    );

    const settings : SliderProps = {
        spaceBetween: 50,
        slidesPerView: cards.length > 2 ? cards.length : 2,
        navigation: cards.length >= 2,
        draggable: cards.length >= 2,
        loop: cards.length >= 2,
    };    
    return(
       <Slider settings={settings}>
              {cards.map(card => (
                <Slide key={card.title}>
                    <Card card={card}/>
                </Slide>
            ))}
       </Slider>
    )
}