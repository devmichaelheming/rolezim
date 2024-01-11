import { ItemProps } from "~/Models";
import osCretinos from "~/assets/events/osCretinos.jpg";
import piemonte from "~/assets/events/piemonte.jpg";
import raveOn from "~/assets/events/raveon.jpg";
import royalPub from "~/assets/events/royal.jpg";

export const dataHighlightsMock: Array<ItemProps> = [
  {
    id: "1",
    title: "Os Cretinos",
    data: "Sábado, 30 de dezembro",
    location: "Sorriso - MT",
    img: osCretinos,
  },
  {
    id: "2",
    title: "Piemonte",
    location: "Pátio Piemonte | Av. Bruno Martini, nº 143",
    img: piemonte,
  },
  {
    id: "3",
    title: "Royal Pub",
    location: "Av. dos Ingás, 2248",
    img: royalPub,
  },
  {
    id: "4",
    title: "RaveOn",
    data: "Domingo, 31 de dezembro",
    location: "Chácara Simpatia",
    img: raveOn,
  },
];
