import PartyIcon from "~/assets/category/party.png";
import BeerIcon from "~/assets/category/beer.png";
import PontosIcon from "~/assets/category/pontos.png";
import TabacariaIcon from "~/assets/category/tabacaria.png";
import GastrobarIcon from "~/assets/category/gastrobar.png";
import standUpComedyIcon from "~/assets/category/standUpComedy.png";
import { ICategory } from "../Models";

export const dataCategoryMock: Array<ICategory> = [
  {
    id: "1",
    title: "Festas",
    value: "festa",
    icon: PartyIcon,
  },
  {
    id: "2",
    title: "Bares",
    value: "bar",
    icon: BeerIcon,
  },
  {
    id: "3",
    title: "Tabacarias",
    value: "tabacaria",
    icon: TabacariaIcon,
  },
  {
    id: "4",
    title: "Gastrobar",
    value: "gastrobar",
    icon: GastrobarIcon,
  },
  {
    id: "5",
    title: "Stand Up",
    value: "standUpComedy",
    icon: standUpComedyIcon,
  },
];
