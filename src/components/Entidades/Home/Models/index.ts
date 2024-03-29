import { Dispatch, SetStateAction } from "react";
import { ItemProps } from "~/Models";

export interface ICategory {
  id: string;
  title: string;
  icon: HTMLImageElement;
  value: string;
}

export interface IRecents {
  id: string;
  title: string;
  date?: string;
  location: string;
  img: HTMLImageElement;
}

export interface IRenderItem {
  index: number;
  item: ItemProps;
  section: {
    data: ItemProps[];
  };
}

export interface IRenderSection {
  section: {
    data: ItemProps[];
    title: string;
  };
}
