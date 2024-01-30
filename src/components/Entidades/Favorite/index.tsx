import React from "react";

import S from "./styles";
import useAuthStore from "~/stores/useAuthStore";
import { dataHighlightsMock } from "~/components/Entidades/Home/__mocks__/listHighlights";
import Item from "./Widgets/Item";
import { Image } from "react-native";
import EmptyImg from "~/assets/empty.png";

const Favorite = () => {
  const { signOut } = useAuthStore();

  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>FAVORITOS</S.TitleHeader>
      </S.Header>

      <S.ContainerListFavorite>
        {dataHighlightsMock.length > 0 ? (
          <S.ListFavorite
            data={dataHighlightsMock}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Item {...item} />}
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
