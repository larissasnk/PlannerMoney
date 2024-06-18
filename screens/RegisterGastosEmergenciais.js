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
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegisterGastosEmergenciais = () => {
  const navegacao = useNavigation();

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [data, setData] = useState(null);

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
          style={styles.imagemPadrao}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.cabecalho}>
          <View style={styles.textoCabecalho}>
            <Text style={styles.titulo}>Gastos</Text>
            <Text style={styles.titulo}>Emergenciais</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navegacao.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.containerInputs}>
          <Text style={styles.campoTexto}>Descrição: </Text>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
          />

          <Text style={styles.campoTexto}>Data: </Text>
          <Pressable onPress={() => setShowDatePicker(true)}>
            <View style={styles.containerData}>
              <Text>
                {data ? data.toLocaleDateString() : "___ /___ /_____"}
              </Text>
            </View>
          </Pressable>

          {showDatePicker && (
            <DateTimePicker
              value={data || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                const currentDate = selectedDate || data;
                setData(currentDate);
              }}
            />
          )}

          <Text style={styles.campoTexto}>Valor Total: </Text>
          <TextInput
            style={styles.input}
            placeholder="Valor total"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
          />

          <Pressable onPress={null}>
            <View style={styles.botaoAdicionar}>
              <LinearGradient
                style={styles.retangulo}
                locations={[0, 1]}
                colors={["#53e88b", "#53e88b"]}
              />
              <View style={styles.textoBotao}>
                <Text style={styles.texto}>Adicionar</Text>
              </View>
            </View>
          </Pressable>

          <View style={styles.infoPreco}>
            <LinearGradient
              style={[styles.infoPrecoFilho, styles.layoutPreco]}
              locations={[0, 1]}
              colors={["#00B0FF", "#00B0FF"]}
            >
              <Pressable onPress={() => navegacao.navigate("GastosEmergenciais")}>
                <View style={styles.textoVisualizarGastos}>
                  <Text style={styles.textoVisualizar}>Visualizar Gastos</Text>
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
  containerData: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  infoPrecoFilho: {
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
  textoVisualizarGastos: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 7,
  },
  infoPreco: {
    top: 80,
    width: 220,
    alignSelf: "center",
    marginBottom: 150,
  },
  layoutPreco: {
    height: 45,
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
  retangulo: {
    backgroundColor: "#53e88b",
    borderRadius: 10,
    height: "100%",
    position: "absolute",
    width: "100%",
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
  textoCabecalho: {
    top: 7,
    alignSelf: "center",
  },
  cabecalho: {
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
    lineHeight: 33,
    fontSize: 24,
  },
  campoTexto: {
    fontWeight: "bold",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    marginBottom: 5,
  },
  imagemPadrao: {
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
  containerInputs: {
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
  textoVisualizar: {
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: FontFamily.bentonSansMedium,
  },
});

export default RegisterGastosEmergenciais;
