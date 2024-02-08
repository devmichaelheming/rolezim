import { ItemProps } from "~/Models";
import osCretinos from "~/assets/events/osCretinos.jpg";
import piemonte from "~/assets/events/piemonte.jpg";
import royalPub from "~/assets/events/royal.jpg";
import pilantras from "~/assets/events/pilantras.jpg";
import dNox from "~/assets/events/dnox.jpg";
import choppColina from "~/assets/events/choppColina.jpg";
import ditado from "~/assets/events/ditado.jpg";
import parrilla from "~/assets/events/parrilla.jpg";
import terraco from "~/assets/events/terraco.jpg";
import paiDaMentira from "~/assets/events/paiDaMentira.jpg";
import luizaMartins from "~/assets/events/luizaMartins.png";

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
        title: "Pista",
        value: 50,
      },
      {
        id: "2",
        title: "Camarote",
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
    category: "tabacaria",
  },
  {
    id: "3",
    title: "Royal Pub",
    location: "Av. dos Ingás, 2248",
    img: royalPub,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente esse adipisci, exercitationem porro error dolor? Voluptate eligendi enim, laudantium in, quis nobis placeat, a maiores iusto consequatur sed iure laborum.",
    category: "tabacaria",
  },
  {
    id: "4",
    title: "Pilantras",
    date: "2024-02-12T21:00:00",
    location: "Acrinorte, Sinop - MT",
    img: pilantras,
    description:
      "O Carnaval Pilantras está de volta às suas raízes na ACRINORTE! Vamos reviver a essência das primeiras edições nesse local especial ao ar livre!\n\nAnota aí: 09, 10 e 12 de Fevereiro. Serão 3 Noites, 3 Afters + 2 Esquentas com Open Bar todos os dias!",
    category: "festa",
    lote: [
      {
        id: "1",
        title: "VALE ABADÁ",
        value: 180,
      },
    ],
  },
  {
    id: "5",
    title: "D-NOX",
    date: "2024-03-02T23:00:00",
    location: "Resenha ChoppBar, Sinop - MT",
    img: dNox,
    description: "D-NOX - Sábado, 2 de março - Resenha ChoppBar, Sinop - MT",
    category: "festa",
    lote: [
      {
        id: "1",
        title: "Pista",
        value: 50,
      },
      {
        id: "2",
        title: "Camarote",
        value: 70,
      },
      {
        id: "3",
        title: "Backstage",
        value: 120,
      },
    ],
  },
  {
    id: "6",
    title: "Chopp Colina",
    location: "Av André Maggi, 4147 - Jardim Europa, Sinop - MT",
    img: choppColina,
    description:
      "+8mil chopps gelados servidos por semana\n\nRodízio de Massas, Caldos e Petiscos!\n\nO Melhor Chopp do Nortão!",
    category: "bar",
  },
  {
    id: "7",
    title: "Ditado Popular",
    location: "Av. Gov. Júlio Campos, 946 - St. Comercial, Sinop - MT",
    img: ditado,
    description:
      "Triple Chopp e Double Drink - Domingo à Sexta até as 20h\n\nRodízio de Petiscos - Domingo, Segunda e Terça\n\nFeijoDitado aos Sábados 11h",
    category: "bar",
  },
  {
    id: "8",
    title: "Parrilla Gastrobar",
    location: "Av. Gov. Julio Campos 1381, Sinop/MT",
    img: parrilla,
    description:
      "Chopp gelado!\n\nCarne defumada!\n\nHappy hour!🍻\n\nMúsica ao vivo!\n\nVem conhecer nosso cardápio!",
    category: "gastrobar",
  },
  {
    id: "9",
    title: "Terraço Gastrobar",
    location: "Rua das Hortênsias 1357 Centro",
    img: terraco,
    description: "Rodízio de petiscos\n\nBarato do dia\n\nCerveja gelada🍻",
    category: "gastrobar",
  },
  {
    id: "10",
    title: "PAI DA MENTIRA",
    date: "2024-05-10T15:00:00",
    location: "Assatemec, ITU - SP",
    img: paiDaMentira,
    description:
      "TIAGO SANTINELI com PAI DA MENTIRA 2.0 em ITU\n\nATENÇÃO GALERA DE ITU - SP\n\n A equipe QUE COMÉDIA STAND UP tem a grande honra de trazer a TIAGO SANTINELI com seu show solo PAI DA MENTIRA 2.0.\nSerá no Teatro TEMEC, dia 23 de FEVEREIRO às 20h.\nClassificação indicativa 14 anos.\nBora. sim ou claro?!",
    category: "standUpComedy",
    lote: [
      {
        id: "1",
        title: "1º Lote - Inteira",
        value: 70,
      },
      {
        id: "2",
        title: "1º Lote - Meia Entrada",
        value: 35,
      },
    ],
  },
  {
    id: "11",
    title: "Luiza Martins",
    date: "2024-03-09T20:00:00",
    location: "Ditado Popular, Primavera do Leste - MT",
    img: luizaMartins,
    description: "Luiza Martins, sábado, 09 de março, Ditado Popular, Primavera do Leste - MT",
    category: "festa",
    lote: [
      {
        id: "1",
        title: "Pista",
        value: 70,
      },
    ],
  },
];
