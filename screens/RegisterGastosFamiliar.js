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

const RegisterGastosFamiliares = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [gastosPrevistos, setGastosPrevistos] = useState("");
  const [gastosRealizados, setGastosRealizados] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [data, setData] = useState(null); // Inicializa a data como null
  const [isConjugue, setIsConjugue] = useState(true); // Default is cônjuge
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [descricao, setdescricao] = useState("");

  const addTransaction = () => {
    const newTransaction = {
      nome: nome,
      descricao: descricao,
      gastosPrevistos: gastosPrevistos,
      gastosRealizados: gastosRealizados,
      data: data,
      tipo: isConjugue ? "Cônjuge" : "Filho", // Adiciona o tipo ao novo registro
    };
    setTransactions([...transactions, newTransaction]);
    setNome("");
    setdescricao("");
    setGastosPrevistos("");
    setGastosRealizados("");
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
          style={styles.iconePadrao1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.retangulo1}>
          <View style={[styles.texto]}>
            <Text style={[styles.titulo]}>Gastos</Text>
            <Text style={[styles.titulo]}>Familiares</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.contenedorInput}>
          <View style={{ marginBottom: 15 }}>
            <RadioButton.Group
              onValueChange={(novoValor) => setIsConjugue(novoValor)}
              value={isConjugue}
            >
              <View style={styles.posicaoRadio}>
                <Text
                  style={[styles.textoCampo, styles.posicaoRadio, { top: 3 }]}
                >
                  Tipo de Membro:
                </Text>
                <View style={styles.posicaoRadio}>
                  <RadioButton value={true} />
                  <Text>Cônjuge</Text>
                </View>
                <View style={styles.posicaoRadio}>
                  <RadioButton value={false} />
                  <Text>Filho</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <Text style={styles.textoCampo}>Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.textoCampo}>Descrição: </Text>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setdescricao}
          />

          <Text style={styles.textoCampo}>Gastos Previstos: </Text>
          <TextInput
            style={[styles.input]}
            placeholder="Gastos previstos"
            value={gastosPrevistos}
            onChangeText={setGastosPrevistos}
            keyboardType="numeric"
          />
          <Text style={styles.textoCampo}>Gastos Realizados: </Text>
          <TextInput
            style={styles.input}
            placeholder="Gastos realizados"
            value={gastosRealizados}
            onChangeText={setGastosRealizados}
            keyboardType="numeric"
          />

          <Text style={styles.textoCampo}>Data de pagamento:</Text>
          <Pressable onPress={() => setShowDatePicker(true)}>
            <View style={styles.contenedorDatePicker}>
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
              onChange={(evento, dataSelecionada) => {
                setShowDatePicker(false); // Oculta o calendário quando a data é selecionada
                const dataAtual = dataSelecionada || data;
                setData(dataAtual);
              }}
            />
          )}

          <Pressable onPress={addTransaction}>
            <View style={styles.botaoCTA}>
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

          <View style={[styles.informacoesPreco]}>
            <LinearGradient
              style={[styles.filhoInformacoesPreco, styles.layoutPreco]}
              locations={[0, 1]}
              colors={["#00B0FF", "#00B0FF"]}
            >
              <Pressable
                onPress={() => navigation.navigate("GastosFamiliares")}
              >
                <View style={styles.texto1}>
                  <Text style={styles.txt}>Visualizar Custos</Text>
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
  contenedorDatePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  posicaoRadio: {
    flexDirection: "row",
    alignItems: "center",
  },
  visorEscolha: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  escolher: {
    width: "100%",
    color: "#000",
    fontFamily: FontFamily.bentonSansRegular,
  },

  criarConta: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.bentonSansRegular,
    position: "absolute",
    alignSelf: "center",
  },
  retangulo: {
    backgroundColor: Color.linear,
    borderRadius: 10,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  botaoCTA: {
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
  posicaoRetangulo: {
    top: "52.5%",
    height: "70%",
    left: "15%",
    position: "absolute",
    width: "100%",
  },
  retangulo6: {
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
    top: "1    .70%",
    right: "81.33%",
    bottom: "89.78%",
    left: "3.67%",
    position: "absolute",
  },

  txt: {
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: FontFamily.bentonSansMedium,
  },
  filhoInformacoesPreco: {
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
  texto1: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 7,
  },
  informacoesPreco: {
    top: 80,
    width: 280,
    alignSelf: "center",
    marginBottom: 150,
  },
  layoutPreco: {
    height: 45,
  },
  icone: {
    opacity: 0.29,
  },
  posicaoEntrega: {
    marginTop: -30,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: 50,
    position: "absolute",
  },
  posicaoSub: {
    marginTop: -47.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  posicaoDesconto: {
    color: Color.colorGray_100,
    marginTop: -5.5,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: 56,
    position: "absolute",
  },
  typoTotal: {
    fontSize: 26,
    fontWeight: "bold",
    color: Color.colorGray_100,
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansBold,
    top: 90,
    position: "absolute",
  },
  precoDesconto: {
    left: 210,
  },
  precoEntrega: {
    left: 210,
  },

  total: {
    left: "0%",
  },
  precoTotal: {
    left: 180,
  },
  visorCampo: {
    opacity: 0.1,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.linear,
    borderRadius: Border.br_lg_5,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 26,
    },
  },
  textoCampo: {
    fontWeight: "bold",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    marginBottom: 5,
  },
  teste: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    alignSelf: "center",
    top: 70,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
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
  iconePadrao: {
    width: 375,
    left: 0,
    top: 0,
    height: 812,
  },
  iconePadrao1: {
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
  contenedorInput: {
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
  contenedorTransacao: {
    top: 120,
    width: "100%",
    marginBottom: 20,
  },
  contenedorTabela: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    overflow: "hidden",
    width: 350,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  cabecalhoTabela: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    top: 120,
  },
  colunaCabecalho: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  linhaTransacao: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  colunaDado: {
    flex: 1,
    textAlign: "center",
  },
  contenedorInformacao: {
    top: 40,
    height: 250,
  },
});

export default RegisterGastosFamiliares;
