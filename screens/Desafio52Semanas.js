import React, { useState } from "react";
import { Image } from "expo-image";
import { View, Text, ScrollView, StyleSheet, TextInput, Pressable } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const dadosSemanas = [
  { semana: 1, deposito: 10, acumulado: 10 },
  { semana: 2, deposito: 20, acumulado: 30 },
  { semana: 3, deposito: 30, acumulado: 60 },
  { semana: 4, deposito: 40, acumulado: 100 },
  { semana: 5, deposito: 50, acumulado: 150 },
  { semana: 6, deposito: 60, acumulado: 210 },
  { semana: 7, deposito: 70, acumulado: 280 },
  { semana: 8, deposito: 80, acumulado: 360 },
  { semana: 9, deposito: 90, acumulado: 450 },
  { semana: 10, deposito: 100, acumulado: 550 },
  { semana: 11, deposito: 110, acumulado: 660 },
  { semana: 12, deposito: 120, acumulado: 780 },
  { semana: 13, deposito: 130, acumulado: 910 },
  { semana: 14, deposito: 140, acumulado: 1050 },
  { semana: 15, deposito: 150, acumulado: 1200 },
  { semana: 16, deposito: 160, acumulado: 1360 },
  { semana: 17, deposito: 170, acumulado: 1530 },
  { semana: 18, deposito: 180, acumulado: 1710 },
  { semana: 19, deposito: 190, acumulado: 1900 },
  { semana: 20, deposito: 200, acumulado: 2100 },
  { semana: 21, deposito: 210, acumulado: 2310 },
  { semana: 22, deposito: 220, acumulado: 2530 },
  { semana: 23, deposito: 230, acumulado: 2760 },
  { semana: 24, deposito: 240, acumulado: 3000 },
  { semana: 25, deposito: 250, acumulado: 3250 },
  { semana: 26, deposito: 260, acumulado: 3510 },
  { semana: 27, deposito: 270, acumulado: 3780 },
  { semana: 28, deposito: 280, acumulado: 4060 },
  { semana: 29, deposito: 290, acumulado: 4350 },
  { semana: 30, deposito: 300, acumulado: 4650 },
  { semana: 31, deposito: 310, acumulado: 4960 },
  { semana: 32, deposito: 320, acumulado: 5280 },
  { semana: 33, deposito: 330, acumulado: 5610 },
  { semana: 34, deposito: 340, acumulado: 5950 },
  { semana: 35, deposito: 350, acumulado: 6300 },
  { semana: 36, deposito: 360, acumulado: 6660 },
  { semana: 37, deposito: 370, acumulado: 7030 },
  { semana: 38, deposito: 380, acumulado: 7410 },
  { semana: 39, deposito: 390, acumulado: 7800 },
  { semana: 40, deposito: 400, acumulado: 8200 },
  { semana: 41, deposito: 410, acumulado: 8610 },
  { semana: 42, deposito: 420, acumulado: 9030 },
  { semana: 43, deposito: 430, acumulado: 9460 },
  { semana: 44, deposito: 440, acumulado: 9900 },
  { semana: 45, deposito: 450, acumulado: 10350 },
  { semana: 46, deposito: 460, acumulado: 10810 },
  { semana: 47, deposito: 470, acumulado: 11280 },
  { semana: 48, deposito: 480, acumulado: 11760 },
  { semana: 49, deposito: 490, acumulado: 12250 },
  { semana: 50, deposito: 500, acumulado: 12750 },
  { semana: 51, deposito: 510, acumulado: 13260 },
  { semana: 52, deposito: 520, acumulado: 13780 },
];

