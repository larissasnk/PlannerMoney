import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ViagemScreen = ({ navigation }) => {
  const [nomeViagem, setNomeViagem] = useState("");
  const [inicioPassagem, setInicioPassagem] = useState(new Date());
  const [terminoHospedagem, setTerminoHospedagem] = useState(new Date());
  const [showInicioPassagem, setShowInicioPassagem] = useState(false);
  const [showTerminoHospedagem, setShowTerminoHospedagem] = useState(false);
  const [valorHospedagem, setValorHospedagem] = useState("");

  const onChangeInicioPassagem = (event, selectedDate) => {
    const currentDate = selectedDate || inicioPassagem;
    setShowInicioPassagem(Platform.OS === 'ios');
    setInicioPassagem(currentDate);
  };

  const onChangeTerminoHospedagem = (event, selectedDate) => {
    const currentDate = selectedDate || terminoHospedagem;
    setShowTerminoHospedagem(Platform.OS === 'ios');
    setTerminoHospedagem(currentDate);
  };
8
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
          style={styles.patternIcon1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.rectangle1}>
          <View style={[styles.text]}>
            <Text style={[styles.tiitle]}>Planejamento</Text>
            <Text style={[styles.tiitle]}>de Viagens</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>
      <View style={styles.inputContainer}>
        <Text style={styles.textoCampo}>Nome da Viagem:</Text>
        <TextInput
          style={styles.input}
          value={nomeViagem}
          onChangeText={setNomeViagem}
        />
  
        <Text style={styles.textoCampo}>Início Passagem:</Text>
        <Pressable onPress={() => setShowInicioPassagem(true)}>
          <View style={styles.datePickerContainer}>
            <Text>{inicioPassagem.toLocaleDateString()}</Text>
          </View>
        </Pressable>
        {showInicioPassagem && (
          <DateTimePicker
            value={inicioPassagem}
            mode="date"
            display="default"
            onChange={onChangeInicioPassagem}
          />
        )}
     
    
        <Text style={styles.textoCampo}>Término Hospedagem:</Text>
        <Pressable onPress={() => setShowTerminoHospedagem(true)}>
          <View style={styles.datePickerContainer}>
            <Text>{terminoHospedagem.toLocaleDateString()}</Text>
          </View>
        </Pressable>
        {showTerminoHospedagem && (
          <DateTimePicker
            value={terminoHospedagem}
            mode="date"
            display="default"
            onChange={onChangeTerminoHospedagem}
          />
        )}
     
        <Text style={styles.textoCampo}>Valor da Hospedagem:</Text>
        <TextInput
          style={styles.input}
          value={valorHospedagem}
          onChangeText={setValorHospedagem}
          keyboardType="numeric"
        />
       </View>
       <Pressable onPress={() => navigation.navigate("DetailsDiaria")}>
            <View style={styles.botaoAdicionar}>
              <LinearGradient
                style={styles.rectangle}
                locations={[0, 1]}
                colors={["#53e88b", "#53e88b"]}
              />
              <View style={styles.textoBotao}>
                <Text style={styles.texto}>Adicionar Diária</Text>
              </View>
            </View>
          </Pressable>

          <View style={[styles.priceInfo]}>
            <LinearGradient
              style={[styles.priceInfoChild, styles.priceLayout]}
              locations={[0, 1]}
              colors={["#00B0FF", "#00B0FF"]}
            >
              <Pressable
                onPress={() => navigation.navigate("GastosViagens")}
              >
                <View style={styles.textoBotao}>
                  <Text style={styles.texto}>Visualizar Viagens</Text>
                </View>
              </Pressable>
            </LinearGradient>
            </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: "#FFF",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
  },
  textoBotao: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 7,
  },
  botaoAdicionar: {
    width: 195,
    top: 10,
    justifyContent: "center",
    alignSelf: "center",
    bottom: "7.39%",
    height: 45,
    position: "absolute",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 13,
  },
  rectangle: {
    backgroundColor: "#53e88b",
    borderRadius: 10,
    height: "100%",
    position: "absolute",
    width: "100%",
  },

  priceInfo: {
    top: 80,
    width: 240,
    alignSelf: "center",
    marginBottom: 150,
  },  
  priceInfoChild: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_5xs,
    shadowOpacity: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 13,
  },
  priceLayout: {
    height: 45,
  },
  txt: {
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: FontFamily.bentonSansMedium,
  },
  text1: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 7,
    marginTop:10,
  },
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
  tiitle: {
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
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 40,
    marginTop:110,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  textoCampo: {
    fontWeight: "bold",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  datePickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
});

export default ViagemScreen;
