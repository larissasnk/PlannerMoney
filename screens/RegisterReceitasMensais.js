import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const CadastroReceitasMensais = () => {
  const navigation = useNavigation();
  const [mesSelecionado, setMesSelecionado] = useState("Janeiro");
  const [rendaMensal, setRendaMensal] = useState("");
  const [rendaExtra, setRendaExtra] = useState("");
  const [rendaEventual, setRendaEventual] = useState("");
  const [valorRendaEventual, setValorRendaEventual] = useState("");

  const adicionarReceitaMensal = () => {
    console.log("Mês selecionado:", mesSelecionado);
    console.log("Renda mensal:", rendaMensal);
    console.log("Renda extra:", rendaExtra);
    console.log("Renda eventual:", rendaEventual);
    console.log("Valor da renda eventual:", valorRendaEventual);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Image
          style={styles.imgPlanoFundo}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />

        <View style={styles.retanguloTitulo}>
          <View style={styles.textoTitulo}>
            <Text style={styles.titulo}>Planejando</Text>
            <Text style={styles.titulo}>Receitas</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()} 
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mês:</Text>
          <View style={styles.seletorContainer}>
            <Picker
              selectedValue={mesSelecionado}
              onValueChange={(itemValue) => setMesSelecionado(itemValue)}
              style={styles.seletor}
              dropdownIconColor="#53e88b"
            >
              <Picker.Item label="Janeiro" value="Janeiro" />
              <Picker.Item label="Fevereiro" value="Fevereiro" />
              <Picker.Item label="Março" value="Março" />
              <Picker.Item label="Abril" value="Abril" />
              <Picker.Item label="Maio" value="Maio" />
              <Picker.Item label="Junho" value="Junho" />
              <Picker.Item label="Julho" value="Julho" />
              <Picker.Item label="Agosto" value="Agosto" />
              <Picker.Item label="Setembro" value="Setembro" />
              <Picker.Item label="Outubro" value="Outubro" />
              <Picker.Item label="Novembro" value="Novembro" />
              <Picker.Item label="Dezembro" value="Dezembro" />
            </Picker>
          </View>

          <Text style={styles.label}>Renda Mensal:</Text>
          <TextInput
            style={styles.input}
            placeholder="Renda Mensal"
            value={rendaMensal}
            onChangeText={setRendaMensal}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Renda Extra:</Text>
          <TextInput
            style={styles.input}
            placeholder="Renda Extra"
            value={rendaExtra}
            onChangeText={setRendaExtra}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Renda Eventual:</Text>
          <TextInput
            style={styles.input}
            placeholder="Renda Eventual"
            value={rendaEventual}
            onChangeText={setRendaEventual}
          />

          <Text style={styles.label}>Valor da Renda Eventual:</Text>
          <TextInput
            style={styles.input}
            placeholder="Valor da Renda Eventual"
            value={valorRendaEventual}
            onChangeText={setValorRendaEventual}
            keyboardType="numeric"
          />
        </View>

        <Pressable onPress={adicionarReceitaMensal}>
          <View style={styles.botaoAdicionar}>
            <Text style={styles.textoBotao}>Adicionar</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("ReceitasMensais")}>
          <View style={styles.botaoVisualizar}>
            <Text style={styles.textoBotao}>Visualizar Receitas</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  retanguloTitulo: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 250,
    height: 88,
    marginBottom: 5,
    marginTop: 85,
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
  imgPlanoFundo: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  textoTitulo: {
    top: 7,
    alignSelf: "center",
  },
  titulo: {
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 33,
    fontSize: 24,
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 18,
    marginBottom: 5,
  },
  seletorContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  seletor: {
    width: "100%",
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  botaoAdicionar: {
    width: 180,
    top: 20,
    justifyContent: "center",
    alignSelf: "center",
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
  },
  botaoVisualizar: {
    width: 220,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    height: 45,
    backgroundColor: "#00B0FF",
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
});

export default CadastroReceitasMensais;