const Desafio52Semanas = () => {
  const navigation = useNavigation();
  const [semanasMarcadas, setSemanasMarcadas] = useState(new Array(52).fill(false));
  const [planoUsuario, setPlanoUsuario] = useState("");
  const [valorAcumulado, setValorAcumulado] = useState(0);

  const handleCheckboxChange = (index) => {
    const novasSemanasMarcadas = [...semanasMarcadas];
    novasSemanasMarcadas[index] = !novasSemanasMarcadas[index];
    setSemanasMarcadas(novasSemanasMarcadas);

    // Atualiza o valor acumulado
    if (novasSemanasMarcadas[index]) {
      setValorAcumulado((prevValor) => prevValor + dadosSemanas[index].deposito);
    } else {
      setValorAcumulado((prevValor) => prevValor - dadosSemanas[index].deposito);
    }
  };

  // Função para adicionar o plano do usuário
  const adicionarPlanoUsuario = () => {
    // Aqui você pode implementar a lógica para adicionar o plano do usuário
    // Por exemplo, enviá-lo para o backend ou salvar localmente
    console.log("Plano do usuário:", planoUsuario);
    // Limpar o campo de texto após adicionar o plano
    setPlanoUsuario("");
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.padraoIcone1}
        contentFit="cover"
        source={require("../assets/pattern4.png")}
      />
      <View style={styles.retangulo1}>
        <View style={[styles.texto]}>
          <Text style={[styles.titulo]}>Evolução</Text>
          <Text style={[styles.titulo]}>em 52 Semanas</Text>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.iconeVoltar}
      >
        <Ionicons name="chevron-back" size={34} color="black" />
      </Pressable>

      <Text style={styles.subtitulo}>Junte mais de 10k em 52 semanas</Text>



      <Text style={styles.rotuloPlano}>Valor Acumulado: R$ {valorAcumulado.toFixed(2)}</Text>

      <View style={styles.tabela}>
        <View style={styles.cabecalhoTabela}>
          <Text style={styles.textoCabecalhoTabela}>Semana</Text>
          <Text style={styles.textoCabecalhoTabela}>Depósito</Text>
          <Text style={styles.textoCabecalhoTabela}>Acumulado</Text>
        </View>
        {dadosSemanas.map((item, index) => (
          <View key={index} style={styles.linhaTabela}>
            <Checkbox
              status={semanasMarcadas[index] ? "checked" : "unchecked"}
              onPress={() => handleCheckboxChange(index)}
              color="#53e88b"
              uncheckedColor="#15be77"
            />
            <Text style={styles.celulaTabela}>{item.semana}</Text>
            <Text style={styles.celulaTabela}>R$ {item.deposito.toFixed(2)}</Text>
            <Text style={styles.celulaTabela}>R$ {item.acumulado.toFixed(2)}</Text>
          </View>
        ))}
      </View>

  

    {/* Exibição do plano do usuário */}


  </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor: "#fff",
},
padraoIcone1: {
  top: -275,
  left: -17,
  width: 581,
  height: 1025,
  position: "absolute",
},
texto: {
  top: 7,
  alignSelf: "center",
},
iconeVoltar: {
  position: "absolute",
  top: 40,
  left: 20,
  zIndex: 1,
},

retangulo1: {
  backgroundColor: "#FFFFFF",
  paddingVertical: 5,
  width: 250,
  height: 88,
  marginBottom: 5,
  top: 100,
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
subtitulo: {
  marginTop: 110,
  fontSize: 16,
  color: "#15be77",
  textAlign: "center",
  marginBottom: 20,
  fontWeight: "bold",
},
rotuloPlano: {
  textAlign:"center",
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 10,
  color: "#333",
},
tabela: {
  marginBottom:200,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  overflow: "hidden",
},
cabecalhoTabela: {
  flexDirection: "row",
  backgroundColor: "#f0f0f0",
  paddingVertical: 10,
},
textoCabecalhoTabela: {
  flex: 1,
  fontWeight: "bold",
  textAlign: "center",
  color: "#333",
},
linhaTabela: {
  flexDirection: "row",
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#ccc",
  alignItems: "center",
},
celulaTabela: {
  flex: 1,
  textAlign: "center",
  color: "#333",
},
containerPlano: {
  marginTop: 20,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  padding: 10,
  backgroundColor: "#f9f9f9",
  marginBottom: 20,
},
rotuloPlanoUsuario: {
  fontWeight: "bold",
  marginBottom: 5,
  color: "#333",
},
inputPlano: {
  height: 100,
  borderColor: "#ccc",
  borderWidth: 1,
  borderRadius: 8,
  padding: 10,
  textAlignVertical: "top",
  backgroundColor: "#fff",
  color: "#333",
},
botaoAdicionar: {
  backgroundColor: "#15be77",
  padding: 10,
  borderRadius: 8,
  marginTop: 10,
  alignSelf: "center",
},
textoBotaoAdicionar: {
  color: "#fff",
  fontWeight: "bold",
  textAlign: "center",
},
planoUsuario: {
  marginTop: 10,
  padding: 10,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  backgroundColor: "#f9f9f9",
},
});

export default Desafio52Semanas;
