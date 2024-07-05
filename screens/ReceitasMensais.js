import React, {useState, useEffect} from "react";
import {View, StyleSheet, TextInput, Pressable, Image, Text, FlatList, ActivityIndicator} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../src/services/firebaseConfig";
import CartaoReceitasMensal from "../components/CartaoReceitasMensais";

const ReceitasMensais = ({meses, id}) => {
  const navigation = useNavigation();
  const [receitas, setReceitas] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const receitasData = [];
        const querySnapshot = await getDocs(collection(db, "receitaMensal"));

        for (const doc of querySnapshot.docs) {
          const rendaMensalSnapshot = await getDocs(collection(doc.ref, "rendaMensal"));
          const rendaExtraSnapshot = await getDocs(collection(doc.ref, "rendaExtra"));
          const rendaEventualSnapshot = await getDocs(collection(doc.ref, "rendaEventual"));

          const rendaMensal = rendaMensalSnapshot.docs.map(doc => doc.data());
          const rendaExtra = rendaExtraSnapshot.docs.map(doc => doc.data());
          const rendaEventual = rendaEventualSnapshot.docs.map(doc => doc.data());

          receitasData.push({
            mes: doc.id,
            rendaMensal,
            rendaExtra,
            rendaEventual
          });
        }

        receitasData.sort(ordernarPorMes);

        // Aplicar filtro se houver termo de pesquisa
        if (termoPesquisa.trim() !== "") {
          const termoPesquisaLowerCase = termoPesquisa.toLowerCase();
          const receitasFiltradas = receitasData.filter(receita => {
            const mesLowerCase = receita.mes.toLowerCase();
            const rendaMensalMatches = receita.rendaMensal.some(
              item => item.nome && item.nome.toLowerCase().includes(termoPesquisaLowerCase)
            );
            const rendaExtraMatches = receita.rendaExtra.some(
              item => item.nome && item.nome.toLowerCase().includes(termoPesquisaLowerCase)
            );
            const rendaEventualMatches = receita.rendaEventual.some(
              item => item.nome && item.nome.toLowerCase().includes(termoPesquisaLowerCase)
            );

            // Retorna verdadeiro se o mês contiver o termo de pesquisa ou qualquer renda corresponder ao termo de pesquisa
            return (
              mesLowerCase.includes(termoPesquisaLowerCase) ||
              rendaMensalMatches ||
              rendaExtraMatches ||
              rendaEventualMatches
            );
          });

          setReceitas(receitasFiltradas);
        } else {
          setReceitas(receitasData);
        }
      } catch (error) {
        console.error("Erro ao buscar receitas mensais:", error);
      } finally {
        setIsLoading(false); // Marcar como não mais carregando, seja por erro ou sucesso
      }
    };

    fetchReceitas();
  }, [termoPesquisa]);

  const ordernarPorMes = (a, b) => {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
    return meses.indexOf(a.mes) - meses.indexOf(b.mes);
  };

  const handlePesquisaChange = termo => {
    setTermoPesquisa(termo);
  };

  const renderItem = ({item}) => (
    <CartaoReceitasMensal
      key={item.mes} 
      mes={item.mes}
      rendaMensal={item.rendaMensal}
      rendaExtra={item.rendaExtra}
      rendaEventual={item.rendaEventual}
    />
  );

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} contentFit="cover" source={require("../assets/pattern4.png")} />
      <View style={styles.retanguloTitulo}>
        <View style={[styles.textoTitulo]}>
          <Text style={styles.titulo}>Planejando</Text>
          <Text style={styles.titulo}>Receitas</Text>
        </View>
      </View>

      <Pressable onPress={() => navigation.goBack()} style={styles.iconeVoltar}>
        <Ionicons name="chevron-back" size={34} color="black" />
      </Pressable>

      <View style={styles.containerPesquisa}>
        <TextInput
          style={styles.inputPesquisa}
          placeholder="Pesquisar..."
          value={termoPesquisa}
          onChangeText={handlePesquisaChange}
        />
        <Pressable style={styles.iconePesquisa}>
          <FontAwesome name="search" size={24} color="#555" />
        </Pressable>
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#53e88b" />
          <Text style={styles.loadingText}>Carregando dados...</Text>
        </View>
      ) : (
        <FlatList
          data={receitas}
          renderItem={renderItem}
          keyExtractor={item => item.mes} 
          contentContainerStyle={styles.listaReceitas}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  listaReceitas: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    top: 30,
    paddingHorizontal: 25,
    marginBottom: 150
  },
  retanguloTitulo: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 250,
    height: 88,
    top: 80,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
    alignSelf: "center"
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
  backgroundImage: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute"
  },
  containerPesquisa: {
    paddingHorizontal: 20,
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center"
  },
  inputPesquisa: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  iconePesquisa: {
    marginLeft: 10
  },
  loadingContainer: {
    marginTop: "25%",
    flex: 1,
    alignItems: "center"
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: "#555"
  }
});

export default ReceitasMensais;
