import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image"; 
import { StyleSheet, Text, View, ScrollView,   Pressable, } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const VisualizarGastosScreen = () => {
  const navigation = useNavigation();
  // Estados para os valores previstos e reais (aqui você pode inicializar com valores reais ou vindos de um banco de dados)
  const [gastos, setGastos] = useState({
    alimentacao: { previsto: 500, real: 450 },
    morada: { previsto: 1000, real: 980 },
    saude: { previsto: 300, real: 320 },
    transporte: { previsto: 200, real: 180 },
    reservaEmergencia: { previsto: 400, real: 400 },
    objetivosFinanceiros: { previsto: 300, real: 280 },
    compras: { previsto: 150, real: 130 },
    jantar: { previsto: 100, real: 90 },
    hobbies: { previsto: 200, real: 220 },
    lazer: { previsto: 150, real: 170 },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>

<Image
          style={styles.iconePadrao1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.retangulo1}>
          <View style={[styles.texto]}>
            <Text style={[styles.titulo]}>Método</Text>
            <Text style={[styles.titulo]}>50/20/30</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

      <Text style={styles.subtitle}>Aprenda a distribuir melhor a sua renda</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>50% Essenciais</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Categoria</Text>
            <Text style={styles.tableHeader}>Valor Previsto</Text>
            <Text style={styles.tableHeader}>Valor Real</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Alimentação</Text>
            <Text style={styles.tableCell}>{gastos.alimentacao.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.alimentacao.real}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Morada</Text>
            <Text style={styles.tableCell}>{gastos.morada.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.morada.real}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Saúde</Text>
            <Text style={styles.tableCell}>{gastos.saude.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.saude.real}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Transporte</Text>
            <Text style={styles.tableCell}>{gastos.transporte.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.transporte.real}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>20% Poupança</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Categoria</Text>
            <Text style={styles.tableHeader}>Valor Previsto</Text>
            <Text style={styles.tableHeader}>Valor Real</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Reserva de Emergência</Text>
            <Text style={styles.tableCell}>{gastos.reservaEmergencia.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.reservaEmergencia.real}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Objetivos Financeiros</Text>
            <Text style={styles.tableCell}>{gastos.objetivosFinanceiros.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.objetivosFinanceiros.real}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>30% Desejos</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Categoria</Text>
            <Text style={styles.tableHeader}>Valor Previsto</Text>
            <Text style={styles.tableHeader}>Valor Real</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Compras</Text>
            <Text style={styles.tableCell}>{gastos.compras.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.compras.real}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Jantar</Text>
            <Text style={styles.tableCell}>{gastos.jantar.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.jantar.real}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Hobbies</Text>
            <Text style={styles.tableCell}>{gastos.hobbies.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.hobbies.real}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Lazer</Text>
            <Text style={styles.tableCell}>{gastos.lazer.previsto}</Text>
            <Text style={styles.tableCell}>{gastos.lazer.real}</Text>
          </View>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container2:{
    marginBottom:200,
  },
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
  retangulo1: {
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
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  iconePadrao1: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  subtitle: {
    top:100,
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
    top:100,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:"center",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    flex: 1,
    backgroundColor: "#f1f1f1",
    textAlign: "center",
  },
  tableCell: {
    fontSize: 16,
    padding: 10,
    flex: 1,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default VisualizarGastosScreen;
