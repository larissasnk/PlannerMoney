import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const EditProfile = () => {
  const [usuario, setUsuario] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmpass, setConfirmPass] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  const handleSave = () => {
    // Implementar a lógica para salvar as alterações do perfil
    console.log("Perfil salvo:", {
      usuario,
      email,
      pass,
      confirmpass,
    });
  };
  const navigation = useNavigation();

  const handleChoosePhoto = () => {
    // Implementar a lógica para escolher uma foto da galeria
    console.log("Escolher foto do perfil");
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
        <View style={styles.editProfile}>
          <Image
            style={styles.imgPlanoFundo}
            contentFit="cover"
            source={require("../assets/pattern4.png")}
          />

          <View style={styles.retanguloTitulo}>
            <View style={styles.textoTitulo}>
              <Text style={styles.titulo}>Editar Perfil</Text>
              <Text style={styles.titulo}>@Perfil</Text>
            </View>
          </View>

          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.iconeVoltar}
          >
            <Ionicons name="chevron-back" size={34} color="black" />
          </Pressable>
          <View style={styles.infoImg}>
            <Ionicons name="person-circle" size={200} color="black" />
          </View>
          <View style={styles.form}>
          <Text style={{textAlign:"center", marginBottom:15}}>Alterar imagem</Text>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              value={usuario}
              onChangeText={(text) => setUsuario(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={pass}
              onChangeText={(text) => setPass(text)}
              secureTextEntry={!showPassword}
            />
                          <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.iconlybulkshowContainer}
              >
                <Image
                  style={styles.iconlybulkshow}
                  contentFit="cover"
                  source={
                    showPassword
                      ? require("../assets/olho_visivel.png")
                      : require("../assets/olho_invisivel.png")
                  }
                />
              </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              value={confirmpass}
              onChangeText={(text) => setConfirmPass(text)}
              secureTextEntry={!showPassword2}
            />
                          <TouchableOpacity
                onPress={togglePasswordVisibility2}
                style={styles.iconlybulkshowContainer2}
              >
                <Image
                  style={styles.iconlybulkshow2}
                  contentFit="cover"
                  source={
                    showPassword2
                      ? require("../assets/olho_visivel.png")
                      : require("../assets/olho_invisivel.png")
                  }
                />
              </TouchableOpacity>
          </View>
          <Pressable onPress={() => navigation.navigate("EditProfile")}>
          <View style={styles.botaoVisualizar}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </View>
        </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  iconlybulkshowContainer: {
    position: "absolute",
    height: 30,
    width: 30,
    opacity: 0.3,
    right: 32,
    top: 222,
  },
  iconlybulkshow: {
    height: 30,
    width: 30,
  },
  iconlybulkshowContainer2: {
    position: "absolute",
    height: 30,
    width: 30,
    opacity: 0.3,
    right: 32,
    top: 282,
  },
  iconlybulkshow2: {
    height: 30,
    width: 30,
  },
  botaoVisualizar: {
    width: 170,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 55,
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
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  addPhotoText: {
    color: "gray",
    marginBottom: 10,
  },
  profileIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  form: {
    paddingHorizontal: 20,
    top: 50,
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
  saveButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default EditProfile;
