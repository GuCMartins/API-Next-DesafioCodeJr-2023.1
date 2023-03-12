import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { CardType } from "./types";

interface CardProps {
    image: string;
    alt:string;
    title: string;
    description:string;
}

export function Card({image,alt,title,description}: CardProps){
    
    return(
        <Flex maxWidth={"80%"} maxH={"80%"} borderRadius={10} bg="black">
            <Image src={image} alt={alt} objectFit="cover" borderLeftRadius={10} maxW={280} maxH={250}/>
            <VStack p={1} spacing="10px" align="flex-start" borderRadius={10} bg={"#8A1B1B"}> 
                <Text>Promoção</Text>
                <Heading size="lg">{title}</Heading>
                <Text overflowY="auto">{description}</Text>
            </VStack>    
        </Flex>
    )
}