import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CartaoPlanejamentoReceitaMensal from "../components/CartaoReceitasMensais";

const ReceitasMensais = () => {
  const navigation = useNavigation();
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const pesquisar = () => {
    console.log("Pesquisando por:", termoPesquisa);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.retanguloTitulo}>
          <View style={[styles.textoTitulo]}>
            <Text style={styles.titulo}>Planejando</Text>
            <Text style={styles.titulo}>Receitas</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.containerPesquisa}>
          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquisar..."
            value={termoPesquisa}
            onChangeText={setTermoPesquisa}
          />
          <Pressable onPress={pesquisar} style={styles.iconePesquisa}>
            <FontAwesome name="search" size={24} color={Color.colorGray_200} />
          </Pressable>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            width: "100%",
            top: 30,
            paddingHorizontal: 20,
            marginBottom: 150,
          }}
        >
          <CartaoPlanejamentoReceitaMensal
            mes="Maio"
            rendaMensal={2500.0}
            rendaExtra={500.0}
            eventuais="Bônus de trabalho"
            valorRendaEventual={150.0}
          />
          <CartaoPlanejamentoReceitaMensal
            mes="Junho"
            rendaMensal={2700.0}
            rendaExtra={300.0}
            eventuais="Comissão de vendas"
            valorRendaEventual={150.0}
          />
          <CartaoPlanejamentoReceitaMensal
            mes="Julho"
            rendaMensal={2800.0}
            rendaExtra={600.0}
            eventuais="Freelance"
            valorRendaEventual={150.0}
          />
          {/* Adicione mais exemplos de uso aqui */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  retanguloTitulo: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 250,
    height: 88,
    top: 80,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
    alignSelf: "center",
  },
  textoTitulo: {
    top: 7,
    alignSelf: "center",
  },
  titulo: {
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 33,
    fontSize: 24,
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backgroundImage: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  containerPesquisa: {
    paddingHorizontal: 20,
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  inputPesquisa: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  iconePesquisa: {
    marginLeft: 10,
  },
});

export default ReceitasMensais;
