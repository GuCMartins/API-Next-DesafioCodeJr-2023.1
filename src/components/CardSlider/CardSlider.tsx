import {Slider,Slide, SliderProps} from '../Slider'
import { CardType } from "../CardCarousel/types";
import { Card } from '../CardCarousel';
import { Center } from '@chakra-ui/react';

// interface CardSliderProps {
//     cards: CardType[];
// }

const cards = [
    {
        image:{
            url: "",
            alt:"",
        },
        title: "Card 1",
        description: "Description 1",
    },
    {
        image:{
            url: "",
            alt:"",
        },
        title: "Card 1",
        description: "Description 1",
    },
    {
        image:{
            url: "",
            alt:"",
        },
        title: "Card 1",
        description: "Description 1",
    },
    {
        image:{
            url: "",
            alt:"",
        },
        title: "Card 1",
        description: "Description 1",
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