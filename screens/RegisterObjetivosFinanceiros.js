import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const RegisterObjetivosFinanceiros = () => {
  const navigation = useNavigation();
  const [tipoObjetivo, setTipoObjetivo] = useState("curto");
  const [dataObjetivo, setDataObjetivo] = useState("");
  const [valorObjetivo, setValorObjetivo] = useState("");
  const [planoObjetivo, setPlanoObjetivo] = useState("");
  const [objetivos, setObjetivos] = useState([]);

  const adicionarObjetivo = () => {
    const novoObjetivo = {
      tipo: tipoObjetivo,
      data: dataObjetivo,
      valor: valorObjetivo,
      plano: planoObjetivo,
    };
    setObjetivos([...objetivos, novoObjetivo]);
    setTipoObjetivo("curto");
    setDataObjetivo("");
    setValorObjetivo("");
    setPlanoObjetivo("");
    navegacao.navigate("VisualizarObjetivos", {
      objetivos: [...objetivos, novoObjetivo],
    });
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
          style={styles.patternIcon1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.rectangle1}>
          <View style={styles.text}>
            <Text style={styles.titulo}>Objetivos</Text>
            <Text style={styles.titulo}>Financeiros</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.campoTexto}>Tipo de Objetivo: </Text>
          <View style={styles.viewPicker}>
            <Picker
              selectedValue={tipoObjetivo}
              onValueChange={(itemValue) => setTipoObjetivo(itemValue)}
              style={styles.picker}
              dropdownIconColor="#53e88b"
            >
              <Picker.Item label="Curto Prazo" value="curto" />
              <Picker.Item label="Médio Prazo" value="medio" />
              <Picker.Item label="Longo Prazo" value="longo" />
            </Picker>
          </View>

          <Text style={styles.campoTexto}>Data: </Text>
          <TextInput
            style={styles.input}
            placeholder="Data"
            value={dataObjetivo}
            onChangeText={setDataObjetivo}
            keyboardType="numeric"
          />

          <Text style={styles.campoTexto}>Valor do Objetivo: </Text>
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={valorObjetivo}
            onChangeText={setValorObjetivo}
            keyboardType="numeric"
          />

          <Text style={styles.campoTexto}>Plano para Alcançar: </Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Descreva seu plano"
            value={planoObjetivo}
            onChangeText={setPlanoObjetivo}
            multiline
            numberOfLines={4}
          />

          <Pressable onPress={adicionarObjetivo}>
            <View style={styles.botaoAdicionar}>
              <LinearGradient
                style={styles.rectangle}
                locations={[0, 1]}
                colors={["#53e88b", "#53e88b"]}
              />
              <View style={styles.textoBotao}>
                <Text style={styles.texto}>Adicionar</Text>
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
                onPress={() => navigation.navigate("ObjetivosFinanceiros")}
              >
                <View style={styles.text1}>
                  <Text style={styles.txt}>Visualizar objetivos</Text>
                </View>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  patternIcon1: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  txt: {
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: FontFamily.bentonSansMedium,
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
  text1: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 7,
  },
  priceInfo: {
    top: 80,
    width: 280,
    alignSelf: "center",
    marginBottom: 150,
  },
  priceLayout: {
    height: 45,
  },
  PositionRadio: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewPicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    color: "#000",
  },

  createAccount: {
    fontSize: 18,
    color: "#fff",
    position: "absolute",
    alignSelf: "center",
  },
  rectangle: {
    backgroundColor: "#53e88b",
    borderRadius: 10,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  botaoAdicionar: {
    width: 180,
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
  rectanglePosition: {
    top: "52.5%",
    height: "70%",
    left: "15%",
    position: "absolute",
    width: "100%",
  },
  rectangle6: {
    backgroundColor: "#f9a84d",
    borderRadius: 5,
    position: "absolute",
    opacity: 0.3,
  },
  vectorIcon: {
    height: "36.44%",
    width: "22.22%",
    top: "70%",
    bottom: "32.44%",
    left: "50.78%",
  },
  group: {
    height: "5.54%",
    width: "12%",
    top: "1.70%",
    right: "81.33%",
    bottom: "89.78%",
    left: "3.67%",
    position: "absolute",
  },

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
  text: {
    top: 7,
    alignSelf: "center",
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
    letterSpacing:  1,
    fontWeight: "bold",
    color: "black",
    lineHeight: 33,
    fontSize: 24,
  },
  patternIcon1: {
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
  inputContainer: {
    paddingHorizontal: 20,
    top: 110,
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  campoTexto: {
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 18,
    marginBottom: 5,
  },
});

export default RegisterObjetivosFinanceiros;

