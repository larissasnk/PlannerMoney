import React, {useState} from "react";
import {Image} from "expo-image";
import {StyleSheet, Text, View, TextInput, ScrollView, Pressable} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {db} from "../src/services/firebaseConfig";
import {addDoc, collection, doc, setDoc, getDoc} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import CustomAlert from "../components/CustomAlert";

const CadastroReceitasMensais = () => {
  const auth = getAuth();
  const users = auth.currentUser;
  const userId = users ? users.uid : null;
  const navigation = useNavigation();
  const [mesSelecionado, setMesSelecionado] = useState(null);
  const [nomeRendaExtra, setNomeRendaExtra] = useState("");
  const [rendaMensal, setRendaMensal] = useState("");
  const [rendaExtra, setRendaExtra] = useState("");
  const [rendaEventual, setRendaEventual] = useState("");
  const [valorRendaEventual, setValorRendaEventual] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const adicionarReceitaMensal = async () => {
    if (isAdding) {
      return;
    }
    setIsAdding(true);

    // Validar se mês foi selecionado
    if (!mesSelecionado) {
      showAlert("Erro", "Mês não selecionado.", "error");
      setIsAdding(false);
      return;
    }

    // Validar se pelo menos um campo foi preenchido
    if (!rendaMensal && !nomeRendaExtra && !rendaExtra && !rendaEventual && !valorRendaEventual) {
      showAlert("Erro", "Preencha pelo menos um campo.", "error");
      setIsAdding(false);
      return;
    }

    const rendaMensalValue = parseFloat(rendaMensal) || 0;
    const rendaExtraValue = parseFloat(rendaExtra) || 0;
    const valorRendaEventualValue = parseFloat(valorRendaEventual) || 0;

    try {
      // Verificar se o documento de mês já existe
      const mesDocRef = doc(db, "receitaMensal", mesSelecionado);
      const mesDocSnap = await getDoc(mesDocRef);

      if (mesDocSnap.exists()) {
        // Atualizar dados do mês existente
        const totalAtual = mesDocSnap.data().total || 0;
        await setDoc(mesDocRef, {
          users: {uid: userId},
          nome: mesSelecionado,
          total: totalAtual + rendaMensalValue + rendaExtraValue + valorRendaEventualValue
        });
      } else {
        // Criar novo documento de mês
        await setDoc(mesDocRef, {
          users: {uid: userId},
          nome: mesSelecionado,
          total: rendaMensalValue + rendaExtraValue + valorRendaEventualValue
        });
      }

      // Adicionar renda mensal diretamente ao total do mês
      if (rendaMensalValue > 0) {
        const rendaMensalDocRef = await addDoc(collection(mesDocRef, "rendaMensal"), {
          valor: rendaMensalValue
        });
        console.log("ID do documento de Renda Mensal:", rendaMensalDocRef.id);
      }

      // Adicionar renda extra, se houver
      if (nomeRendaExtra && rendaExtraValue > 0) {
        const rendaExtraDocRef = await addDoc(collection(mesDocRef, "rendaExtra"), {
          nome: nomeRendaExtra,
          valor: rendaExtraValue
        });
        console.log("ID do documento de Renda Extra:", rendaExtraDocRef.id);
      } else if (nomeRendaExtra && rendaExtraValue <= 0) {
        showAlert("Erro", "Informe o valor da Renda Extra.", "error");
        setIsAdding(false);
        return;
      } else if (!nomeRendaExtra && rendaExtraValue > 0) {
        showAlert("Erro", "Informe o nome da Renda Extra.", "error");
        setIsAdding(false);
        return;
      }

      // Adicionar renda eventual, se houver
      if (rendaEventual && valorRendaEventualValue > 0) {
        const rendaEventualDocRef = await addDoc(collection(mesDocRef, "rendaEventual"), {
          nome: rendaEventual,
          valor: valorRendaEventualValue
        });
        console.log("ID do documento de Renda Eventual:", rendaEventualDocRef.id);
      } else if (rendaEventual && valorRendaEventualValue <= 0) {
        showAlert("Erro", "Informe o valor da Renda Eventual.", "error");
        setIsAdding(false);
        return;
      } else if (!rendaEventual && valorRendaEventualValue > 0) {
        showAlert("Erro", "Informe o nome da Renda Eventual.", "error");
        setIsAdding(false);
        return;
      }

      showAlert("Sucesso", "Receita mensal adicionada com sucesso!", "success");

      // Limpar os campos após adicionar
      setMesSelecionado(null);
      setRendaMensal("");
      setNomeRendaExtra("");
      setRendaExtra("");
      setRendaEventual("");
      setValorRendaEventual("");
    } catch (error) {
      console.error("Erro ao adicionar receita mensal:", error);
      showAlert("Erro", "Erro ao adicionar receita mensal. Tente novamente.", "error");
    } finally {
      setIsAdding(false);
    }
  };

  const showAlert = (title, message, type) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertType(type);
    setAlertVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Image style={styles.imgPlanoFundo} contentFit="cover" source={require("../assets/pattern4.png")} />

        <View style={styles.retanguloTitulo}>
          <View style={styles.textoTitulo}>
            <Text style={styles.titulo}>Planejando</Text>
            <Text style={styles.titulo}>Receitas</Text>
          </View>
        </View>

        <Pressable onPress={() => navigation.goBack()} style={styles.iconeVoltar}>
          <Ionicons name="chevron-back" size={34} color="black" />
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mês:</Text>
          <View style={styles.seletorContainer}>
            <Picker
              selectedValue={mesSelecionado}
              onValueChange={itemValue => setMesSelecionado(itemValue)}
              style={styles.seletor}
              dropdownIconColor="#53e88b"
            >
              <Picker.Item label="Selecione um mês" value={null} />
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

          <Text style={styles.label}>Nome da Renda Extra:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da Renda Extra"
            value={nomeRendaExtra}
            onChangeText={setNomeRendaExtra}
          />

          <Text style={styles.label}>Valor da Renda Extra:</Text>
          <TextInput
            style={styles.input}
            placeholder="Valor da Renda Extra"
            value={rendaExtra}
            onChangeText={setRendaExtra}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Nome da Renda Eventual:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da Renda Eventual"
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

        <View style={styles.botaoAdicionar}>
          <Pressable onPress={adicionarReceitaMensal} style={{paddingVertical: 5}}>
            <Text style={styles.textoBotao}>Adicionar</Text>
          </Pressable>
        </View>

        <View style={styles.botaoVisualizar}>
          <Pressable onPress={() => navigation.navigate("ReceitasMensais")} style={{paddingVertical: 5}}>
            <Text style={styles.textoBotao}>Visualizar Receitas</Text>
          </Pressable>
        </View>
      </View>

      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        alertType={alertType} // Alterado de type para alertType
        onClose={() => setAlertVisible(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
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
      height: 0
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15
  },
  imgPlanoFundo: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute"
  },
  textoTitulo: {
    top: 7,
    alignSelf: "center"
  },
  titulo: {
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 33,
    fontSize: 24
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1
  },
  inputContainer: {
    marginTop: 20
  },
  label: {
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 18,
    marginBottom: 5
  },
  seletorContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10
  },
  seletor: {
    width: "100%",
    color: "#000"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 13
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 13,
    marginBottom: 50
  },
  textoBotao: {
    color: "#FFF",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  }
});

export default CadastroReceitasMensais;
