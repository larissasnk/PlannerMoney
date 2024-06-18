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
import { FontAwesome6 } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegisterGastosCartao = () => {
  const navigation = useNavigation();

  const [descricao, setdescricao] = useState("");
  const [valor, setvalor] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [isParcelado, setIsParcelado] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [data, setData] = useState(null); // Inicializa a data como null

  const toggleSwitch = (value) => {
    setswitchValue(value);
  };
  const handleNumberChange = (number) => {
    setSelectedNumber(number);
  };

  const addTransaction = () => {
    const newTransaction = {
      descricao: descricao,
      valor: valor,
      data: data,
    };
    setTransactions([...transactions, newTransaction]);
    setdescricao("");
    setvalor("");
    setdata("");
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
            <Text style={[styles.tiitle]}>Gastos com</Text>
            <Text style={[styles.tiitle]}>Cartão</Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconeVoltar}
        >
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.campoText}>Descrição: </Text>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setdescricao}
          />

          <Text style={styles.campoText}>Data: </Text>
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
          <Text style={styles.campoText}>Valor Total: </Text>
          <TextInput
            style={styles.input}
            placeholder="Valor total"
            value={valor}
            onChangeText={setvalor}
            keyboardType="numeric"
          />

          <View style={{ alignSelf: "center" }}>
            <RadioButton.Group
              onValueChange={(newValue) => setIsParcelado(newValue)}
              value={isParcelado}
            >
              <View style={styles.PositionRadio}>
                <Text
                  style={[styles.campoText, styles.PositionRadio, { top: 3 }]}
                >
                  Compra:
                </Text>
                <View style={styles.PositionRadio}>
                  <RadioButton value={false} />
                  <Text>À vista</Text>
                </View>
                <View style={styles.PositionRadio}>
                  <RadioButton value={true} />
                  <Text>Parcelado</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          {isParcelado && (
            <View style={{ top: 5, marginBottom: 10 }}>
              <Text style={[styles.campoText]}>Quantidade de Parcelas: </Text>
              <View style={styles.viewPicker}>
                <Picker
                  selectedValue={selectedNumber}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedNumber(itemValue)
                  }
                  style={styles.picker}
                  dropdownIconColor="#53e88b" // Cor do ícone de dropdown
                >
                  {/* Definindo opções para as parcelas */}
                  {[...Array(12)].map((_, index) => (
                    <Picker.Item
                      key={index}
                      label={`${index + 1}x`}
                      value={index + 1}
                    />
                  ))}
                </Picker>
              </View>
              <Text style={styles.campoText}>Valor Total: </Text>
              <TextInput
                style={styles.input}
                placeholder="Valor total"
                value={0}
                onChangeText={0}
                keyboardType="numeric"
              />
            </View>
          )}
          {/* <Button title="Adicionar" onPress={addTransaction} /> */}

          <Pressable onPress={addTransaction}>
            <View style={styles.ctaButton}>
              <LinearGradient
                style={styles.rectangle}
                locations={[0, 1]}
                colors={["#53e88b", "#53e88b"]}
              />
              <View style={styles.text1}>
                <Text style={styles.txt}>Adicionar</Text>
                <MaterialIcons
                  name="add-card"
                  size={32}
                  marginLeft={10}
                  top={0}
                  color="white"
                />
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("GastosCartao")}>
            <View style={styles.botaoVisualizar}>
              <Text style={styles.textoBotao}>Visualizar Gastos</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("GastosCartao")}>
            <View style={styles.text1}>
              <Text style={styles.txt}>Visualizar Gastos</Text>
              <FontAwesome6
                name="credit-card"
                size={26}
                top={2}
                marginLeft={10}
                color="white"
              />
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  botaoVisualizar: {
    width: 220,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 85,
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
  PositionRadio: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 3,
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
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
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

export default RegisterGastosCartao;
