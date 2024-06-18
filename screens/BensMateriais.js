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
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles.js";
import { FontAwesome } from "@expo/vector-icons"; // Importe o ícone FontAwesome
import CartaoBens from "../components/CartaoBens.js";
import { Ionicons } from "@expo/vector-icons"; // Importe o componente CartaoDividaPendente
import { useNavigation } from "@react-navigation/native";

const DividasPendentes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("todos"); // Defina o filtro inicial como 'todos'
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      descricao: "Carro",
      data: "29/05/2024",
      valor: "50000.00",
      conquista: true,
    },
    {
      id: 2,
      descricao: "Casa",
      data: "29/05/2024",
      valor: "200000.00",
      conquista: false,
    },
    {
      id: 3,
      descricao: "Barco",
      data: "29/05/2024",
      valor: "80000.00",
      conquista: true,
    },
  ]);

  const handleToggleStatus = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, conquista: !transaction.conquista } // Altera a propriedade conquista
          : transaction
      )
    );
  };

  const handleSearch = () => {
    console.log("Pesquisando por:", searchTerm);
    // Lógica de pesquisa aqui
  };

  const navigation = useNavigation();

  const filteredTransactions = transactions.filter((transaction) => {
    if (selectedFilter === "todos") {
      return true; // Retorna todos os itens se 'todos' estiver selecionado
    } else if (selectedFilter === "conquistados") {
      return transaction.conquista;
    } else if (selectedFilter === "naoConquistados") {
      return !transaction.conquista;
    }
    return true; // Retorna true se nenhum filtro estiver selecionado
  });

  const getBackgroundColor = (conquista) => {
    return conquista ? "#5bba67" : "#ea575acc"; // Verde claro para conquistado, vermelho claro para não conquistado
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.fundoPadrao}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />

        <View style={styles.containerTitulo}>
          <View style={[styles.textoTituloContainer]}>
            <Text style={[styles.textoTitulo]}>Aquisição de</Text>
            <Text style={[styles.textoTitulo]}>Bens Materiais</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.containerBotoesFiltro}>
          <Pressable
            style={[
              styles.botaoFiltro,
              selectedFilter === "todos" && styles.filtroSelecionado,
            ]}
            onPress={() => setSelectedFilter("todos")}
          >
            <Text style={styles.textoBotaoFiltro}>Todos</Text>
          </Pressable>
          <Pressable
            style={[
              styles.botaoFiltro,
              selectedFilter === "conquistados" && styles.filtroSelecionadoPago,
            ]}
            onPress={() => setSelectedFilter("conquistados")}
          >
            <Text style={styles.textoBotaoFiltro}>Conquistados</Text>
          </Pressable>
          <Pressable
            style={[
              styles.botaoFiltro,
              selectedFilter === "naoConquistados" && styles.filtroSelecionadoPendente,
            ]}
            onPress={() => setSelectedFilter("naoConquistados")}
          >
            <Text style={styles.textoBotaoFiltro}>Não Conquistados</Text>
          </Pressable>
        </View>

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
          {filteredTransactions.map((transaction, index) => (
            <View
              key={index}
              style={[
                styles.cartao,
                { backgroundColor: getBackgroundColor(transaction.conquista) },
              ]}
            >
              <CartaoBens
                descricaoBem={transaction.descricao}
                valor={transaction.valor}
                data={transaction.data}
                conquista={transaction.conquista}
                onToggleStatus={() => handleToggleStatus(transaction.id)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textoTituloContainer:{
    top: 7,
    alignSelf: "center",
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  containerBotoesFiltro: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  fundoPadrao: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  containerPesquisa: {
    paddingHorizontal: 20,
    marginTop: 20,
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
  containerTitulo: {
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
  textoTitulo: {
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
    color: Color.colorGray_200,
    fontFamily: FontFamily.bentonSansBold,
    lineHeight: 33,
    fontSize: FontSize.size_6xl,
  },
  containerFiltros: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  botaoFiltro: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 6,
  },
  textoBotaoFiltro: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  filtroSelecionado: {
    backgroundColor: "#64b5f6",
  },
  filtroSelecionadoPago: {
    backgroundColor: "#5bba67",
  },
  filtroSelecionadoPendente: {
    backgroundColor: "#ea575acc",
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
  cartao: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default DividasPendentes;
