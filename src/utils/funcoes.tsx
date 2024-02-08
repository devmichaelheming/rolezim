import moment from "moment";

export function convertDate(date: string) {
  // Configuração inicial
  moment.locale("pt-br"); // Configuração do locale para português brasileiro
  const formatoDesejado = "dddd, DD [de] MMMM";

  // Criação de uma instância moment a partir da data fornecida
  const dataConvertida = moment(date);

  // Retorna a data formatada conforme o formato desejado
  return dataConvertida.format(formatoDesejado);
}

export function formatandoMoeda(valor: number | string) {
  const numero: number = typeof valor === "string" ? parseFloat(valor) : valor;

  const valorFormatado: string = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numero);

  return valorFormatado;
}
