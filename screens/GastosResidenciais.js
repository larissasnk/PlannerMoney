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
import CartaoGastoResidencial from "../components/CartaoGastoResidencial.js";

const GastosResidenciais = () => {
  const navigation = useNavigation();
  const [switchValue, setswitchValue] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [transactions, setTransactions] = useState([
    {
      descricao: "Aluguel",
      valor: "1500.00",
      vencimento: "25/05/2024",
      status: "Pago",
    },
    {
      descricao: "Energia",
      valor: "200.00",
      vencimento: "27/05/2024",
      status: "Pendente",
    },
    {
      descricao: "Internet",
      valor: "100.00",
      vencimento: "30/05/2024",
      status: "Pendente",
    },
    {
      descricao: "Gás",
      valor: "80.00",
      vencimento: "23/05/2024",
      status: "Pago",
    },
    {
      descricao: "Água",
      valor: "50.00",
      vencimento: "29/05/2024",
      status: "Pendente",
    },
    {
      descricao: "Internet",
      valor: "100.00",
      vencimento: "30/05/2024",
      status: "Vencido",
    },
    {
      descricao: "Gás",
      valor: "80.00",
      vencimento: "23/05/2024",
      status: "Vencido",
    },
    {
      descricao: "Água",
      valor: "50.00",
      vencimento: "29/05/2024",
      status: "Vencido",
    },
  ]);

  const toggleSwitch = (value) => {
    setswitchValue(value);
  };

  const handleSearch = () => {
    console.log("Pesquisando por:", searchTerm);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (selectedFilter === "todos") {
      return true;
    } else if (selectedFilter === "pendentes") {
      return transaction.status === "Pendente";
    } else if (selectedFilter === "pagos") {
      return transaction.status === "Pago";
    } else if (selectedFilter === "vencidos") {
      return transaction.status === "Vencido";
    }
    return true;
  });

  const getBackgroundColor = (status) => {
    switch (status) {
      case "Pago":
        return "#5bba67";
      case "Pendente":
        return "#F9A84D";
      case "Vencido":
        return "#ea575acc";
      default:
        return "#fff";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.titulo}>Residenciais</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()} 
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.containerFiltros}>
          <ScrollView
            contentContainerStyle={styles.filtros}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Pressable
              style={[
                styles.botaoFiltro,
                selectedFilter === "todos" && styles.filtroSelecionado,
              ]}
              onPress={() => setSelectedFilter("todos")}
            >
              <Text style={styles.textoFiltro}>Todos</Text>
            </Pressable>
            <Pressable
              style={[
                styles.botaoFiltro,
                selectedFilter === "pagos" && styles.filtroSelecionadoPago,
              ]}
              onPress={() => setSelectedFilter("pagos")}
            >
              <Text style={styles.textoFiltro}>Pagos</Text>
            </Pressable>
            <Pressable
              style={[
                styles.botaoFiltro,
                selectedFilter === "pendentes" && styles.filtroSelecionadoPendente,
              ]}
              onPress={() => setSelectedFilter("pendentes")}
            >
              <Text style={styles.textoFiltro}>Pendentes</Text>
            </Pressable>
            <Pressable
              style={[
                styles.botaoFiltro,
                selectedFilter === "vencidos" && styles.filtroSelecionadoVencido,
              ]}
              onPress={() => setSelectedFilter("vencidos")}
            >
              <Text style={styles.textoFiltro}>Vencidos</Text>
            </Pressable>
          </ScrollView>
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

        <View style={styles.containerCards}>
          {filteredTransactions.map((transaction, index) => (
            <View
              key={index}
              style={[
                styles.card,
                { backgroundColor: getBackgroundColor(transaction.status) },
              ]}
            >
              <CartaoGastoResidencial
                gastoCadastrado={transaction.descricao}
                valor={transaction.valor}
                vencimento={transaction.vencimento}
                status={transaction.status}
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
  imagemPadrao: {
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
  cabecalho: {
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
  textoCabecalho: {
    textAlign: "center",
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
  containerFiltros: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 3,
  },
  filtros: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  botaoFiltro: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  textoFiltro: {
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
    backgroundColor: "#F9A84D",
  },
  filtroSelecionadoVencido: {
    backgroundColor: "#ea575acc",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerCards: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    top: 30,
    paddingHorizontal: 20,
    marginBottom: 150,
  },
  card: {
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

export default GastosResidenciais;
