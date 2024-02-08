import React, { FC, ReactElement, useEffect, useMemo, useState, useCallback } from "react";
import { Alert, View } from "react-native";
import useEventStore from "~/stores/useEventStore";
import S from "./styles";
import { ItemProps, LoteProps } from "~/Models";
import Divider from "~/components/Divider";
import Details from "./Widgets/Details";
import Description from "./Widgets/Description";
import Timer from "./Widgets/Timer";
import Lotes from "./Widgets/Lotes";
import { formatandoMoeda } from "../../../utils/funcoes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import Image from "~/components/Image";

const EventDetail: FC = (): ReactElement => {
  const { event, favoriteEvents, addEventToFavorites, removeEventToFavorites } = useEventStore();
  const [eventDetails, setEventDetails] = useState<ItemProps>({} as ItemProps);
  const [listLotes, setListLotes] = useState<Array<LoteProps>>([]);
  const [quantity, setQuantity] = useState<Record<string, number>>({});
  const [valorTotal, setValorTotal] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const updateLoteCount = useCallback((idEvent: string, title: string, count: number) => {
    setQuantity((prevQuantity) => {
      const updatedQuantity = { ...prevQuantity };
      updatedQuantity[title] = (updatedQuantity[title] || 0) + count;
      return updatedQuantity;
    });
  }, []);

  const handleFavoriteEvents = useCallback(() => {
    setIsFavorited(!isFavorited);
    if (event !== null) {
      if (!isFavorited) {
        addEventToFavorites({ ...event });
      } else {
        removeEventToFavorites(event.id);
      }
    }
  }, [event, isFavorited, addEventToFavorites, removeEventToFavorites]);

  useEffect(() => {
    if (event) {
      setEventDetails(event);
      if (event.lote) {
        setListLotes(event.lote);
      }
    }
  }, [event]);

  useEffect(() => {
    if (event && quantity) {
      let total = 0;
      if (event.lote && Array.isArray(event.lote)) {
        event.lote.forEach((lote) => {
          const { title, value } = lote;
          const qtd = quantity[title] || 0;
          total += qtd * value;
        });
      }
      setValorTotal(total);
    }
  }, [event, quantity]);

  // useFocusEffect(() => {
  //   if (event !== null) {
  //     const checkIsFavorite = favoriteEvents.some((el) => el.id === event.id);
  //     setIsFavorited(checkIsFavorite);
  //   }
  // }, [favoriteEvents, event]);

  useFocusEffect(
    React.useCallback(() => {
      if (event !== null) {
        const checkIsFavorite = favoriteEvents.some((el) => el.id === event.id);
        setIsFavorited(checkIsFavorite);
      }
    }, [favoriteEvents, event])
  );

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
        <S.SectionTitle>
          <S.TitleEvent>{eventDetails.title}</S.TitleEvent>

          <S.SectionFavorite onPress={handleFavoriteEvents}>
            <MaterialCommunityIcons
              name={isFavorited ? "heart-multiple" : "heart-multiple-outline"}
              size={30}
              color={isFavorited ? "#e50303" : "#7c7c7c"}
              style={{ marginTop: 10 }}
            />
          </S.SectionFavorite>
        </S.SectionTitle>

        <Details data={eventDetails} />
        <Divider />
        <Description description={eventDetails.description} />
        {eventDetails.date && <Timer data={eventDetails} />}
        {listLotes.length > 0 && (
          <>
            <S.ListLotes>
              {listLotes.map((item) => (
                <Lotes key={item.id} updateLoteCount={updateLoteCount} {...item} />
              ))}
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
