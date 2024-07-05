import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../src/services/firebaseConfig";
import CustomAlert from "../components/CustomAlert";

const EditReceitasMensais = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { mes, rendaMensal, rendaExtra, rendaEventual } = route.params;

  const [selectedRendaMensalIndex, setSelectedRendaMensalIndex] = useState(0);
  const [selectedRendaExtraIndex, setSelectedRendaExtraIndex] = useState(0);
  const [selectedRendaEventualIndex, setSelectedRendaEventualIndex] =
    useState(0);
  const [novoValorRendaMensal, setNovoValorRendaMensal] = useState("");
  const [novoNomeRendaExtra, setNovoNomeRendaExtra] = useState("");
  const [novoValorRendaExtra, setNovoValorRendaExtra] = useState("");
  const [novoNomeRendaEventual, setNovoNomeRendaEventual] = useState("");
  const [novoValorRendaEventual, setNovoValorRendaEventual] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSaveChanges = async () => {
    try {
      const docRef = doc(db, "receitaMensal", mes);

      // Verificando renda mensal
      if (
        novoValorRendaMensal !== "" &&
        rendaMensal.length > 0 &&
        rendaMensal[selectedRendaMensalIndex]
      ) {
        await updateDoc(
          doc(docRef, "rendaMensal", rendaMensal[selectedRendaMensalIndex].id),
          {
            valor: parseFloat(novoValorRendaMensal),
          }
        );
      }

      // Verificando renda extra
      if (
        novoNomeRendaExtra !== "" &&
        novoValorRendaExtra !== "" &&
        rendaExtra.length > 0 &&
        rendaExtra[selectedRendaExtraIndex]
      ) {
        await updateDoc(
          doc(docRef, "rendaExtra", rendaExtra[selectedRendaExtraIndex].id),
          {
            nome: novoNomeRendaExtra,
            valor: parseFloat(novoValorRendaExtra),
          }
        );
      }

      // Verificando renda eventual
      if (
        novoNomeRendaEventual !== "" &&
        novoValorRendaEventual !== "" &&
        rendaEventual.length > 0 &&
        rendaEventual[selectedRendaEventualIndex]
      ) {
        await updateDoc(
          doc(
            docRef,
            "rendaEventual",
            rendaEventual[selectedRendaEventualIndex].id
          ),
          {
            nome: novoNomeRendaEventual,
            valor: parseFloat(novoValorRendaEventual),
          }
        );
      }

      showAlert("Sucesso", "Alterações salvas com sucesso!", "success");
      console.log("Alterações salvas com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar as alterações: ", error);
      showAlert(
        "Erro",
        "Erro ao salvar as alterações. Tente novamente.",
        "error"
      );
    }
  };

  const showAlert = (title, message, type) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertType(type);
    setAlertVisible(true);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={34} color="black" />
          </Pressable>
          <Text style={styles.title}>Editar Receitas Mensais</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mês:</Text>
          <TextInput
            style={styles.input}
            value={mes}
            placeholder="Mês"
            editable={false}
          />

          <Text style={styles.label}>Renda Mensal:</Text>
          <Picker
            selectedValue={selectedRendaMensalIndex}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedRendaMensalIndex(itemIndex);
              setNovoValorRendaMensal(
                rendaMensal[itemIndex]?.valor.toFixed(2) || ""
              );
              console.log(
                "ID selecionado para renda mensal:",
                rendaMensal[itemIndex]?.id
              );
            }}
          >
            {rendaMensal.map((item, index) => (
              <Picker.Item
                key={index}
                label={`R$ ${item.valor.toFixed(2)}`}
                value={index}
              />
            ))}
          </Picker>

          <TextInput
            style={styles.input}
            placeholder="Digite o novo valor da renda mensal"
            keyboardType="numeric"
            onChangeText={(text) => setNovoValorRendaMensal(text)}
            value={novoValorRendaMensal}
          />

          <Text style={styles.label}>Renda Extra:</Text>
          <Picker
            selectedValue={selectedRendaExtraIndex}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedRendaExtraIndex(itemIndex);
              setNovoNomeRendaExtra(rendaExtra[itemIndex]?.nome || "");
              setNovoValorRendaExtra(
                rendaExtra[itemIndex]?.valor.toFixed(2) || ""
              );
              console.log(
                "ID selecionado para renda extra:",
                rendaExtra[itemIndex]?.id
              );
            }}
          >
            {rendaExtra.map((item, index) => (
              <Picker.Item
                key={index}
                label={`${item.nome}: R$ ${item.valor.toFixed(2)}`}
                value={index}
              />
            ))}
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Digite o novo nome da renda extra"
            onChangeText={(text) => setNovoNomeRendaExtra(text)}
            value={novoNomeRendaExtra}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o novo valor da renda extra"
            keyboardType="numeric"
            onChangeText={(text) => setNovoValorRendaExtra(text)}
            value={novoValorRendaExtra}
          />

          <Text style={styles.label}>Renda Eventual:</Text>
          <Picker
            selectedValue={selectedRendaEventualIndex}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedRendaEventualIndex(itemIndex);
              setNovoNomeRendaEventual(rendaEventual[itemIndex]?.nome || "");
              setNovoValorRendaEventual(
                rendaEventual[itemIndex]?.valor.toFixed(2) || ""
              );
              console.log(
                "Nome selecionado para renda eventual:",
                rendaEventual[itemIndex]?.nome
              );
            }}
          >
            {rendaEventual.map((item, index) => (
              <Picker.Item
                key={index}
                label={`${item.nome}: R$ ${item.valor.toFixed(2)}`}
                value={index}
              />
            ))}
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Digite o novo nome da renda eventual"
            onChangeText={(text) => setNovoNomeRendaEventual(text)}
            value={novoNomeRendaEventual}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o novo valor da renda eventual"
            keyboardType="numeric"
            onChangeText={(text) => setNovoValorRendaEventual(text)}
            value={novoValorRendaEventual}
          />

          <View style={styles.buttonContainer}>
            <Button title="Salvar Alterações" onPress={handleSaveChanges} />
          </View>
        </View>
      </View>

      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        alertType={alertType}
        onClose={() => setAlertVisible(false)}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default EditReceitasMensais;
