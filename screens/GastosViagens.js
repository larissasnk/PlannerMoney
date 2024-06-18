import React, { useState } from "react";
import { Text,StyleSheet, ScrollView, Modal, View, Pressable } from "react-native";
import CartaoViagemTotal from "../components/CartaoViagemTotal";
import ViagemDetalhada from "../components/ViagemDetalhada";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const viagens = [
  {
    nome: "Viagem à Praia",
    inicio: "01/07/2024",
    termino: "07/07/2024",
    valorHospedagem: "500.00",
    detalhesDiarias: [
      {
        data: "01/07/2024",
        passagem: "50.00",
        alimentacao: "30.00",
        passeios: "20.00",
        transporte: "40.00",
        extras: "10.00",
      },
      {
        data: "02/07/2024",
        passagem: "50.00",
        alimentacao: "35.00",
        passeios: "25.00",
        transporte: "40.00",
        extras: "15.00",
      },
    ],
  },
  {
    nome: "Viagem ao Campo",
    inicio: "15/08/2024",
    termino: "20/08/2024",
    valorHospedagem: "300.00",
    detalhesDiarias: [
      {
        data: "15/08/2024",
        passagem: "40.00",
        alimentacao: "25.00",
        passeios: "15.00",
        transporte: "30.00",
        extras: "5.00",
      },
      {
        data: "16/08/2024",
        passagem: "40.00",
        alimentacao: "30.00",
        passeios: "20.00",
        transporte: "35.00",
        extras: "10.00",
      },
    ],
  },
  {
    nome: "Viagem à Montanha",
    inicio: "05/09/2024",
    termino: "10/09/2024",
    valorHospedagem: "450.00",
    detalhesDiarias: [
      {
        data: "05/09/2024",
        passagem: "60.00",
        alimentacao: "35.00",
        passeios: "25.00",
        transporte: "45.00",
        extras: "15.00",
      },
      {
        data: "06/09/2024",
        passagem: "60.00",
        alimentacao: "40.00",
        passeios: "30.00",
        transporte: "50.00",
        extras: "20.00",
      },
    ],
  },
  {
    nome: "Viagem Cultural",
    inicio: "20/10/2024",
    termino: "25/10/2024",
    valorHospedagem: "600.00",
    detalhesDiarias: [
      {
        data: "20/10/2024",
        passagem: "70.00",
        alimentacao: "45.00",
        passeios: "35.00",
        transporte: "55.00",
        extras: "25.00",
      },
      {
        data: "21/10/2024",
        passagem: "70.00",
        alimentacao: "50.00",
        passeios: "40.00",
        transporte: "60.00",
        extras: "30.00",
      },
    ],
  },
  {
    nome: "Viagem de Negócios",
    inicio: "10/11/2024",
    termino: "12/11/2024",
    valorHospedagem: "200.00",
    detalhesDiarias: [
      {
        data: "10/11/2024",
        passagem: "80.00",
        alimentacao: "55.00",
        passeios: "10.00",
        transporte: "65.00",
        extras: "35.00",
      },
      {
        data: "11/11/2024",
        passagem: "80.00",
        alimentacao: "60.00",
        passeios: "15.00",
        transporte: "70.00",
        extras: "40.00",
      },
    ],
  },
  {
    nome: "Viagem Romântica",
    inicio: "14/02/2024",
    termino: "18/02/2024",
    valorHospedagem: "700.00",
    detalhesDiarias: [
      {
        data: "14/02/2024",
        passagem: "100.00",
        alimentacao: "75.00",
        passeios: "55.00",
        transporte: "85.00",
        extras: "45.00",
      },
      {
        data: "15/02/2024",
        passagem: "100.00",
        alimentacao: "80.00",
        passeios: "60.00",
        transporte: "90.00",
        extras: "50.00",
      },
      {
        data: "16/02/2024",
        passagem: "100.00",
        alimentacao: "80.00",
        passeios: "60.00",
        transporte: "90.00",
        extras: "50.00",
      },
      {
        data: "17/02/2024",
        passagem: "100.00",
        alimentacao: "80.00",
        passeios: "60.00",
        transporte: "90.00",
        extras: "50.00",
      },
    ],
  },
];

const GastosViagens = () => {
  const navigation = useNavigation();
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [viagemSelecionada, setViagemSelecionada] = useState(null);
  const [valorTotalViagem, setValorTotalViagem] = useState(0);



  return (
    <ScrollView contentContainerStyle={styles.container}>
         <Image
          style={styles.patternIcon1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.rectangle1}>
          <View style={styles.text}>
            <Text style={styles.titulo}>Detalhes</Text>
            <Text style={styles.titulo}>da Diária</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

<View style={{top:120}}>
      {viagens.map((viagem, index) => (
        <CartaoViagemTotal
          key={index}
          nomeViagem={viagem.nome}
          dataViagem={`${viagem.inicio} - ${viagem.termino}`}
          onPress={() => {
            setViagemSelecionada(viagem);
            setMostrarDetalhes(true);
          }}
          
          detalhes={viagem} 
      
        />
      ))}
      </View>

      {viagemSelecionada && (
        <Modal
          visible={mostrarDetalhes}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setMostrarDetalhes(false)}
        >
          <View style={styles.modalContainer}>
            <ViagemDetalhada
              nomeViagem={viagemSelecionada.nome}
              inicioPassagem={viagemSelecionada.inicio}
              terminoHospedagem={viagemSelecionada.termino}
              valorHospedagem={viagemSelecionada.valorHospedagem}
              detalhesDiarias={viagemSelecionada.detalhesDiarias}
              onCloseModal={() => setMostrarDetalhes(false)}
              valorTotalViagem = {viagemSelecionada.valorTotal}
            />
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    top: 7,
    alignSelf: "center",
  },
  patternIcon1: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 250,
    height: 88,
    marginBottom: 5,
    top: 85,
    alignSelf: "center",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
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
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GastosViagens;
