import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList,} from "react-native";
import {db} from "../src/services/firebaseConfig";
import {collection, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore";
import CustomAlert from "../components/CustomAlert";
import {Alert} from "react-native";
import {isEmpty} from "lodash";

const CartaoReceitasMensal = ({mes}) => {
  const [rendaMensalDocs, setRendaMensalDocs] = useState([]);
  const [rendaExtraDocs, setRendaExtraDocs] = useState([]);
  const [rendaEventualDocs, setRendaEventualDocs] = useState([]);
  const [editingValueRendaMensal, setEditingValueRendaMensal] = useState({});
  const [editingValueRendaExtra, setEditingValueRendaExtra] = useState({});
  const [editingValueRendaEventual, setEditingValueRendaEventual] = useState({});
  const [editingNameRendaExtra, setEditingNameRendaExtra] = useState({});
  const [editingNameRendaEventual, setEditingNameRendaEventual] = useState({});
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const fetchDataFromFirestore = async () => {
    try {
      // Buscar documentos de renda mensal
      const rendaMensalCollectionRef = collection(db, `receitaMensal/${mes}/rendaMensal`);
      const rendaMensalSnapshot = await getDocs(rendaMensalCollectionRef);
      const rendaMensalData = rendaMensalSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isEditing: false
      }));
      setRendaMensalDocs(rendaMensalData);

      // Buscar documentos de renda extra
      const rendaExtraCollectionRef = collection(db, `receitaMensal/${mes}/rendaExtra`);
      const rendaExtraSnapshot = await getDocs(rendaExtraCollectionRef);
      const rendaExtraData = rendaExtraSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isEditing: false
      }));
      setRendaExtraDocs(rendaExtraData);

      // Buscar documentos de renda eventual
      const rendaEventualCollectionRef = collection(db, `receitaMensal/${mes}/rendaEventual`);
      const rendaEventualSnapshot = await getDocs(rendaEventualCollectionRef);
      const rendaEventualData = rendaEventualSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isEditing: false
      }));
      setRendaEventualDocs(rendaEventualData);
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
    }
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, [mes]);

  const handleEditRendaMensal = async (docId, novoValor) => {
    try {
      if (isEmpty(novoValor)) {
        showAlert("Erro", "Campos vazios não podem ser salvos.", "error");
        throw new Error("Campos vazios não podem ser salvos.");
      }

      const rendaMensalDocRef = doc(db, `receitaMensal/${mes}/rendaMensal`, docId);
      await updateDoc(rendaMensalDocRef, {
        valor: parseFloat(novoValor)
      });
      console.log("Renda mensal atualizada com sucesso!");
      showAlert("Sucesso", "Renda mensal atualizada com sucesso!", "success");
      setAlertType("success");
      setEditingValueRendaMensal({});
      fetchDataFromFirestore();
    } catch (error) {
      console.error("Erro ao atualizar renda mensal:", error);
      showAlert("Erro", "Ao atualizar renda mensal.", "error");
    }
  };

  const handleEditRendaExtra = async (docId, novoNome, novoValor) => {
    try {
      if (isEmpty(novoNome) || isEmpty(novoValor)) {
        showAlert("Erro", "Campos vazios não podem ser salvos.", "error");
        throw new Error("Campos vazios não podem ser salvos.");
      }

      const rendaExtraDocRef = doc(db, `receitaMensal/${mes}/rendaExtra`, docId);
      await updateDoc(rendaExtraDocRef, {
        nome: novoNome,
        valor: parseFloat(novoValor)
      });
      console.log("Renda extra atualizada com sucesso!");
      showAlert("Sucesso", "Renda extra atualizada com sucesso!", "success");
      setEditingValueRendaExtra({});
      setEditingNameRendaExtra({});
      fetchDataFromFirestore();
    } catch (error) {
      console.error("Erro ao atualizar renda extra:", error.message);
      showAlert("Erro", error.message, "error");
    }
  };

  const handleEditRendaEventual = async (docId, novoNome, novoValor) => {
    try {
      if (isEmpty(novoNome) || isEmpty(novoValor)) {
        showAlert("Erro", "Campos vazios não podem ser salvos.", "error");
        throw new Error("Campos vazios não podem ser salvos.");
      }

      const rendaEventualDocRef = doc(db, `receitaMensal/${mes}/rendaEventual`, docId);
      await updateDoc(rendaEventualDocRef, {
        nome: novoNome,
        valor: parseFloat(novoValor)
      });
      console.log("Renda eventual atualizada com sucesso!");
      showAlert("Sucesso", "Renda eventual atualizada com sucesso!", "success");
      setEditingValueRendaEventual({});
      setEditingNameRendaEventual({});
      fetchDataFromFirestore();
    } catch (error) {
      console.error("Erro ao atualizar renda eventual:", error);
      showAlert("Erro", "Ao atualizar renda eventual.", "error");
    }
  };

  const handleStartEditing = (tipo, docId) => {
    switch (tipo) {
      case "rendaMensal":
        setEditingValueRendaMensal({
          ...editingValueRendaMensal,
          [docId]: rendaMensalDocs.find(item => item.id === docId).valor.toString()
        });
        break;
      case "rendaExtra":
        setEditingValueRendaExtra({
          ...editingValueRendaExtra,
          [docId]: rendaExtraDocs.find(item => item.id === docId).valor.toString()
        });
        setEditingNameRendaExtra({
          ...editingNameRendaExtra,
          [docId]: rendaExtraDocs.find(item => item.id === docId).nome
        });
        break;
      case "rendaEventual":
        setEditingValueRendaEventual({
          ...editingValueRendaEventual,
          [docId]: rendaEventualDocs.find(item => item.id === docId).valor.toString()
        });
        setEditingNameRendaEventual({
          ...editingNameRendaEventual,
          [docId]: rendaEventualDocs.find(item => item.id === docId).nome
        });
        break;
      default:
        break;
    }
  };

  const showAlert = (title, message, type) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertType(type);
    setAlertVisible(true);
  };

  const handleCancelEdit = (tipo, docId) => {
    switch (tipo) {
      case "rendaMensal":
        setEditingValueRendaMensal({});
        break;
      case "rendaExtra":
        setEditingValueRendaExtra({});
        setEditingNameRendaExtra({});
        break;
      case "rendaEventual":
        setEditingValueRendaEventual({});
        setEditingNameRendaEventual({});
        break;
      default:
        break;
    }
  };

  const handleInputChange = (tipo, value, docId) => {
    switch (tipo) {
      case "rendaMensal":
        setEditingValueRendaMensal({...editingValueRendaMensal, [docId]: value});
        break;
      case "rendaExtra":
        setEditingValueRendaExtra({...editingValueRendaExtra, [docId]: value});
        break;
      case "rendaEventual":
        setEditingValueRendaEventual({...editingValueRendaEventual, [docId]: value});
        break;
      default:
        break;
    }
  };

  const handleInputChangeName = (tipo, value, docId) => {
    switch (tipo) {
      case "rendaExtra":
        setEditingNameRendaExtra({...editingNameRendaExtra, [docId]: value});
        break;
      case "rendaEventual":
        setEditingNameRendaEventual({...editingNameRendaEventual, [docId]: value});
        break;
      default:
        break;
    }
  };

  const handleSaveEdit = async (tipo, docId) => {
    Alert.alert("Confirmação", `Tem certeza que deseja editar este item?`, [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Salvar",
        onPress: async () => {
          switch (tipo) {
            case "rendaMensal":
              await handleEditRendaMensal(docId, editingValueRendaMensal[docId]);
              break;
            case "rendaExtra":
              await handleEditRendaExtra(docId, editingNameRendaExtra[docId], editingValueRendaExtra[docId]);
              break;
            case "rendaEventual":
              await handleEditRendaEventual(docId, editingNameRendaEventual[docId], editingValueRendaEventual[docId]);
              break;
            default:
              break;
          }
        }
      }
    ]);
  };
  const renderRendaMensalItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleStartEditing("rendaMensal", item.id)}>
      {editingValueRendaMensal[item.id] !== undefined && (
        <>
          <View style={[{alignSelf: "center", width: 110}]}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={editingValueRendaMensal[item.id]}
              onChangeText={value => handleInputChange("rendaMensal", value, item.id)}
            />
          </View>
          <View style={[styles.eventualItem, {alignSelf: "center"}]}>
            <TouchableOpacity
              onPress={() => handleSaveEdit("rendaMensal", item.id)}
              style={[styles.bnt, {backgroundColor: "#15be77"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDelete("rendaMensal", item.id)}
              style={[styles.bnt, {backgroundColor: "#FF6347"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCancelEdit("rendaMensal", item.id)}
              style={[styles.bnt, {backgroundColor: "#1e90ff"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <View style={[styles.eventualItem, {justifyContent: "center"}]}>
        {!editingValueRendaMensal[item.id] && <Text style={styles.descricaoValor}>R$ {item.valor.toFixed(2)}</Text>}
      </View>
    </TouchableOpacity>
  );

  const handleDelete = (tipo, docId) => {
    // Função para exibir o alerta de confirmação
    const showDeleteConfirmation = () => {
      Alert.alert("Confirmação", `Tem certeza que deseja excluir este item?`, [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              const docRef = doc(db, `receitaMensal/${mes}/${tipo}`, docId);
              await deleteDoc(docRef);
              console.log(`${tipo} excluído com sucesso!`);

              // Após excluir, atualiza o estado local para refletir a mudança
              switch (tipo) {
                case "rendaMensal":
                  setRendaMensalDocs(rendaMensalDocs.filter(item => item.id !== docId));
                  break;
                case "rendaExtra":
                  setRendaExtraDocs(rendaExtraDocs.filter(item => item.id !== docId));
                  break;
                case "rendaEventual":
                  setRendaEventualDocs(rendaEventualDocs.filter(item => item.id !== docId));
                  break;
                default:
                  break;
              }
              showAlert("Sucesso", "Item excluído com sucesso!", "success");
            } catch (error) {
              console.error(`Erro ao excluir ${tipo}:`, error);
              showAlert("Erro", `Erro ao excluir ${tipo}`, "error");
            }
          }
        }
      ]);
    };

    // Chamada para exibir o alerta de confirmação
    showDeleteConfirmation();
  };

  const renderRendaExtraItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleStartEditing("rendaExtra", item.id)}>
      {editingValueRendaExtra[item.id] !== undefined && (
        <>
          <View style={styles.eventualItem}>
            <TextInput
              style={styles.input}
              value={editingNameRendaExtra[item.id]}
              onChangeText={value => handleInputChangeName("rendaExtra", value, item.id)}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={editingValueRendaExtra[item.id]}
              onChangeText={value => handleInputChange("rendaExtra", value, item.id)}
            />
          </View>
          <View style={[styles.eventualItem, {justifyContent: "center"}]}>
            <TouchableOpacity
              onPress={() => handleSaveEdit("rendaExtra", item.id)}
              style={[styles.bnt, {backgroundColor: "#15be77"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDelete("rendaExtra", item.id)}
              style={[styles.bnt, {backgroundColor: "#FF6347"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCancelEdit("rendaExtra", item.id)}
              style={[styles.bnt, {backgroundColor: "#1e90ff"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <View style={styles.eventualItem}>
        {!editingValueRendaExtra[item.id] && <Text style={[styles.descricaoValor, {marginLeft: 20}]}>{item.nome}</Text>}
        {!editingValueRendaExtra[item.id] && (
          <Text style={[styles.descricaoValor, {marginRight: 20}]}>R$ {item.valor.toFixed(2)}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderRendaEventualItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleStartEditing("rendaEventual", item.id)}>
      {/* <Text>ID: {item.id}</Text> */}
      {editingValueRendaEventual[item.id] !== undefined && (
        <>
          <View style={styles.eventualItem}>
            <TextInput
              style={styles.input}
              value={editingNameRendaEventual[item.id]}
              onChangeText={value => handleInputChangeName("rendaEventual", value, item.id)}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={editingValueRendaEventual[item.id]}
              onChangeText={value => handleInputChange("rendaEventual", value, item.id)}
            />
          </View>
          <View style={[styles.eventualItem, {justifyContent: "center"}]}>
            <TouchableOpacity
              onPress={() => handleSaveEdit("rendaEventual", item.id)}
              style={[styles.bnt, {backgroundColor: "#15be77"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDelete("rendaEventual", item.id)}
              style={[styles.bnt, {backgroundColor: "#FF6347"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCancelEdit("rendaEventual", item.id)}
              style={[styles.bnt, {backgroundColor: "#1e90ff"}]}
            >
              <Text style={[styles.descricaoText, {color: "white"}]}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <View style={styles.eventualItem}>
        {!editingValueRendaEventual[item.id] && (
          <Text style={[styles.descricaoValor, {marginLeft: 20}]}>{item.nome}</Text>
        )}
        {!editingValueRendaEventual[item.id] && (
          <Text style={[styles.descricaoValor, {marginRight: 20}]}>R$ {item.valor.toFixed(2)}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const totalRendaMensal = rendaMensalDocs ? rendaMensalDocs.reduce((acc, item) => acc + item.valor, 0) : 0;
  const totalRendaExtra = rendaExtraDocs ? rendaExtraDocs.reduce((acc, item) => acc + item.valor, 0) : 0;
  const totalRendaEventual = rendaEventualDocs ? rendaEventualDocs.reduce((acc, item) => acc + item.valor, 0) : 0;
  const valorTotal = totalRendaMensal + totalRendaExtra + totalRendaEventual;

  return (
    <View style={styles.card}>
      <View style={styles.nomeContainer}>
        <Text style={styles.mes}>{mes}</Text>
      </View>

      <Text style={styles.descricaoText}>Renda Mensal:</Text>
      <FlatList data={rendaMensalDocs} renderItem={renderRendaMensalItem} keyExtractor={item => item.id} />

      <Text style={styles.descricaoText}>Renda Extra:</Text>

      <FlatList data={rendaExtraDocs} renderItem={renderRendaExtraItem} keyExtractor={item => item.id} />

      <Text style={styles.descricaoText}>Eventuais:</Text>

      <FlatList data={rendaEventualDocs} renderItem={renderRendaEventualItem} keyExtractor={item => item.id} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Valor Total:</Text>
        <Text style={[styles.totalValor]}>R$ {valorTotal.toFixed(2)}</Text>
      </View>
      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        alertType={alertType} // Alterado de type para alertType
        onClose={() => setAlertVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bnt: {
    borderRadius: 5,
    marginTop: 5,
    marginHorizontal: 5,
    padding: 5
  },
  descricaotitulo: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333"
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  nomeContainer: {
    height: 35,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0.2,
    backgroundColor: "rgba(0, 191, 255, 0.4)",
    alignItems: "center",
    marginBottom: 10
  },
  mes: {
    paddingTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  details: {
    justifyContent: "space-between",
    marginBottom: 5
  },
  descricaoText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
    alignSelf: "center"
  },
  descricaoValor: {
    fontSize: 16,
    color: "#555"
  },
  eventualItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20
  },
  eventualNome: {
    fontSize: 16,
    color: "#555",
    marginRight: 10
  },
  eventualValor: {
    fontSize: 16,
    color: "#555"
  },
  totalContainer: {
    backgroundColor: "rgba(0, 191, 255, 0.2)",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    marginTop: 10,
    borderWidth: 0.2,
    paddingBottom: 12,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
    marginLeft: 20
  },
  totalValor: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 20
  }
});

export default CartaoReceitasMensal;
