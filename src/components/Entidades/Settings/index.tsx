import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import S from "./styles";
import useAuthStore from "~/stores/useAuthStore";
import Button from "~/components/Button";
import facebookIMG from "~/assets/socialMedia/facebook.png";
import instagramIMG from "~/assets/socialMedia/instagram.png";
import linkedInIMG from "~/assets/socialMedia/linkedin.png";

import addressIMG from "~/assets/address.png";
import creditCardIMG from "~/assets/creditCard.png";
import heartIMG from "~/assets/heart.png";
import ticketIMG from "~/assets/ticket.png";
import Divider from "~/components/Divider";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Image from "~/components/Image";

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { signOut, user } = useAuthStore();

  const handleOpenSocialMedia = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <S.Container>
      <S.Header>
        <S.IconUser>
          <AntDesign name="user" size={24} color="black" />
        </S.IconUser>

        <S.TextEmail>{user?.email}</S.TextEmail>
      </S.Header>

      <S.Body>
        <Button type="secondary" onPress={() => console.log("")}>
          Editar dados do perfil
        </Button>

        <Divider />

        <S.SectionList>
          <S.ItemList onPress={() => navigation.navigate("Favorites")}>
            <Image source={heartIMG} style={{ width: 20, height: 20 }} resizeMode="cover" />
            <S.TextSection>Meus eventos favoritos</S.TextSection>
          </S.ItemList>

          <S.ItemList>
            <Image source={ticketIMG} style={{ width: 20, height: 20 }} resizeMode="cover" />
            <S.TextSection>Meus ingressos</S.TextSection>
          </S.ItemList>

          <S.ItemList>
            <Image source={creditCardIMG} style={{ width: 20, height: 20 }} resizeMode="cover" />
            <S.TextSection>Meus cartões</S.TextSection>
          </S.ItemList>

          <S.ItemList>
            <Image source={addressIMG} style={{ width: 20, height: 20 }} resizeMode="cover" />
            <S.TextSection>Meu endereço</S.TextSection>
          </S.ItemList>
        </S.SectionList>
      </S.Body>

      <Divider />

      <S.Footer>
        <S.SectionSocialMedia>
          <S.TextSocialMedia>Siga nossas redes sociais</S.TextSocialMedia>

          <S.GroupSocialMedia>
            <TouchableOpacity
              onPress={() => handleOpenSocialMedia("https://www.facebook.com/michaelheming25/")}
            >
              <Image source={facebookIMG} style={{ width: 64, height: 64 }} resizeMode="cover" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleOpenSocialMedia("https://www.instagram.com/michaelhemiing/")}
            >
              <Image source={instagramIMG} style={{ width: 64, height: 64 }} resizeMode="cover" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleOpenSocialMedia("https://www.linkedin.com/in/devmichaelheming/")}
            >
              <Image source={linkedInIMG} style={{ width: 64, height: 64 }} resizeMode="cover" />
            </TouchableOpacity>
          </S.GroupSocialMedia>
        </S.SectionSocialMedia>

        <Button type="secondary" onPress={() => signOut()} style={{ marginTop: 10 }}>
          Sair do app
        </Button>

        <S.VersionApp>Versão 1.0.1</S.VersionApp>
      </S.Footer>
    </S.Container>
  );
};

export default Home;
