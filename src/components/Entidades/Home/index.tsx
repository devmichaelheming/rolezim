import React from "react";
import { SectionList, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import Category from "./Widgets/Category";
import Item from "./Widgets/Item";
import { IRenderItem, IRenderSection } from "./Models";

import { dataCategoryMock, dataHighlightsMock, dataRecentsMock } from "./__mocks__";

import S from "./styles";

const dataSectionList = [
  {
    title: "Destaques da semana",
    data: dataHighlightsMock,
  },
  {
    title: "Eventos mais vistos recentemente 👀",
    data: dataRecentsMock,
  },
];

const Home = () => {
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
        }}
      >
        <Item item={item} />
        {index < section.data.length - 1 && <Item item={section.data[index + 1]} />}
      </View>
    );
  };

  return (
    <S.Container>
      <S.Header>
        <S.SectionSearch>
          <S.ButtonSearch>
            <Feather name="search" size={24} color="#e9e9e9" />
          </S.ButtonSearch>
          <S.InputSearch placeholder="Pesquisar eventos..." />
        </S.SectionSearch>

        <S.SectionCategory>
          {dataCategoryMock.map((item) => (
            <Category {...item} key={item.id} />
          ))}
        </S.SectionCategory>
      </S.Header>

      <S.Body>
        <SectionList
          sections={dataSectionList}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          renderSectionHeader={renderSection}
          stickySectionHeadersEnabled={false}
        />
      </S.Body>
    </S.Container>
  );
};

export default Home;
