import { AspectRatio } from "@chakra-ui/react";

export function Map() {
  return (
    <AspectRatio ratio={16 / 9} maxW={"50%"}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.1224953565115!2d-43.376591534776686!3d-21.775519639391206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989ba191de0d53%3A0xf49062b61d523855!2sCode%20Empresa%20Jr.!5e0!3m2!1spt-BR!2sbr!4v1677695161993!5m2!1spt-BR!2sbr"/>
    </AspectRatio>
  );
}
