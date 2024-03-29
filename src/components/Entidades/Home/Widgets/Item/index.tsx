import React, { FC, ReactElement } from "react";

import S from "./styles";
import { ItemProps } from "~/Models";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useEventStore from "~/stores/useEventStore";
import { convertDate } from "../../../../../utils/funcoes";
import Image from "~/components/Image";
interface Item {
  item: ItemProps;
}

const Item: FC<Item> = ({ item }): ReactElement => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { selectedEvent } = useEventStore();

  const { img, location, title, date } = item;

  const handleRedirectDetails = () => {
    selectedEvent(item);

    navigation.navigate("EventDetail");
  };

  return (
    <S.Container onPress={() => handleRedirectDetails()}>
      <S.SectionIcon>
        <Image source={img} style={{ width: 175, height: 155, borderRadius: 12 }} />
        {/* <Image source={img} style={{ width: 175, height: 155, borderRadius: 12 }} /> */}
      </S.SectionIcon>

      <S.Footer>
        <S.Title>{title}</S.Title>
        {date ? (
          <S.TitleData>{convertDate(date)}</S.TitleData>
        ) : (
          <S.TitleLocation>{location}</S.TitleLocation>
        )}
      </S.Footer>
    </S.Container>
  );
};

export default Item;
