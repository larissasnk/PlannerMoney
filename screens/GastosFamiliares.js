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
  Platform,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles.js";
import { FontAwesome } from "@expo/vector-icons"; // Importe o ícone FontAwesome
import CartaoGastoResidencial from "../components/CartaoGastoResidencial.js"; // Importe o componente CartaoGastoResidencial
import CartaoGastoFamiliar from "../components/CartaoGastoFamiliar.js"; // Importe o novo componente CartaoGastoFamiliar
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GastosFamiliares = () => {
  const [switchValue, setswitchValue] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("todos"); // Defina o filtro inicial como 'todos'
  const [selectedMemberFilter, setSelectedMemberFilter] = useState("todos");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [data, setData] = useState(null); // Inicializa a data como null// Novo filtro para cônjuge e filho
  const [transactions, setTransactions] = useState([
    {
      descricao: "Aluguel",
      valor: "1500.00",
      data: "25/05/2024",
      status: "Pago",
      member: "conjugue",
      nome: "João",
      valorPrevisto: "1500.00",
      valorRealizado: "1500.00",
    },
    {
      descricao: "Energia",
      valor: "200.00",
      data: "27/05/2024",
      status: "Pendente",
      member: "filho",
      nome: "Pedro",
      valorPrevisto: "200.00",
      valorRealizado: "0.00",
    },
    {
      descricao: "Internet",
      valor: "100.00",
      data: "30/05/2024",
      status: "Pendente",
      member: "conjugue",
      nome: "João",
      valorPrevisto: "100.00",
      valorRealizado: "0.00",
    },
    {
      descricao: "Gás",
      valor: "80.00",
      data: "23/05/2024",
      status: "Pago",
      member: "filho",
      nome: "Pedro",
      valorPrevisto: "80.00",
      valorRealizado: "80.00",
    },
    {
      descricao: "Água",
      valor: "50.00",
      data: "29/05/2024",
      status: "Pendente",
      member: "conjugue",
      nome: "João",
      valorPrevisto: "50.00",
      valorRealizado: "0.00",
    },
    {
      descricao: "Internet",
      valor: "100.00",
      data: "30/05/2024",
      status: "Vencido",
      member: "filho",
      nome: "Pedro",
      valorPrevisto: "100.00",
      valorRealizado: "0.00",
    },
    {
      descricao: "Gás",
      valor: "80.00",
      data: "23/05/2024",
      status: "Vencido",
      member: "conjugue",
      nome: "João",
      valorPrevisto: "80.00",
      valorRealizado: "0.00",
    },
    {
      descricao: "Água",
      valor: "50.00",
      data: "29/05/2024",
      status: "Vencido",
      member: "filho",
      nome: "Pedro",
      valorPrevisto: "50.00",
      valorRealizado: "0.00",
    },
  ]);

  const toggleSwitch = (value) => {
    setswitchValue(value);
  };

  const handleSearch = () => {
    console.log("Pesquisando por:", searchTerm);
    // Lógica de pesquisa aqui
  };

  const navigation = useNavigation();

  const filteredTransactions = transactions.filter((transaction) => {
    let matchesFilter =
      selectedFilter === "todos" || transaction.member === selectedFilter;
    let matchesMemberFilter =
      selectedMemberFilter === "todos" ||
      transaction.member === selectedMemberFilter;
    return matchesFilter && matchesMemberFilter;
  });

  const getBackgroundColor = (member) => {
    switch (member) {
      case "conjugue":
        return "#64b5f6"; // Verde claro
      case "filho":
        return "#F9A84D"; // Laranja claro
      default:
        return "#fff"; // Cor padrão do card
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.iconeFundo1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />

        <View style={styles.retangulo1}>
          <View style={[styles.texto]}>
            <Text style={[styles.titulo]}>Gastos</Text>
            <Text style={[styles.titulo]}>Familiares</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.containerFiltros}>
          <Pressable
            style={[
              styles.botaoFiltro,
              selectedMemberFilter === "todos" && styles.filtroSelecionado,
            ]}
            onPress={() => setSelectedMemberFilter("todos")}
          >
            <Text style={styles.textoFiltro}>Todos</Text>
          </Pressable>
          <Pressable
            style={[
              styles.botaoFiltro,
              selectedMemberFilter === "conjugue" &&
                styles.filtroSelecionadoConjugue,
            ]}
            onPress={() => setSelectedMemberFilter("conjugue")}
          >
            <Text style={styles.textoFiltro}>Cônjuge</Text>
          </Pressable>
          <Pressable
            style={[
              styles.botaoFiltro,
              selectedMemberFilter === "filho" && styles.filtroSelecionadoFilho,
            ]}
            onPress={() => setSelectedMemberFilter("filho")}
          >
            <Text style={styles.textoFiltro}>Filho</Text>
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
                { backgroundColor: getBackgroundColor(transaction.member) },
              ]}
            >
              <CartaoGastoFamiliar
                nome={transaction.nome}
                descricao={transaction.descricao}
                data={transaction.data}
                valorPrevisto={transaction.valorPrevisto}
                valorRealizado={transaction.valorRealizado}
              />
            </View>
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
  filtroSelecionadoConjugue: {
    backgroundColor: "#64b5f6", // Azul claro para cônjuge
  },
  filtroSelecionadoFilho: {
    backgroundColor: "#F9A84D", // Laranja claro para filho
  },
  retangulo1: {
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
  texto: {
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
  textoFiltro: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  filtroSelecionado: {
    backgroundColor: "#5bba67",
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
  iconeFundo1: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
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
});

export default GastosFamiliares;

