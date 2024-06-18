import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const UserProfile = () => {
  const navigation = useNavigation();
  // Aqui você pode substituir esses dados por dados reais do usuário
  const usuario = "Larissa Souza";
  const email = "larissasouza201565@example.com";
  const telefone = "77988537742";

  const handleEditProfile = () => {
    // Navegar para a tela de edição de perfil quando o botão for pressionado
    navigation.navigate("EditProfile");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgPlanoFundo}
        contentFit="cover"
        source={require("../assets/pattern4.png")}
      />

      <View style={styles.retanguloTitulo}>
        <View style={styles.textoTitulo}>
          <Text style={styles.titulo}>Perfil do</Text>
          <Text style={styles.titulo}>Usuário</Text>
        </View>
      </View>

      <Pressable onPress={() => navigation.goBack()} style={styles.iconeVoltar}>
        <Ionicons name="chevron-back" size={34} color="black" />
      </Pressable>
        <View style={styles.infoImg}>
          <Ionicons name="person-circle" size={200} color="black" />
        </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Usuário:</Text>
        <Text style={styles.info}>{usuario}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{email}</Text>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.info}>{telefone}</Text>
      </View>

      <Pressable onPress={() => navigation.navigate("EditProfile")}>
          <View style={styles.botaoVisualizar}>
            <Text style={styles.textoBotao}>Editar Perfil</Text>
          </View>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  botaoVisualizar: {
    width: 170,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
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
  retanguloTitulo: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 250,
    height: 88,
    marginBottom: 5,
    marginTop: 100,
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
  imgPlanoFundo: {
    top: -275,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  textoTitulo: {
    top: 7,
    alignSelf: "center",
  },
  titulo: {
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 33,
    fontSize: 24,
  },
  iconeVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  logoPosition: {
    alignSelf: "center",
    position: "absolute",
  },
  icon: {
    top: 20,
    width: 150,
    height: 150,
    borderRadius: 30,
    position: "absolute",
  },
  infoImg: {
    backgroundColor: "#FFFFFF",
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    top: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
   
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userInfo: {
    marginTop: 70,
  },
  label: {
    textAlign:"center",
    padding:5,
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 22,
    marginBottom: 8,
  },
  info: {
    textAlign:"center",
    lineHeight: 20,
    fontSize: 20,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserProfile;
