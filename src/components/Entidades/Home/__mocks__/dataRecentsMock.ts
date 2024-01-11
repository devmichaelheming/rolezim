import osCretinos from "~/assets/events/osCretinos.jpg";
import piemonte from "~/assets/events/piemonte.jpg";

import { ItemProps } from "~/Models";

export const dataRecentsMock: Array<ItemProps> = [
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
];
