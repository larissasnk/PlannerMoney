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
import { FontAwesome } from "@expo/vector-icons"; 
import CartaoDividas from "../components/CartaoDividas.js"; 
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DividasPendentes = () => {
  const navigation = useNavigation();
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [filtroSelecionado, setFiltroSelecionado] = useState("todos"); 
  const [transacoes, setTransacoes] = useState([
    {
      id: 1,
      descricao: "Aluguel",
      valor: "1500.00",
      dataPrevistaPagamento: "25/05/2024",
      quitado: true,
    },
    {
      id: 2,
      descricao: "Energia",
      valor: "200.00",
      dataPrevistaPagamento: "27/05/2024",
      quitado: false,
    },
    {
      id: 3,
      descricao: "Internet",
      valor: "100.00",
      dataPrevistaPagamento: "30/05/2024",
      quitado: false,
    },
    {
      id: 4,
      descricao: "Gás",
      valor: "80.00",
      dataPrevistaPagamento: "23/05/2024",
      quitado: true,
    },
    {
      id: 5,
      descricao: "Água",
      valor: "50.00",
      dataPrevistaPagamento: "29/05/2024",
      quitado: false,
    },
  ]);

  const alternarStatus = (id) => {
    setTransacoes((prevTransacoes) =>
      prevTransacoes.map((transacao) =>
        transacao.id === id
          ? { ...transacao, quitado: !transacao.quitado }
          : transacao
      )
    );
  };

  const handleSearch = () => {
    console.log("Pesquisando por:", termoPesquisa);
    // Lógica de pesquisa aqui
  };

  const transacoesFiltradas = transacoes.filter((transacao) => {
    if (filtroSelecionado === "todos") {
      return true; 
    } else if (filtroSelecionado === "pendentes") {
      return !transacao.quitado;
    } else if (filtroSelecionado === "pagos") {
      return transacao.quitado;
    }
    return true; 
  });

  const getCorDeFundo = (quitado) => {
    return quitado ? "#5bba67" : "#ea575acc"; 
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.imagemFundo}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />

        <View style={styles.containerTitulo}>
          <View style={styles.textoCentro}>
            <Text style={styles.textoTitulo}>Dívidas</Text>
            <Text style={styles.textoTitulo}>Pendentes</Text>
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
              filtroSelecionado === "todos" && styles.filtroSelecionado,
            ]}
            onPress={() => setFiltroSelecionado("todos")}
          >
            <Text style={styles.textoFiltro}>Todos</Text>
          </Pressable>
          <Pressable
            style={[
              styles.botaoFiltro,
              filtroSelecionado === "pagos" && styles.filtroSelecionadoPago,
            ]}
            onPress={() => setFiltroSelecionado("pagos")}
          >
            <Text style={styles.textoFiltro}>Pagos</Text>
          </Pressable>
          <Pressable
            style={[
              styles.botaoFiltro,
              filtroSelecionado === "pendentes" && styles.filtroSelecionadoPendente,
            ]}
            onPress={() => setFiltroSelecionado("pendentes")}
          >
            <Text style={styles.textoFiltro}>Pendentes</Text>
          </Pressable>
        </View>

        <View style={styles.containerPesquisa}>
          <TextInput
            style={styles.entradaPesquisa}
            placeholder="Pesquisar..."
            value={termoPesquisa}
            onChangeText={setTermoPesquisa}
          />
          <Pressable onPress={handleSearch} style={styles.iconePesquisa}>
            <FontAwesome name="search" size={24} color={Color.colorGray_200} />
          </Pressable>
        </View>

        <View style={styles.containerCartoes}>
          {transacoesFiltradas.map((transacao, index) => (
            <View
              key={index}
              style={[
                styles.cartao,
                { backgroundColor: getCorDeFundo(transacao.quitado) },
              ]}
            >
              <CartaoDividas
                descricaoDivida={transacao.descricao}
                valor={transacao.valor}
                dataPrevistaPagamento={transacao.dataPrevistaPagamento}
                quitado={transacao.quitado}
                onToggleStatus={() => alternarStatus(transacao.id)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imagemFundo: {
    position: "absolute",
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
  },
  containerTitulo: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 9,
    width: 250,
    height: 88,
    marginTop: 85,
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
    alignItems: "center",
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
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  containerFiltros: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
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
    backgroundColor: "#64b5f6",
  },
  filtroSelecionadoPago: {
    backgroundColor: "#5bba67",
  },
  filtroSelecionadoPendente: {
    backgroundColor: "#ea575acc",
  },
  containerPesquisa: {
    paddingHorizontal: 20,
    marginTop: 20,
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
