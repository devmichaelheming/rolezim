import { ItemProps } from "~/Models";
import osCretinos from "~/assets/events/osCretinos.jpg";
import piemonte from "~/assets/events/piemonte.jpg";
import raveOn from "~/assets/events/raveon.jpg";
import royalPub from "~/assets/events/royal.jpg";

export const dataHighlightsMock: Array<ItemProps> = [
  {
    id: "1",
    title: "Os Cretinos",
    date: "2024-04-10T21:00:00",
    location: "Sorriso - MT",
    img: osCretinos,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente esse adipisci, exercitationem porro error dolor? Voluptate eligendi enim, laudantium in, quis nobis placeat, a maiores iusto consequatur sed iure laborum.",
    category: "festa",
    lote: [
      {
        id: "1",
        title: "pista",
        value: 50,
      },
      {
        id: "2",
        title: "camarote",
        value: 100,
      },
    ],
  },

  {
    id: "2",
    title: "Piemonte",
    location: "Pátio Piemonte | Av. Bruno Martini, nº 143",
    img: piemonte,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente esse adipisci, exercitationem porro error dolor? Voluptate eligendi enim, laudantium in, quis nobis placeat, a maiores iusto consequatur sed iure laborum.",
    category: "role",
  },
  {
    id: "3",
    title: "Royal Pub",
    location: "Av. dos Ingás, 2248",
    img: royalPub,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente esse adipisci, exercitationem porro error dolor? Voluptate eligendi enim, laudantium in, quis nobis placeat, a maiores iusto consequatur sed iure laborum.",
    category: "role",
  },
  {
    id: "4",
    title: "RaveOn",
    date: "2024-09-20T23:00:00",
    location: "Chácara Simpatia",
    img: raveOn,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente esse adipisci, exercitationem porro error dolor? Voluptate eligendi enim, laudantium in, quis nobis placeat, a maiores iusto consequatur sed iure laborum.",
    category: "festa",
    lote: [
      {
        id: "1",
        title: "pista",
        value: 80,
      },
      {
        id: "2",
        title: "camarote",
        value: 140,
      },
    ],
  },
];
