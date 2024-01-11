import PartyIcon from "~/assets/category/party.png";
import BeerIcon from "~/assets/category/beer.png";
import PontosIcon from "~/assets/category/pontos.png";
import TabacariaIcon from "~/assets/category/tabacaria.png";
import GastrobarIcon from "~/assets/category/gastrobar.png";
import { ICategory } from "../Models";

export const dataCategoryMock: Array<ICategory> = [
  {
    id: "1",
    title: "Festas",
    icon: PartyIcon,
  },
  {
    id: "2",
    title: "Bares",
    icon: BeerIcon,
  },
  {
    id: "3",
    title: "Tabacarias",
    icon: TabacariaIcon,
  },
  {
    id: "4",
    title: "Gastrobar",
    icon: GastrobarIcon,
  },
  {
    id: "5",
    title: "Outros",
    icon: PontosIcon,
  },
];
