import * as React from "react";
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
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { FontAwesome } from "@expo/vector-icons"; // Importe o ícone FontAwesome
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartaoGasto from "../components/CartaoGasto.js";

const GastosCartao = () => {
  const [switchValue, setswitchValue] = useState(false);
  const navigation = useNavigation();
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [transacoes, setTransacoes] = useState([]);
  const [numeroSelecionado, setNumeroSelecionado] = useState("");
  const [isParcelado, setIsParcelado] = useState(false);

  const toggleSwitch = (valor) => {
    setswitchValue(valor);
  };
  const handleNumberChange = (numero) => {
    setNumeroSelecionado(numero);
  };

  const addTransaction = () => {
    const novaTransacao = {
      descricao: descricao,
      valor: valor,
      data: data,
    };
    setTransacoes([...transacoes, novaTransacao]);
    setDescricao("");
    setValor("");
    setData("");
  };

  const [termoPesquisa, setTermoPesquisa] = React.useState(""); // Estado para armazenar o termo de pesquisa

  const handleSearch = () => {
    // Função para lidar com a pesquisa
    console.log("Pesquisando por:", termoPesquisa);
    // Aqui você pode adicionar a lógica de pesquisa real
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
          style={styles.padraoIcon1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.retangulo1}>
          <View style={[styles.texto]}>
            <Text style={[styles.titulo]}>Gastos com</Text>
            <Text style={[styles.titulo]}>Cartão</Text>
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
            value={termoPesquisa}
            onChangeText={setTermoPesquisa} // Atualiza o estado do termo de pesquisa
          />
          {/* Ícone de pesquisa */}
          <Pressable onPress={handleSearch} style={styles.iconePesquisa}>
            <FontAwesome name="search" size={24} color={Color.colorGray_200} />
          </Pressable>
        </View>



        <View style={{justifyContent:"center", alignSelf:"center", width:"100%", top:30, paddingHorizontal: 20, marginBottom:150}}>

        <CartaoGasto
        descricao="Supermercado"
        data="27/05/2024"
        valorTotal="150.00"
        tipo="À Vista"
      />
      <CartaoGasto
        descricao="Notebook"
        data="20/05/2024"
        valorTotal="1200.00"
        tipo="Parcelado"
        parcelas={12}
        valorParcela="100.00"
      />
      <CartaoGasto
        descricao="Restaurante"
        data="22/05/2024"
        valorTotal="75.00"
        tipo="À Vista"
      />
      <CartaoGasto
        descricao="Celular"
        data="15/05/2024"
        valorTotal="2400.00"
        tipo="Parcelado"
        parcelas={24}
        valorParcela="100.00"
      />

        <CartaoGasto
        descricao="Supermercado"
        data="27/05/2024"
        valorTotal="150.00"
        tipo="À Vista"
      />
      <CartaoGasto
        descricao="Notebook"
        data="20/05/2024"
        valorTotal="1200.00"
        tipo="Parcelado"
        parcelas={12}
        valorParcela="100.00"
      />
      <CartaoGasto
        descricao="Restaurante"
        data="22/05/2024"
        valorTotal="75.00"
        tipo="À Vista"
      />
      <CartaoGasto
        descricao="Celular"
        data="15/05/2024"
        valorTotal="2400.00"
        tipo="Parcelado"
        parcelas={24}
        valorParcela="100.00"
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
    retanguloPosition: {
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
    paddingVertical: 10,
    width: 250,
    height: 88,
    top:80,
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
  padraoIcon: {
    width: 375,
    left: 0,
    top: 0,
    height: 812,
  },
  padraoIcon1: {
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
});

export default GastosCartao;
