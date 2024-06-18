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
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState } from "react";
import { RadioButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const PlanilhaMercado = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [gastosPrevistos, setGastosPrevistos] = useState("");
  const [gastosRealizados, setGastosRealizados] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [data, setData] = useState(null); // Inicializa a data como null
  const [isConjugue, setIsConjugue] = useState(true); // Default is cônjuge
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [descricao, setdescricao] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedUnit, setSelectedUnit] = React.useState("unidade");

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
          style={styles.patternIcon1}
          contentFit="cover"
          source={require("../assets/pattern4.png")}
        />
        <View style={styles.rectangle1}>
          <View style={[styles.text]}>
            <Text style={[styles.tiitle]}>Planilha</Text>
            <Text style={[styles.tiitle]}>Mercado</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.campoText}>Item: </Text>
          <TextInput
            style={styles.input}
            placeholder="Item"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.campoText}>Valor: </Text>
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={descricao}
            onChangeText={setdescricao}
          />

          <Text style={styles.campoText}>Unidade:</Text>
          <View style={styles.viewPicker}>
            <Picker
              selectedValue={descricao}
              onValueChange={(itemValue) => setSelectedUnit(itemValue)}
            >
              <Picker.Item label="Unidade" value="unidade" />
              <Picker.Item label="Kg" value="kg" />
            </Picker>
          </View>
          <Text style={styles.campoText}>Quantidade:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a quantidade"
            value={descricao}
            onChangeText={(text) => setQuantity(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          />
          <Pressable onPress={addTransaction}>
            <View style={styles.ctaButton}>
              <LinearGradient
                style={styles.rectangle}
                locations={[0, 1]}
                colors={["#53e88b", "#53e88b"]}
              />

              <View style={styles.text1}>
                <Text style={styles.txt}>Adicionar</Text>
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
                onPress={() => navigation.navigate("PlanilhaMercado")}
              >
                <View style={styles.text1}>
                  <Text style={styles.txt}>Visualizar Planilha</Text>
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
  datePickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
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
    fontFamily: FontFamily.bentonSansRegular,
  },

  createAccount: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.bentonSansRegular,
    position: "absolute",
    alignSelf: "center",
  },
  rectangle: {
    backgroundColor: Color.linear,
    borderRadius: 10,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  ctaButton: {
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
    borderRadius: Border.br_mini,
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
  icon: {
    opacity: 0.29,
  },
  deliveryPosition: {
    marginTop: -30,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: 50,
    position: "absolute",
  },
  subPosition: {
    marginTop: -47.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  discountPosition: {
    color: Color.colorGray_100,
    marginTop: -5.5,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: 56,
    position: "absolute",
  },
  totalTypo: {
    fontSize: 26,
    fontWeight: "bold",
    color: Color.colorGray_100,
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansBold,
    top: 90,
    position: "absolute",
  },
  discountPrice: {
    left: 210,
  },
  deliveryChargePrice: {
    left: 210,
  },

  total: {
    left: "0%",
  },
  totalPrice: {
    left: 180,
  },
  campoView: {
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
  campoText: {
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
  tiitle: {
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
    color: Color.colorGray_200,
    fontFamily: FontFamily.bentonSansBold,
    lineHeight: 33,
    fontSize: FontSize.size_6xl,
  },
  patternIcon: {
    width: 375,
    left: 0,
    top: 0,
    height: 812,
  },
  patternIcon1: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  viewPicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
  transactionContainer: {
    top: 120,
    width: "100%",
    marginBottom: 20,
  },
  tableContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    overflow: "hidden",
    width: 350,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  tableHeader: {
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
  columnHeader: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  columnData: {
    flex: 1,
    textAlign: "center",
  },
  infoContainer: {
    top: 40,
    height: 250,
  },
});

export default PlanilhaMercado;
