import * as React from "react";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles.js";
import { useState } from "react";
import Menu from "../components/Menu";

const Home = () => {
  const navigation = useNavigation();

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };


    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <LinearGradient
            style={[styles.gradienteLinear]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          >
            <Image
              style={styles.imagemDeFundo}
              contentFit="cover"
              source={require("../assets/9297991.svg")}
            />
            <TouchableOpacity
              style={styles.visualizarMenu}
              onPress={toggleMenu}
            >
              <Feather name="menu" size={32} color="white" />
            </TouchableOpacity>
            <Menu
              isVisible={isMenuVisible}
              onClose={() => setMenuVisible(false)}
            />

            <Text style={[styles.txtBoasVindas, styles.posicaoBoasVindas]}>
              {" "}
              Bem Vindo(a),{"\n"} Usuário
            </Text>
          </LinearGradient>
          <View style={styles.retangulo1}></View>
          
          <Pressable
            onPress={() => navigation.navigate("RegisterReceitasMensais")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconePlanejamentoMensal}
                contentFit="cover"
                source={require("../assets/financial-profit.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Planejando as Receitas</Text>
                <Text style={styles.subtitulo}>
                  Entenda melhor o seu faturamento
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("PlannerMensal")}>
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconePlanejamentoMensal}
                contentFit="cover"
                source={require("../assets/payday.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Planejamento Mensal</Text>
                <Text style={styles.subtitulo}>
                  Controle as entradas e saídas do mês
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterGastosCartao")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/card.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Controle de Gastos </Text>
                <Text style={styles.titulo}>com Cartão</Text>
                <Text style={styles.subtitulo}>
                  Controle e organize suas faturas
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterGastosResidenciais")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/home_money.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Gastos Residenciais</Text>
                <Text style={styles.subtitulo}>Tenha tudo em mãos</Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterGastosEmergenciais")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/emergency.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Gastos Emergenciais </Text>
                <Text style={styles.subtitulo}>
                  Consulte os gastos emergênciais
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("RegisterDividas")}>
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/dividas.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}> Dívidas Pendentes</Text>
                <Text style={styles.subtitulo}>
                  Consulte todas as suas dívidas
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterGastosAniversariantes")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/birthday-cake.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Custo com Aniversário</Text>

                <Text style={styles.subtitulo}>
                  Consulte os gastos em aniversários
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterGastosFamiliar")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/family.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Custos Familiar</Text>
                <Text style={styles.subtitulo}>
                  Controle dos gastos com a família
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterPlannerViagens")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/travel.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Controle de Viagens </Text>
                <Text style={styles.subtitulo}>
                  Saiba quanto precisa nas viagens
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterBensMateriais")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/goal.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Aquisição de Materiais </Text>

                <Text style={styles.subtitulo}>
                  Cadastre os bens que deseja
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterPlanilhaMercado")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/groceries.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Planilha do Mercado</Text>

                <Text style={styles.subtitulo}>
                  Organize a lista de compras
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterObjetivosFinanceiros")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/motivation.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Objetivos Financeiros</Text>
                <Text style={styles.subtitulo}>
                  Cadastre seus objetivos financeiros
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Desafio52Semanas")}>
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/investment.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Evolução em </Text>
                <Text style={styles.titulo}>52 Semanas</Text>
                <Text style={styles.subtitulo}>
                  Junte mais de 10k em 52 semanas
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterMetodo502030")}
          >
            <View style={styles.retangulo2}>
              <Image
                style={styles.iconeCartao}
                contentFit="cover"
                source={require("../assets/savings.png")}
              />

              <View style={styles.containerTexto}>
                <Text style={styles.titulo}>Método 50/20/30 </Text>

                <Text style={styles.subtitulo}>
                  Distribua melhor a sua renda
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  iconePlanejamentoMensal: {
    width: 50,
    height: 50,
    left: 10,
  },
  iconeCartao: {
    width: 60,
    height: 60,
  },
  titulo: {
    top: 4,
    textAlign: "center",
    color: "#53e88b",
    fontWeight: "bold",
    lineHeight: 33,
    fontSize: 22,
    textOverflow: "ellipsis",
  },
  retangulo: {
    backgroundColor: "white",
    margin: 5,
    width: 150,
    height: 120,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  posicaoBoasVindas: {
    top: "35%",
  },
  textoSaldo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#53e88b",
  },
  subtitulo: {
    textAlign: "center",
    fontWeight: "regular",
    lineHeight: 33,
    fontSize: 16,
    fontStyle: "italic",
    textOverflow: "ellipsis",
  },
  retangulo2: {
    marginVertical: 10,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 15,
    top: -20,
    shadowColor: "black",
    padding: 10,
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,
    flexDirection: "row", // Adicionado para alinhar o conteúdo na horizontal
    alignItems: "center", // Adicionado para alinhar o conteúdo na vertical
    overflow: "hidden", // Corta o texto se ultrapassar o tamanho do retângulo
    justifyContent: "space-around",
  },
  vetor: {
    width: 200,
    height: 150,
    alignSelf: "center",
    borderRadius: 30,
  },
  vetor2: {
    width: 200,
    height: 150,
    alignSelf: "center",
    borderRadius: 30,
  },
  txtBoasVindas: {
    fontSize: 28,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.montserratSemiBold,
    lineHeight: 33,
    textAlign: "center",
  },
  containerTexto: {
    marginLeft: 20,
  },
  visualizarMenu: {
    position: "absolute",
    top: "20%",
    left: "4%",
    justifyContent: "center",
    alignItems: "center",
  },
  retangulo1: {
    backgroundColor: "#ffff",
    width: "80%",
    height: 150,
    top: -60,
    borderRadius: 30,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,
  },
  container1: {
    backgroundColor: "white",
    width: "100%",
    height: "16%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  retangulo3: {
    borderRadius: 30,
    backgroundColor: "white",
    width: 150,
    height: 120,
    marginTop: 10,
    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,
  },
  retangulo4: {
    borderRadius: 30,
    backgroundColor: "white",
    width: 150,
    height: 120,
    marginTop: 10,
    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,
  },
  imagemDeFundo: {
    position: "absolute",
    width: "85%",
    height: "100%",
    alignSelf: "center",
    opacity: 0.2,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  gradienteLinear: {
    width: "100%",
    height: 270,
    backgroundColor: Color.linear,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    left: 0,
  },
});

export default Home;
