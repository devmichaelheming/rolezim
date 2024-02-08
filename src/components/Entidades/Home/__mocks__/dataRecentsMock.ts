import osCretinos from "~/assets/events/osCretinos.jpg";
import piemonte from "~/assets/events/piemonte.jpg";

import { ItemProps } from "~/Models";

export const dataRecentsMock: Array<ItemProps> = [
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
];
