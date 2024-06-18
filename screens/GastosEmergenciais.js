import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import CartaoGastoEmergencial from "../components/CartaoGastoEmergencial";

const GastosEmergenciais = () => {
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
          style={styles.imagemPadrao}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.cabecalho}>
          <View style={styles.textoCabecalho}>
            <Text style={styles.titulo}>Gastos</Text>
            <Text style={styles.titulo}>Emergenciais</Text>
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
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Pressable onPress={handleSearch} style={styles.iconePesquisa}>
            <FontAwesome name="search" size={24} color={Color.colorGray_200} />
          </Pressable>
        </View>

        <View style={styles.containerCartoes}>
          <CartaoGastoEmergencial
            descricao="Compra de medicamentos"
            data="20/05/2024"
            valor="120.00"
          />
          <CartaoGastoEmergencial
            descricao="Conserto do carro"
            data="10/06/2024"
            valor="250.00"
          />
          <CartaoGastoEmergencial
            descricao="Reparo na casa"
            data="05/07/2024"
            valor="180.00"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
  cabecalho: {
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
  imagemPadrao: {
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
  textoCabecalho: {
    top: 7,
    alignSelf: "center",
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

export default GastosEmergenciais;
