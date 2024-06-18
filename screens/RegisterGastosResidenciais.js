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
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { FontAwesome6 } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const RegistrarGastosResidenciais = () => {
  const navigation = useNavigation();

  const [switchValue, setSwitchValue] = useState(false);
  const [gastoSelecionado, setGastoSelecionado] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [transacoes, setTransacoes] = useState([]);
  const [numeroSelecionado, setNumeroSelecionado] = useState("");
  const [statusSelecionado, setStatusSelecionado] = useState("");
  const [novosGastos, setNovosGastos] = useState([]);
  const [novoGasto, setNovoGasto] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dataVencimento, setDataVencimento] = useState(null); // Inicializa a data como null

  const statusCadastrados = ["Pago", "Pendente", "Vencido"];

  const gastosCadastrados = ["Aluguel", "Energia", "Internet", "Gás", "Água"];

  const adicionarNovoGasto = () => {
    if (novoGasto) {
      setNovosGastos([...novosGastos, novoGasto]);
      setNovoGasto("");
    }
  };

  const toggleSwitch = (valor) => {
    setSwitchValue(valor);
  };
  const handleNumberChange = (numero) => {
    setNumeroSelecionado(numero);
  };

  const adicionarTransacao = () => {
    const novaTransacao = {
      descricao: descricao,
      valor: valor,
      data: data,
      status: statusSelecionado,
    };
    setTransacoes([...transacoes, novaTransacao]);
    setDescricao("");
    setValor("");
    setData("");
    setStatusSelecionado("");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        style={styles.padraoIcon1}
        contentFit="cover"
        source={require("../assets/pattern4.png")}
      />
      <View style={styles.retangulo1}>
        <View style={[styles.texto]}>
          <Text style={[styles.titulo]}>Gastos</Text>
          <Text style={[styles.titulo]}>Residenciais</Text>
        </View>
      </View>

      <Pressable
          onPress={() => navigation.goBack()} 
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

      <View style={styles.containerInput}>
        <Text style={styles.textoCampo}>Gastos Cadastrados:</Text>
        <View style={styles.viewPicker}>
          <Picker
            selectedValue={gastoSelecionado}
            onValueChange={(itemValue, itemIndex) =>
              setGastoSelecionado(itemValue)
            }
            style={styles.seletor}
          >
            <Picker.Item label="Selecione um gasto cadastrado..." value="" />
            {gastosCadastrados.map((gasto, index) => (
              <Picker.Item key={index} label={gasto} value={gasto} />
            ))}
            {novosGastos.map((gasto, index) => (
              <Picker.Item key={index} label={gasto} value={gasto} />
            ))}
          </Picker>
        </View>

        <Text style={styles.textoCampo}>Novo Gasto:</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Digite um novo gasto"
            value={novoGasto}
            onChangeText={setNovoGasto}
          />
          <Pressable onPress={adicionarNovoGasto}>
            <Ionicons
              name="add-circle"
              size={38}
              left={2}
              bottom={5}
              color="#53e88b"
            />
          </Pressable>
        </View>

        <Text style={styles.textoCampo}>Valor: </Text>
        <TextInput
          style={styles.input}
          placeholder="Valor"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.textoCampo}>Vencimento: </Text>
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
        <Text style={styles.textoCampo}>Status: </Text>
        <View style={styles.viewPicker}>
          {statusCadastrados.map((status, index) => (
            <RadioButton.Item
              key={index}
              label={status}
              value={status}
              status={statusSelecionado === status ? "checked" : "unchecked"}
              onPress={() => setStatusSelecionado(status)}
              color="#53e88b"
            />
          ))}
        </View>
      </View>

      <Pressable onPress={adicionarTransacao}>
        <View style={styles.botaoCTA}>
          <LinearGradient
            style={styles.retangulo}
            locations={[0, 1]}
            colors={["#53e88b", "#53e88b"]}
          />

          <Text style={styles.txt}>Adicionar</Text>
        </View>
      </Pressable>

      <View style={[styles.informacaoPreco]}>
        <LinearGradient
          style={[styles.filhoInformacaoPreco, styles.layoutPreco]}
          locations={[0, 1]}
          colors={["#00B0FF", "#00B0FF"]}
        >
          <Pressable onPress={() => navigation.navigate("GastosResidenciais")}>
            <View style={styles.texto1}>
              <Text style={styles.txt}>Visualizar Gastos</Text>
              <Ionicons name="home" size={26} left={5} color="white" />
            </View>
          </Pressable>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  datePickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  viewPicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  seletor: {
    width: "100%",
    color: "#000",
    fontFamily: FontFamily.bentonSansRegular,
  },

  retangulo: {
    backgroundColor: Color.linear,
    borderRadius: 10,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  botaoCTA: {
    width: 180,
    top: 110,
    justifyContent: "center",
    alignSelf: "center",
    bottom: "7.39%",
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
  txt: {
    alignSelf: "center",
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: FontFamily.bentonSansMedium,
  },
  filhoInformacaoPreco: {
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
    padding: 7,
  },
  informacaoPreco: {
    top: 140,
    width: 280,
    alignSelf: "center",
    marginBottom: 150,
  },

  viewCampo: {
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
  padraoIcon: {
    width: 375,
    left: 0,
    top: 0,
    height: 812,
  },
  padraoIcon1: {
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
  containerInput: {
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
});

export default RegistrarGastosResidenciais;
