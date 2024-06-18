import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState } from "react";
import { RadioButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegisterMetodo502030 = () => {
  const navigation = useNavigation();

  const [essencial, setEssencial] = useState({
    item: "",
    previsto: "",
    real: "",
  });
  const [poupanca, setPoupanca] = useState({
    item: "",
    previsto: "",
    real: "",
  });
  const [desejos, setDesejos] = useState({ item: "", previsto: "", real: "" });

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
          style={styles.padraoIcone1}
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

        <View style={styles.containerInput}>
          <Text style={styles.textoCampo}> 50% Essencial: </Text>
          <View style={styles.visualizacaoPicker}>
            <Picker
              selectedValue={poupanca.item}
              onValueChange={(itemValue) =>
                setPoupanca({ ...poupanca, item: itemValue })
              }
            >
              <Picker.Item
                label="Objetivos financeiros"
                value="Objetivos financeiros"
              />
              <Picker.Item
                label="Reserva de emergência"
                value="Reserva de emergência"
              />
            </Picker>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <TextInput
              style={styles.input2}
              placeholder="Valor Previsto"
              value={poupanca.previsto}
              onChangeText={(text) => setPoupanca({ ...poupanca, previsto: text })}
            />

            <TextInput
              style={styles.input2}
              placeholder="Valor Real"
              value={poupanca.real}
              onChangeText={(text) => setPoupanca({ ...poupanca, real: text })}
            />
          </View>

          <Text style={styles.textoCampo}> 30% Desejos:</Text>
          <View style={styles.visualizacaoPicker}>
            <Picker
              selectedValue={essencial.item}
              onValueChange={(itemValue) =>
                setEssencial({ ...essencial, item: itemValue })
              }
            >
              <Picker.Item label="Alimentação" value="Alimentação" />
              <Picker.Item label="Moradia" value="Moradia" />
              <Picker.Item label="Saúde" value="Saúde" />
              <Picker.Item label="Transporte" value="Transporte" />
            </Picker>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <TextInput
              style={styles.input2}
              placeholder="Valor Previsto"
              value={essencial.previsto}
              onChangeText={(text) => setEssencial({ ...essencial, previsto: text })}
            />

            <TextInput
              style={styles.input2}
              placeholder="Valor Real"
              value={essencial.real}
              onChangeText={(text) => setEssencial({ ...essencial, real: text })}
            />
          </View>
          <Text style={styles.textoCampo}> 20% Poupança:</Text>
          <View style={styles.visualizacaoPicker}>
            <Picker
              selectedValue={desejos.item}
              onValueChange={(itemValue) =>
                setDesejos({ ...desejos, item: itemValue })
              }
            >
              <Picker.Item label="Compras" value="Compras" />
              <Picker.Item label="Hobbies" value="Hobbies" />
              <Picker.Item label="Jantar" value="Jantar" />
              <Picker.Item label="Lazer" value="Lazer" />
            </Picker>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <TextInput
              style={styles.input2}
              placeholder="Valor Previsto"
              value={desejos.previsto}
              onChangeText={(text) => setDesejos({ ...desejos, previsto: text })}
            />

            <TextInput
              style={styles.input2}
              placeholder="Valor Real"
              value={desejos.real}
              onChangeText={(text) => setDesejos({ ...desejos, real: text })}
            />
          </View>
          <Pressable onPress={null}>
            <View style={styles.botaoCta}>
              <LinearGradient
                style={styles.retangulo}
                locations={[0, 1]}
                colors={["#53e88b", "#53e88b"]}
              />

              <View style={styles.texto1}>
                <Text style={styles.txt}>Adicionar</Text>
              </View>
            </View>
          </Pressable>

          <View style={[styles.informacaoPreco]}>
            <LinearGradient
              style={[styles.filhoInformacaoPreco, styles.layoutPreco]}
              locations={[0, 1]}
              colors={["#00B0FF", "#00B0FF"]}
            >
              <Pressable
                onPress={() => navigation.navigate("Metodo502030")}
              >
                <View style={styles.texto1}>
                  <Text style={styles.txt}>Visualizar Método</Text>
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
  visualizacaoPicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  input2: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "48.5%",
  },
  textoCampo: {
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 18,
    marginBottom: 8,
    marginTop: 7,
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
  containerInput: {
    paddingHorizontal: 20,
    top: 100,
    width: "100%",
    marginBottom: 20,
  },
  botaoCta: {
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
    borderRadius: 10,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  texto1: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 7,
  },
  informacaoPreco: {
    top: 80,
    width: 250,
    alignSelf: "center",
    marginBottom: 250,
  },
  filhoInformacaoPreco: {
    backgroundColor: "#00B0FF",
    borderRadius: 8,
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
  texto1: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 7,
  },
  layoutPreco: {
    height: 45,
  },
  txt: {
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: FontFamily.bentonSansMedium,
  },
  padraoIcone: {
    width: 375,
    left: 0,
    top: 0,
    height: 812,
  },
  padraoIcone1: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  visualizacaoPicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerInput: {
    paddingHorizontal: 20,
    top: 100,
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
  input2: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "48.5%",
  },
});

export default RegisterMetodo502030;
