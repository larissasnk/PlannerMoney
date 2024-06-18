import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Image, Platform } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { KeyboardAvoidingView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CartaoGastoAniversariantes from "../components/CartaoGastoAniversariante";

const GastosAniversariantes = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Pesquisando por:", searchTerm);
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
          style={styles.iconePadrao}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.retanguloTitulo}>
          <View style={styles.textoCentro}>
            <Text style={styles.titulo}>Gastos com</Text>
            <Text style={styles.titulo}>Aniversariantes</Text>
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
            style={styles.entradaPesquisa}
            placeholder="Pesquisar..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Pressable onPress={handleSearch} style={styles.iconePesquisa}>
            <FontAwesome name="search" size={24} color={Color.colorGray_200} />
          </Pressable>
        </View>

        <View style={styles.listaCartoes}>
          <CartaoGastoAniversariantes
            nomeAniversariante="Maria"
            dataAniversario="27/05/2024"
            valorPresente="150.00"
          />
          <CartaoGastoAniversariantes
            nomeAniversariante="João"
            dataAniversario="15/08/2024"
            valorPresente="200.00"
          />
          <CartaoGastoAniversariantes
            nomeAniversariante="Pedro"
            dataAniversario="10/12/2024"
            valorPresente="100.00"
          />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  iconePadrao: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
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
  textoCentro: {
    top: 7,
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
  entradaPesquisa: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  iconePesquisa: {
    marginLeft: 10,
  },
  listaCartoes: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    top: 30,
    paddingHorizontal: 20,
    marginBottom: 150,
  },
});

export default GastosAniversariantes;
