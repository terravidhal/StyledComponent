import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import styled from "styled-components/native";
import { View, ScrollView, Image } from "react-native";

// Définir les thèmes clair et sombre
const lightTheme = {
  colors: {
    background: "#ffffff",
    buttonBackground: "#000000",
    buttonText: "#ffffff",
    text: "#000000",
  },
};

const darkTheme = {
  colors: {
    background: "#282828",
    buttonBackground: "#FF6347",
    buttonText: "#282828",
    text: "#FFD700",
  },
};

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            {" "}
            {/* Ajouter marginTop pour éviter que le premier titre soit coupé */}
            <StyledText>Guide de soins pour animaux</StyledText>
          </View>
          {/* Définir la section des soins pour animaux */}
          <View testID="catCareTips">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: "100%", height: 400 }}
            />
            <ContentSection>
              <SectionTitle>Conseils de soins pour les chats</SectionTitle>
              <ContentText>
                - Hygiène de la litière : Gardez la litière propre en la
                nettoyant quotidiennement et en changeant la litière
                fréquemment.{"\n"}- Griffoirs : Fournissez des griffoirs pour
                éviter d'endommager les meubles.{"\n"}- Toilettage : Brossez
                régulièrement votre chat pour réduire la mue et prévenir les
                boules de poils.{"\n"}- Espaces sûrs : Offrez aux chats des
                endroits confortables et tranquilles pour se détendre.{"\n"}-
                Temps de jeu : Utilisez des jouets interactifs pour les garder
                mentalement stimulés.
              </ContentText>
            </ContentSection>
          </View>
          <View testID="dogCareTips">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: "100%", height: 400 }}
            />
            <ContentSection>
              <SectionTitle>Conseils de soins pour les chiens</SectionTitle>
              <ContentText>
                - Exercice quotidien : Promenez votre chien chaque jour et
                engagez-vous dans des activités comme le rapport.{"\n"}- Soins
                dentaires : Brossez les dents de votre chien et offrez des
                friandises dentaires.{"\n"}- Dressage à l'obéissance : Commencez
                à enseigner des commandes comme « assis » et « reste » tôt.
                {"\n"}- Routine de toilettage : Le bain, le brossage et la coupe
                des griffes sont essentiels.{"\n"}- Socialisation : Présentez
                les chiens à différents environnements et personnes.
              </ContentText>
            </ContentSection>
          </View>

          <View testID="rabbitCareTips">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: "100%", height: 400 }}
            />
            <ContentSection>
              <SectionTitle>Conseils de soins pour les lapins</SectionTitle>
              <ContentText>
                - Régime : Fournissez du foin de haute qualité, des légumes
                frais et des granulés.{"\n"}- Exercice : Laissez les lapins
                sortir de leur cage pour un temps de jeu supervisé.{"\n"}-
                Logement : Gardez leur cage propre avec une literie douce et
                absorbante.{"\n"}- Toilettage : Brossez régulièrement pour
                prévenir les boules de poils.{"\n"}- Interaction sociale :
                Passez du temps à jouer et à interagir avec votre lapin.
              </ContentText>
            </ContentSection>
          </View>

          <View testID="fishCareTips">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1643563459751-3f3584476de9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: "100%", height: 400 }}
            />
            <ContentSection>
              <SectionTitle>Conseils de soins pour les poissons</SectionTitle>
              <ContentText>
                - Entretien de l'aquarium : Nettoyez régulièrement l'aquarium et
                maintenez une filtration adéquate.{"\n"}- Alimentation
                appropriée : Nourrissez de petites quantités de nourriture une
                ou deux fois par jour.{"\n"}- Taille de l'aquarium :
                Assurez-vous que votre aquarium est assez grand pour vos
                poissons.{"\n"}- Contrôle de la température : Utilisez un
                chauffage ou un thermomètre pour maintenir la bonne température
                de l'eau.{"\n"}- Décor : Ajoutez des cachettes et des
                décorations pour enrichir leur environnement.
              </ContentText>
            </ContentSection>
          </View>

          <View testID="birdCareTips">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1681213641575-9d26b366fe21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: "100%", height: 400 }}
            />
            <ContentSection>
              <SectionTitle>Conseils de soins pour les oiseaux</SectionTitle>
              <ContentText>
                - Propreté de la cage : Nettoyez le fond de la cage et les
                gamelles tous les jours.{"\n"}- Nutrition appropriée : Offrez
                des granulés, des fruits, des légumes et des graines avec
                modération.{"\n"}- Interaction sociale : Passez du temps à
                parler et à jouer avec votre oiseau.{"\n"}- Exercice et vol :
                Accordez du temps à l'extérieur de la cage pour voler en toute
                sécurité.{"\n"}- Stimulation mentale : Fournissez des jouets et
                des puzzles pour les garder engagés.
              </ContentText>
            </ContentSection>
          </View>
        </ScrollView>
        <StyledButton onPress={changeTheme}>
          <ButtonText>{isDarkTheme ? "Mode clair" : "Mode sombre"}</ButtonText>
        </StyledButton>
      </Container>
    </ThemeProvider>
  );
};

// Composants stylisés
const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  margin-bottom: 20px;
  font-style: italic;
  font-weight: bold;
`;
const ContentSection = styled.View`
  margin-bottom: 20px;
  padding: 10px;
`;
const SectionTitle = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
`;
const ContentText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;
const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 23px;
  font-weight: bold;
`;
export default ToggleTheme;
