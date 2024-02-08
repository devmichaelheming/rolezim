import React, { FC, ReactElement } from "react";
import S from "./styles";
import { ItemProps } from "~/Models";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useEventStore from "~/stores/useEventStore";
import Image from "~/components/Image";

interface ItemComponent {
  item: ItemProps;
}

const Item: FC<ItemComponent> = ({ item }): ReactElement => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { selectedEvent } = useEventStore();

  const { title, img, location, date } = item;

  const handleRedirectDetails = () => {
    selectedEvent(item);

    navigation.navigate("EventDetail");
  };

  return (
    <S.Container onPress={() => handleRedirectDetails()}>
      <S.SectionIcon>
        <Image source={img} style={{ width: 100, height: 80, borderRadius: 8 }} />
      </S.SectionIcon>

      <S.Body>
        <S.Details>
          <S.Title>{title}</S.Title>

          {date && <S.TitleData>{date}</S.TitleData>}

          {location && <S.TitleLocation>{location}</S.TitleLocation>}
        </S.Details>
      </S.Body>
    </S.Container>
  );
};

export default Item;
