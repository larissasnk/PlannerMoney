import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DetalhesDiariaScreen = () => {
  const navigation = useNavigation();
  const [dataDiaria, setDataDiaria] = useState(new Date());
  const [showDataDiaria, setShowDataDiaria] = useState(false);
  const [passagem, setPassagem] = useState("");
  const [alimentacao, setAlimentacao] = useState("");
  const [passeios, setPasseios] = useState("");
  const [transporte, setTransporte] = useState("");
  const [extras, setExtras] = useState("");
  const [totalDiaria, setTotalDiaria] = useState(0);

  const onChangeDataDiaria = (event, selectedDate) => {
    const currentDate = selectedDate || dataDiaria;
    setShowDataDiaria(Platform.OS === "ios");
    setDataDiaria(currentDate);
  };

  useEffect(() => {
    const total =
      parseFloat(passagem || 0) +
      parseFloat(alimentacao || 0) +
      parseFloat(passeios || 0) +
      parseFloat(transporte || 0) +
      parseFloat(extras || 0);
    setTotalDiaria(total);
  }, [passagem, alimentacao, passeios, transporte, extras]);

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

      <View style={styles.inputContainer}>
        <Text style={styles.textoCampo}>Data da Diária:</Text>
        <Pressable onPress={() => setShowDataDiaria(true)}>
          <View style={styles.datePickerContainer}>
            <Text>{dataDiaria.toLocaleDateString()}</Text>
          </View>
        </Pressable>
        {showDataDiaria && (
          <DateTimePicker
            value={dataDiaria}
            mode="date"
            display="default"
            onChange={onChangeDataDiaria}
          />
        )}
    
    
        <Text style={styles.textoCampo}>Passagem:</Text>
        <TextInput
          style={styles.input}
          value={passagem}
          onChangeText={setPassagem}
          keyboardType="numeric"
        />
   

        <Text style={styles.textoCampo}>Alimentação:</Text>
        <TextInput
          style={styles.input}
          value={alimentacao}
          onChangeText={setAlimentacao}
          keyboardType="numeric"
        />
    
        <Text style={styles.textoCampo}>Passeios:</Text>
        <TextInput
          style={styles.input}
          value={passeios}
          onChangeText={setPasseios}
          keyboardType="numeric"
        />
     
     
        <Text style={styles.textoCampo}>Transporte:</Text>
        <TextInput
          style={styles.input}
          value={transporte}
          onChangeText={setTransporte}
          keyboardType="numeric"
        />
     
     
        <Text style={styles.textoCampo}>Extras:</Text>
        <TextInput
          style={styles.input}
          value={extras}
          onChangeText={setExtras}
          keyboardType="numeric"
        />
   
    
        <Text style={[styles.textoCampo, {textAlign:"center", marginTop:20}]}>Total da Diária:</Text>
        <Text style={[styles.total, , {textAlign:"center"}]}>{totalDiaria.toFixed(2)}</Text>
     
        </View>
        <Pressable onPress={() => navigation.navigate("telaCompleta")}>
        <View style={styles.botaoVisualizar}>
          <Text style={styles.textoBotao}>Adicionar Diária</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  botaoVisualizar: {
    width: 220,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
    height: 45,
    backgroundColor: "#53e88b",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 13,
    marginBottom: 50,
  },
  textoBotao: {
    color: "#FFF",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
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
  titulo: {
    textAlign: "center",
    letterSpacing:  1,
    fontWeight: "bold",
    color: "black",
    lineHeight: 33,
    fontSize: 24,
  },
  container: {
    backgroundColor: "#FFFFFF", 
    flexGrow: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginTop:110,
    marginBottom: 15,
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
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default DetalhesDiariaScreen;
