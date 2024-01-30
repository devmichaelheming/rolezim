export interface LoteProps {
  id: string;
  title: string;
  value: number;
}

export interface ItemProps {
  id: string;
  title: string;
  date?: string;
  location: string;
  img: HTMLImageElement;
  description: string;
  category: string;
  lote?: Array<LoteProps>;
}
