import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { CardType } from "./types";

interface CardProps {
    card: CardType;
}

export function Card({card}: CardProps){
    const {image, title, description} = card;
    
    return(
        <Flex maxWidth={"20%"} maxH={"25%"} borderRadius={10} bgColor="white">
            <Image src={image.url} alt={image.alt} objectFit="cover" borderLeftRadius={2}/>
            <VStack p={1} spacing="10px" align="flex-start" maxW={"10%"} minW={"5%"}> 
                <Text>Promocao</Text>
                <Heading size="lg">{title}</Heading>
                <Text overflowY="auto">{description}</Text>
            </VStack>    
        </Flex>
    )
}