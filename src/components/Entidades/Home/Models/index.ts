import { ItemProps } from "~/Models";

export interface ICategory {
  id: string;
  title: string;
  icon: HTMLImageElement;
}

export interface IRecents {
  id: string;
  title: string;
  data?: string;
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
