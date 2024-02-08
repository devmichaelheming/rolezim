import React from "react";

import S from "./styles";
import Item from "./Widgets/Item";
import EmptyImg from "~/assets/empty.png";
import useEventStore from "~/stores/useEventStore";
import { Image } from "react-native";

const Favorite = () => {
  const { favoriteEvents } = useEventStore();

  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>FAVORITOS</S.TitleHeader>
      </S.Header>

      <S.ContainerListFavorite>
        {favoriteEvents.length > 0 ? (
          <S.ListFavorite
            data={favoriteEvents}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Item item={item} />}
          />
        ) : (
          <S.ListEmpty>
            <Image source={EmptyImg} style={{ width: 84, height: 84 }} />

            <S.TitleEmpty>Nenhum evento favoritado ainda</S.TitleEmpty>
            <S.SubTitleEmpty>
              Encontre eventos e toque no símbolo de coração para adicionar aos seus favoritos
            </S.SubTitleEmpty>
          </S.ListEmpty>
        )}
      </S.ContainerListFavorite>
    </S.Container>
  );
};

export default Favorite;
