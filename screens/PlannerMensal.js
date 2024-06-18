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
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState } from "react";

const PlannerMensal = () => {
  const navigation = useNavigation();
  const [switchValue, setswitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setswitchValue(value);
  };

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [data, setData] = useState(null); // Inicializa a data como null
  const [transacoes, setTransacoes] = useState([]);

  const adicionarTransacao = () => {
    const novaTransacao = {
      descricao: descricao,
      valor: valor,
      data: data,
    };
    setTransacoes([...transacoes, novaTransacao]);
    setDescricao("");
    setValor("");
    setData("");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.iconePadrao}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.retanguloTitulo}>
          <View style={[styles.textoTitulo]}>
            <Text style={[styles.titulo]}>Planejamento</Text>
            <Text style={[styles.titulo]}>Mensal</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.viewSwitch}>
          <Text
            style={[
              styles.textoSwitch,
              { color: switchValue ? "red" : "green" },
            ]}
          >
            {switchValue ? "Adicionar Gastos" : "Adicionar Ganhos"}
          </Text>

          <Switch
            style={styles.switch}
            trackColor={{ false: "green", true: "red" }}
            thumbColor={switchValue ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.textoCampo}>Descrição: </Text>

          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
          />

          <Text style={styles.textoCampo}>Valor: </Text>
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
          />
          <Text style={styles.textoCampo}>Data: </Text>
        <Pressable onPress={() => setShowDatePicker(true)}>
          <View style={styles.datePickerContainer}>
          <Text>{data ? data.toLocaleDateString() : '___ /___ /_____'}</Text>

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

          <Pressable onPress={adicionarTransacao}>
            <View style={styles.botaoAdicionar}>
              <Text style={styles.textoBotaoAdicionar}>Adicionar</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.containerTabela}>
          <View style={styles.cabecalhoTabela}>
            <Text style={styles.textoCabecalhoColuna}>Descrição</Text>
            <Text style={styles.textoCabecalhoColuna}>Valor</Text>
            <Text style={styles.textoCabecalhoColuna}>Data</Text>
          </View>
          <ScrollView
            style={styles.containerTransacoes}
            nestedScrollEnabled={true}
          >
            <View style={styles.tabela}>
              {transacoes.map((transacao, index) => (
                <View key={index} style={styles.linhaTransacao}>
                  <Text style={styles.textoColuna}>{transacao.descricao}</Text>
                  <Text style={styles.textoColuna}>{transacao.valor}</Text>
                  <Text style={styles.textoColuna}>{transacao.data}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={[styles.infoPreco]}>
          <LinearGradient
            style={[styles.infoPrecoFilho, styles.layoutPreco]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          >
            <Image
              style={[styles.icone, styles.layoutPreco]}
              contentFit="cover"
              source={require("../assets/9297991.svg")}
            />
            <View style={styles.textoInfoPreco}>
              <Text style={[styles.gastos, styles.posicaoGastos, styles.texto]}>
                Gastos do mês
              </Text>
              <Text style={[styles.ganhos, styles.posicaoGanhos, styles.texto]}>
                Ganhos do mês
              </Text>

              <Text
                style={[styles.valorGastos, styles.posicaoGastos, styles.texto]}
              >
                $ 20,00
              </Text>
              <Text
                style={[styles.valorGanhos, styles.posicaoGanhos, styles.texto]}
              >
                $ 10,00
              </Text>

              <Text style={[styles.total, styles.totalTipografia]}>Total</Text>
              <Text style={[styles.valorTotal, styles.totalTipografia]}>
                $ 150,00
              </Text>
            </View>
          </LinearGradient>
        </View>
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
  textoBotaoAdicionar: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.bentonSansRegular,
    position: "absolute",
    alignSelf: "center",
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
  textoTitulo: {
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
  iconePadrao: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  containerInput: {
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
  textoCampo: {
    fontWeight: "bold",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    marginBottom:5,
  },
  containerTransacoes: {
    top: 120,
    width: "100%",
    marginBottom: 20,
  },
  tabela: {
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
  textoCabecalhoColuna: {
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
  textoColuna: {
    flex: 1,
    textAlign: "center",
  },
  containerTabela: {
    top: 20,
    height: 250,
  },
  textoSwitch: {
    top: 10,
    alignSelf: "center",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
  },
  switch: {
    alignSelf: "center",
    top: 3,
  },
  viewSwitch: {
    top: 95,
  },
  infoPreco: {
    top: 170,
    width: 350,
    height: 300,
    alignSelf: "center",
    marginBottom: 80,
  },
  infoPrecoFilho: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_3xl,
    shadowOpacity: 3,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    left: 0,
    top: 0,
  },
  layoutPreco: {
    height: 150,
  },
  icone: {
    opacity: 0.29,
  },
  textoInfoPreco: {
    top: 0,
    marginTop: 0,
    width: "85.01%",
    right: "6.63%",
    left: "8.36%",
    height: 95,
    position: "absolute",
  },
  gastos: {
    fontWeight: "bold",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: 54,
    position: "absolute",
    color: Color.colorGray_100,
    marginTop: -5.5,
    letterSpacing: 1,
  },
  ganhos: {
    fontWeight: "bold",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: 50,
    position: "absolute",
    color: Color.colorGray_100,
    marginTop: -26.5,
    letterSpacing: 1,
  },
  valorGastos: {
    left: 210,
    fontWeight: "bold",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: 54,
    position: "absolute",
    color: Color.colorGray_100,
    marginTop: -5.5,
    letterSpacing: 1,
  },
  valorGanhos: {
    left: 210,
    fontWeight: "bold",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: 50,
    position: "absolute",
    color: Color.colorGray_100,
    marginTop: -26.5,
    letterSpacing: 1,
  },
  total: {
    left: "0%",
  },
  valorTotal: {
    left: 180,
  },
  totalTipografia: {
    fontSize: 26,
    fontWeight: "bold",
    color: Color.colorGray_100,
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansBold,
    top: 90,
    position: "absolute",
  },
});

export default PlannerMensal;
