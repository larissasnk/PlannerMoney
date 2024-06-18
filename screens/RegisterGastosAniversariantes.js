import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';

const RegistrarGastosAniversariantes = () => {
  const navigation = useNavigation();

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
  const [data, setData] = useState(null);

  const adicionarTransacao = () => {
    const novaTransacao = {
      descricao: descricao,
      valor: valor,
      data: data,
    };
    console.log(novaTransacao);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        style={styles.iconePadrao}
        contentFit="cover"
        source={require("../assets/pattern4.png")}
      />
      <View style={styles.retanguloTitulo}>
        <View style={styles.textoCentro}>
          <Text style={styles.titulo}>Gastos com</Text>
          <Text style={styles.titulo}>Aniversariantes</Text>
        </View>
      </View>

      <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

      <View style={styles.containerEntrada}>
        <Text style={styles.textoCampo}>Aniversariante: </Text>
        <TextInput
          style={styles.entrada}
          placeholder="Aniversariante"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.textoCampo}>Valor do presente: </Text>
        <TextInput
          style={styles.entrada}
          placeholder="Valor"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />

        <Text style={styles.textoCampo}>Data de pagamento:</Text>
        <Pressable onPress={() => setMostrarDatePicker(true)}>
          <View style={styles.containerDatePicker}>
            <Text>{data ? data.toLocaleDateString() : '___ /___ /_____'}</Text>
          </View>
        </Pressable>

        {mostrarDatePicker && (
          <DateTimePicker
            value={data || new Date()}
            mode="date"
            display="default"
            onChange={(event, dataSelecionada) => {
              setMostrarDatePicker(false);
              const dataAtual = dataSelecionada || data;
              setData(dataAtual);
            }}
          />
        )}
      </View>

      <Pressable onPress={adicionarTransacao}>
        <View style={styles.botaoCTA}>
          <LinearGradient
            style={styles.retanguloGradiente}
            locations={[0, 1]}
            colors={["#53e88b", "#53e88b"]}
          />
          <Text style={styles.textoBotao}>Adicionar</Text>
        </View>
      </Pressable>

      <View style={styles.infoPreco}>
        <LinearGradient
          style={styles.gradienteInfoPreco}
          locations={[0, 1]}
          colors={["#00B0FF", "#00B0FF"]}
        >
          <Pressable onPress={() => navigation.navigate("GastosAniversariantes")}>
            <View style={styles.textoBotaoInfo}>
              <Text style={styles.textoBotao}>Visualizar Dívidas</Text>
              <FontAwesome name="birthday-cake" size={24} color="white" left={10}/>
            </View>
          </Pressable>
        </LinearGradient>
      </View>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  iconePadrao: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  retanguloTitulo: {
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
  textoCentro: {
    top: 7,
    alignSelf: "center",
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
  retanguloDecorativo: {
    backgroundColor: "#f9a84d",
    borderRadius: Border.br_mini,
    position: "absolute",
    opacity: 0.3,
  },
  iconeVetor: {
    height: "36.44%",
    width: "22.22%",
    top: "70%",
    bottom: "32.44%",
    left: "50.78%",
  },
  grupo: {
    height: "5.54%",
    width: "12%",
    top: "1.70%",
    right: "81.33%",
    bottom: "89.78%",
    left: "3.67%",
    position: "absolute",
  },
  textoCampo: {
    fontWeight: "bold",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    marginBottom: 5,
  },
  containerEntrada: {
    paddingHorizontal: 20,
    top: 110,
    width: "100%",
    marginBottom: 20,
  },
  entrada: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  containerDatePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  botaoCTA: {
    width: 180,
    top: 110,
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
  retanguloGradiente: {
    backgroundColor: Color.linear,
    borderRadius: 10,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  textoBotao: {
    alignSelf: "center",
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: FontFamily.bentonSansMedium,
  },
  infoPreco: {
    top: 140,
    width: 260,
    alignSelf: "center",
    marginBottom: 150,
  },
  gradienteInfoPreco: {
    backgroundColor: Color.linear,
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
  textoBotaoInfo: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    padding: 7,
  },
});

export default RegistrarGastosAniversariantes;
