import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles.js";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CartaoItemMercado from "../components/CartaoItemMercado.js";

const PlanilhaMercado = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("todos"); // Defina o filtro inicial como 'todos'
  const [itens, setItens] = useState([
    {
      id: 1,
      nome: "Maçã",
      quantidade: 6,
      precoUnitario: 1.2,
      unidade: "unidade",
      check: true,
    },
    {
      id: 2,
      nome: "Banana",
      quantidade: 12,
      precoUnitario: 0.5,
      unidade: "unidade",
      check: true,
    },
    {
      id: 3,
      nome: "Tomate",
      quantidade: 5,
      precoUnitario: 3.0,
      unidade: "kg",
      check: true,
    },
    {
      id: 4,
      nome: "Maçã",
      quantidade: 6,
      precoUnitario: 1.2,
      unidade: "unidade",
      check: true,
    },
    {
      id: 5,
      nome: "Banana",
      quantidade: 12,
      precoUnitario: 0.5,
      unidade: "unidade",
      check: true,
    },
    {
      id: 6,
      nome: "Tomate",
      quantidade: 5,
      precoUnitario: 3.0,
      unidade: "kg",
      check: true,
    },
    {
      id: 7,
      nome: "Maçã",
      quantidade: 6,
      precoUnitario: 1.2,
      unidade: "unidade",
      check: true,
    },
    {
      id: 8,
      nome: "Banana",
      quantidade: 12,
      precoUnitario: 0.5,
      unidade: "unidade",
      check: true,
    },
    {
      id: 9,
      nome: "Tomate",
      quantidade: 5,
      precoUnitario: 3.0,
      unidade: "kg",
      check: true,
    },
  ]);

  const handleRemoveItem = (id) => {
    setItens((prevItens) => prevItens.filter((item) => item.id !== id));
  };

  const handleToggleStatus = (id) => {
    setItens((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, check: !transaction.check }
          : transaction
      )
    );
  };

  const handleIncreaseQuantity = (id) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  const handleSearch = () => {
    console.log("Pesquisando por:", searchTerm);
    // Lógica de pesquisa aqui
  };

  const getBackgroundColor = (quitado) => {
    return quitado ? "#5bba67" : "#ea575acc"; // Verde claro para quitado, vermelho claro para não quitado
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.patternIcon1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />

        <View style={styles.rectangle1}>
          <View style={[styles.texto]}>
            <Text style={[styles.titulo]}>Lista de</Text>
            <Text style={[styles.titulo]}>Compras</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Pressable onPress={handleSearch} style={styles.searchIcon}>
            <FontAwesome name="search" size={24} color={Color.colorGray_200} />
          </Pressable>
        </View>

        <View style={styles.cardContainer}>
          {itens.map((item) => (
            <CartaoItemMercado
              key={item.id}
              nome={item.nome}
              check={item.check}
              onToggleStatus={() => handleToggleStatus(item.id)}
              quantidade={item.quantidade}
              precoUnitario={item.precoUnitario}
              unidade={item.unidade}
              onRemove={() => handleRemoveItem(item.id)}
              onIncrease={() => handleIncreaseQuantity(item.id)}
              onDecrease={() => handleDecreaseQuantity(item.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  texto: {
    top: 7,
    alignSelf: "center",
  },
  rectangle1: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 250,
    height: 88,
    marginTop: 90,
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
  patternIcon1: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    top: 20,
    paddingHorizontal: 20,
    marginBottom: 150,
  },
});

export default PlanilhaMercado;
