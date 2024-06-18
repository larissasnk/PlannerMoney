import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CartaoObjetivo from "../components/CartaoObjetivo";

const VisualizarObjetivos = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Pesquisando por:", searchTerm);
    // Adicione aqui a lógica de pesquisa real
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.padraoIcone1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.retangulo1}>
          <View style={[styles.texto]}>
            <Text style={[styles.titulo]}>Objetivos</Text>
            <Text style={[styles.titulo]}>Financeiros</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        {/* Campo de pesquisa */}
        <View style={styles.containerPesquisa}>
          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquisar..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Pressable onPress={handleSearch} style={styles.iconePesquisa}>
            <FontAwesome name="search" size={24} color={Color.colorGray_200} />
          </Pressable>
        </View>

        {/* Renderização dos cartões de objetivo */}
        <View style={styles.containerCartoes}>
          {/* Aqui você pode mapear os objetivos financeiros e renderizar um cartão para cada um */}
          {/* Substitua as informações estáticas pelos dados reais dos objetivos */}
          <CartaoObjetivo
            tipo="Curto Prazo"
            data="27/05/2024"
            valor="500.00"
            plano="Economizar"
          />
          <CartaoObjetivo
            tipo="Médio Prazo"
            data="15/06/2024"
            valor="1500.00"
            plano="Trocar de carro"
          />
          <CartaoObjetivo
            tipo="Longo Prazo"
            data="01/01/2025"
            valor="10000.00"
            plano="Investir em imóveis"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  texto: {
    top: 7,
    alignSelf: "center",
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
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
  posicaoRetangulo: {
    top: "25%",
    height: "45%",
    left: "15%",
    position: "absolute",
    width: "90%",
  },
  retangulo6: {
    backgroundColor: "#f9a84d",
    borderRadius: Border.br_mini,
    position: "absolute",
    opacity: 0.3,
  },
  iconeVetor: {
    height: "30%",
    width: "20%",
    top: "33%",
    bottom: "32.44%",
    left: "48%",
  },
  grupo: {
    height: "5.54%",
    width: "12%",
    top: "1.70%",
    right: "81.33%",
    bottom: "89.78%",
    left: "3.67%",
    position: "absolute",
  },
  retangulo1: {
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
  titulo: {
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
    color: Color.colorGray_200,
    fontFamily: FontFamily.bentonSansBold,
    lineHeight: 33,
    fontSize: FontSize.size_6xl,
  },
  padraoIcone1: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerCartoes: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    top: 30,
    paddingHorizontal: 20,
    marginBottom: 150,
  },
});

export default VisualizarObjetivos;
