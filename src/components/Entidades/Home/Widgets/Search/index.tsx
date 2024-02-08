import React, { FC, ReactElement, useEffect, useState } from "react";
import { ItemProps } from "~/Models";

import S from "./styles";

import { dataHighlightsMock } from "../../__mocks__";
import Item from "./Widgets/Item";

interface SearchProps {
  value: string;
  categorySelected: string;
}

const Search: FC<SearchProps> = ({ value, categorySelected }): ReactElement => {
  const [listEventsFiltered, setListEventsFiltered] = useState<Array<ItemProps>>([]);

  useEffect(() => {
    // Filtrar os eventos com base na prioridade do categorySelected e value
    const filteredEvents = dataHighlightsMock.filter((event) => {
      const matchesCategory = categorySelected && event.category === categorySelected;
      const matchesSearch = event.title.toLowerCase().includes(value.toLowerCase());

      return matchesCategory || (value && matchesSearch);
    });

    // Definir a lista filtrada no estado
    setListEventsFiltered(filteredEvents);
  }, [value, categorySelected]);

  return (
    <S.Container>
      <S.ContainerListFavorite>
        {listEventsFiltered.length === 0 ? (
          <S.TextNotFound>Nenhum evento foi encontrado!</S.TextNotFound>
        ) : (
          <S.ListFavorite
            data={listEventsFiltered}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Item item={item} />}
          />
        )}
      </S.ContainerListFavorite>
    </S.Container>
  );
};

export default Search;
