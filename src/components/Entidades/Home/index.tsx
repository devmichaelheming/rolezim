import React, { useEffect, useState } from "react";
import { SectionList, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import Category from "./Widgets/Category";
import Item from "./Widgets/Item";
import { IRenderItem, IRenderSection } from "./Models";

import { dataCategoryMock, dataHighlightsMock, dataRecentsMock } from "./__mocks__";

import S from "./styles";
import Search from "./Widgets/Search";
import { useFocusEffect } from "@react-navigation/native";
import { ItemProps } from "~/Models";

interface IListSections {
  title: string;
  data: Array<ItemProps>;
}

// const dataSectionList: IListSections[] = [
//   {
//     title: "Destaques da semana",
//     data: dataHighlightsMock,
//   },
//   {
//     title: "Eventos mais vistos recentemente 👀",
//     data: dataRecentsMock,
//   },
// ];

const Home = () => {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [listSections, setListSections] = useState<Array<IListSections>>([]);

  const renderSection = ({ section }: IRenderSection) => (
    <S.TitleSection>{section.title}</S.TitleSection>
  );

  const renderItem = ({ section, item, index }: IRenderItem) => {
    const shouldRenderItem = index % 2 === 0;

    if (!shouldRenderItem) {
      return null;
    }

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          columnGap: 2,
        }}
      >
        <Item item={item} />
        {index < section.data.length - 1 && <Item item={section.data[index + 1]} />}
      </View>
    );
  };

  useEffect(() => {
    if (inputSearch.length > 0 || categorySelected.length > 0) {
      setVisibleSearch(true);
    } else {
      setVisibleSearch(false);
    }
  }, [inputSearch, categorySelected]);

  useFocusEffect(
    React.useCallback(() => {
      setInputSearch("");
      setCategorySelected("");
    }, [])
  );

  useEffect(() => {
    if (dataHighlightsMock.length > 0) {
      const selectedCategories = ["festa", "bar", "tabacaria", "gastrobar", "standUpComedy"];

      const categoryNames: Record<string, string> = {
        festa: "Festas e shows",
        bar: "Bares",
        tabacaria: "Tabacarias",
        gastrobar: "Gastrobares",
        standUpComedy: "Stand-up Comedy",
      };

      const groupedData: IListSections[] = selectedCategories.map((category) => {
        const categoryName = categoryNames[category] || category;
        const items = dataHighlightsMock.filter((item) => item.category === category);
        return { title: categoryName, data: items };
      });

      setListSections(groupedData);
    }
  }, [dataHighlightsMock]);

  return (
    <S.Container visibleSearch={visibleSearch}>
      <S.Header>
        <S.SectionSearch>
          <S.ButtonSearch>
            <Feather name="search" size={24} color="#e9e9e9" />
          </S.ButtonSearch>
          <S.InputSearch
            placeholder="Pesquisar eventos..."
            value={inputSearch}
            onChangeText={(text) => setInputSearch(text)}
          />
        </S.SectionSearch>

        <S.SectionCategory>
          {dataCategoryMock.map((item) => (
            <Category
              {...item}
              key={item.id}
              setCategorySelected={setCategorySelected}
              categorySelected={categorySelected}
            />
          ))}
        </S.SectionCategory>
      </S.Header>

      {visibleSearch ? (
        <Search value={inputSearch} categorySelected={categorySelected} />
      ) : (
        <S.Body>
          <SectionList
            sections={listSections}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            renderSectionHeader={renderSection}
            stickySectionHeadersEnabled={false}
          />
        </S.Body>
      )}
    </S.Container>
  );
};

export default Home;
