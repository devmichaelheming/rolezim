import React, { FC, ReactElement, useEffect, useState } from "react";
import { Alert, Image, View } from "react-native";
import useEventStore from "~/stores/useEventStore";
import S from "./styles";
import { ItemProps, LoteProps } from "~/Models";
import Divider from "~/components/Divider";
import Details from "./Widgets/Details";
import Description from "./Widgets/Description";
import Timer from "./Widgets/Timer";
import Lotes from "./Widgets/Lotes";
import { formatandoMoeda } from "../../../utils/funcoes";

const EventDetail: FC = (): ReactElement => {
  const { event } = useEventStore();
  const [eventDetails, setEventDetails] = useState<ItemProps>({} as ItemProps);
  const [listLotes, setListLotes] = useState<Array<LoteProps>>([]);
  const [quantity, setQuantity] = useState<Record<string, number>>({}); // Novo estado
  const [valorTotal, setValorTotal] = useState(0);

  const updateLoteCount = (idEvent: string, title: string, count: number) => {
    setQuantity((prevQuantity) => {
      const updatedQuantity = { ...prevQuantity };

      // Adicione ou atualize a quantidade do lote com base no título
      if (updatedQuantity[title]) {
        updatedQuantity[title] += count;
      } else {
        updatedQuantity[title] = count;
      }

      return updatedQuantity;
    });
  };

  useEffect(() => {
    if (event) {
      console.log("event", event);

      setEventDetails(event);

      if (event.lote) {
        setListLotes(event.lote);
      }
    }
  }, [event]);

  useEffect(() => {
    if (event && quantity) {
      const calcularValorTotal = () => {
        let total = 0;

        if (event.lote && Array.isArray(event.lote)) {
          event.lote.forEach((lote) => {
            const { title, value } = lote;
            const qtd = quantity[title] || 0;
            total += qtd * value;
          });
        }

        return total;
      };

      const novoValorTotal = calcularValorTotal();
      setValorTotal(novoValorTotal);
    }
  }, [event, quantity]);

  return (
    <S.Container>
      <View>
        <Image
          source={eventDetails.img}
          style={{ width: "100%", height: 250 }}
          resizeMode="cover"
        />
      </View>

      <S.InfoEvent>
        <S.TitleEvent>{eventDetails.title}</S.TitleEvent>

        <Details data={eventDetails} />

        <Divider />

        <Description description={eventDetails.description} />

        {eventDetails.date && <Timer data={eventDetails} />}

        {listLotes.length > 0 && (
          <>
            <S.ListLotes>
              {listLotes.map((item) => {
                return <Lotes key={item.id} updateLoteCount={updateLoteCount} {...item} />;
              })}
            </S.ListLotes>

            <S.SectionTotal>
              <S.TitleTotal>Total</S.TitleTotal>
              <S.ValueTotal>{formatandoMoeda(valorTotal)}</S.ValueTotal>
            </S.SectionTotal>

            <S.SectionBuy>
              <S.ButtonBuy onPress={() => Alert.alert("Compra efetuada com sucesso!")}>
                <S.TextBuy>Finalizar compra</S.TextBuy>
              </S.ButtonBuy>
            </S.SectionBuy>
          </>
        )}
      </S.InfoEvent>
    </S.Container>
  );
};

export default EventDetail;
