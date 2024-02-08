import React, { FC, ReactElement } from "react";
import { AntDesign } from "@expo/vector-icons";
import S from "./styles";
import { ItemProps } from "~/Models";
import useEventStore from "~/stores/useEventStore";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { convertDate } from "../../../../../utils/funcoes";
import Image from "~/components/Image";

interface IFavoriteItem {
  item: ItemProps;
}

const Item: FC<IFavoriteItem> = ({ item }): ReactElement => {
  const { removeEventToFavorites, selectedEvent } = useEventStore();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { id, img, location, title, date, lote } = item;

  const handleRedirectDetails = () => {
    selectedEvent(item);

    navigation.navigate("EventDetail");
  };

  return (
    <S.Container>
      <S.SectionIcon>
        <Image source={img} style={{ width: 100, height: 80, borderRadius: 8 }} />
      </S.SectionIcon>

      <S.Body>
        <S.Details onPress={() => handleRedirectDetails()}>
          <S.Title>{title}</S.Title>

          {date && <S.TitleData>{convertDate(date)}</S.TitleData>}

          {location && <S.TitleLocation>{location}</S.TitleLocation>}
        </S.Details>

        <S.RemoveItem onPress={() => removeEventToFavorites(id)}>
          <AntDesign name="close" size={24} color="#000000a4" />
        </S.RemoveItem>
      </S.Body>
    </S.Container>
  );
};

export default Item;
