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
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegisterDividas = () => {
  const navigation = useNavigation();

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [novoGasto, setNovoGasto] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [data, setData] = useState(null); // Inicializa a data como null

  const handleAddNovoGasto = () => {
    if (novoGasto) {
      setTransactions([...transactions, novoGasto]);
      setNovoGasto("");
    }
  };

  const addTransaction = () => {
    const newTransaction = {
      descricao: descricao,
      valor: valor,
      data: data,
    };
    setTransactions([...transactions, newTransaction]);
    setDescricao("");
    setValor("");
    setData(null);
  };

  return (
    <ScrollView
      style={styles.container}
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
          <Text style={styles.titulo}>Dívidas</Text>
          <Text style={styles.titulo}>Pendentes</Text>
        </View>
      </View>

      <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

      <View style={styles.inputContainer}>

        <Text style={styles.label}>Descrição: </Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.label}>Valor: </Text>
        <TextInput
          style={styles.input}
          placeholder="Valor"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Data de pagamento: </Text>
        <Pressable onPress={() => setShowDatePicker(true)}>
            <View style={styles.datePickerContainer}>
              <Text>
                {data ? data.toLocaleDateString() : "___ /___ /_____"}
              </Text>
            </View>
          </Pressable>

          {showDatePicker && (
            <DateTimePicker
              value={data || new Date()} // Define a data atual se data for null
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false); // Oculta o calendário quando a data é selecionada
                const currentDate = selectedDate || data;
                setData(currentDate);
              }}
            />
          )}
      </View>

      <Pressable onPress={addTransaction}>
        <View style={styles.botaoAdicionar}>
          <LinearGradient
            style={styles.gradient}
            locations={[0, 1]}
            colors={["#53e88b", "#53e88b"]}
          />
          <Text style={styles.textoBotao}>Adicionar</Text>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("DividasPendentes")}>
        <View style={styles.botaoVisualizar}>
          <LinearGradient
            style={styles.gradient}
            locations={[0, 1]}
            colors={["#00B0FF", "#00B0FF"]}
          />
          <View style={styles.textoVisualizarContainer}>
            <Text style={styles.textoBotao}>Visualizar Dívidas</Text>
            <MaterialIcons name="attach-money" size={26} left={5} color="white" />
          </View>
        </View>
      </Pressable>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  datePickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  gradient: {
    backgroundColor: Color.linear,
    borderRadius: 10,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  botaoAdicionar: {
    width: 180,
    marginTop: 120,
    justifyContent: "center",
    alignSelf: "center",
    height: 45,
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
  botaoVisualizar: {
    width: 250,
    marginTop: 30,
    alignSelf: "center",
    marginBottom: 150,
    height: 45,
    borderRadius: Border.br_5xs,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 13,
  },
  textoVisualizarContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    padding: 7,
  },
  textoBotao: {
    alignSelf: "center",
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: FontFamily.bentonSansMedium,
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
    fontFamily: FontFamily.bentonSansBold,
    lineHeight: 33,
    fontSize: FontSize.size_6xl,
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
  label: {
    fontWeight: "bold",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    marginBottom: 5,
  },
  textoCabecalho: {
    top: 7,
    alignSelf: "center",
  },
});

export default RegisterDividas;
