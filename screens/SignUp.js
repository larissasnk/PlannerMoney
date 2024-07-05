import * as React from "react";
import { Image, Alert } from "react-native";
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
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles.js";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../src/services/firebaseConfig.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import CustomAlert from "../components/CustomAlert.js"; // Import the custom alert component

const SignUp = () => {
  const navigation = useNavigation();
  const [usuario, setusuario] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [telefoneFormatado, setTelefoneFormatado] = React.useState("");
  const [confirmpass, setconfirmpass] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [alertVisible, setAlertVisible] = React.useState(false);
  const [alertTitle, setAlertTitle] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertType, setAlertType] = React.useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (!usuario || !email || !telefone || !password || !confirmpass) {
      showAlert("Erro", "Todos os campos são obrigatórios");
      return false;
    }
    if (!validateEmail(email)) {
      showAlert("Erro", "Por favor, insira um email válido");
      return false;
    }
    if (password.length < 6) {
      showAlert("Erro", "A senha deve ter pelo menos 6 caracteres");
      return false;
    }
    if (password !== confirmpass) {
      showAlert("Erro", "As senhas não coincidem");
      return false;
    }
    const telefoneLimpo = telefone.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (telefoneLimpo.length < 10) {
      showAlert(
        "Erro",
        "O telefone deve conter pelo menos 10 dígitos numéricos"
      );
      return false;
    }
    return true;
  };

  const checkIfUsernameExists = async (username) => {
    const db = getFirestore();
    const q = query(collection(db, "users"), where("usuario", "==", username));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      try {
        const usernameExists = await checkIfUsernameExists(usuario);
        if (usernameExists) {
          showAlert("Erro", "Nome de usuário já está em uso.", "error");
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const db = getFirestore();
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          usuario,
          telefone,
          email,
        });
        showAlert("Sucesso", "Usuário cadastrado com sucesso!", "success");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          showAlert("Erro", "O email já está em uso.", "error");
        } else if (error.code === "auth/invalid-email") {
          showAlert("Erro", "O email fornecido é inválido.", "error");
        } else {
          showAlert("Erro", error.message, "error");
        }
      }
    }
  };

  const showAlert = (title, message, type) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertType(type);
    setAlertVisible(true);
  };

  const formatarTelefone = (text) => {
    // Remove todos os caracteres não numéricos
    const cleaned = text.replace(/\D/g, "");

    // Limita a quantidade de dígitos para no máximo 11
    const maxLength = 11;
    const cleanedLimited = cleaned.slice(0, maxLength);

    // Verifica se o número tem pelo menos 10 dígitos (incluindo o DDD)
    if (cleanedLimited.length >= 10) {
      // Adiciona o formato (DD) 9XXXX-XXXX se tiver 11 dígitos, senão assume que são 10 dígitos
      const formatted =
        cleanedLimited.length === 11
          ? `(${cleanedLimited.substring(0, 2)}) ${cleanedLimited.substring(
              2,
              7
            )}-${cleanedLimited.substring(7, 11)}`
          : `(${cleanedLimited.substring(0, 2)}) ${cleanedLimited.substring(
              2,
              6
            )}-${cleanedLimited.substring(6, 10)}`;
      return formatted;
    } else {
      return cleanedLimited; // retorna apenas os números digitados se forem menos de 10 dígitos
    }
  };

  const handleClose = () => {
  
    if (alertType === "success") {
      navigation.navigate("SignIn");
    }
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
        <View style={styles.signUp}>
          <Image style={styles.patternIcon} contentFit="cover" source={require("../assets/pattern1.png")} />

          <View style={styles.viewVoltar}>
            <Pressable onPress={() => navigation.goBack()} style={styles.iconeVoltar}>
              <Ionicons name="chevron-back" size={34} color="black" />
            </Pressable>
          </View>

          <View style={styles.logoImg}>
            <Image
              style={[styles.icon, styles.logoPosition]}
              contentFit="cover"
              source={require("../assets/9412378-11.png")}
            />
          </View>
          <View style={styles.rectangle1}>
            <Text style={[styles.moneymaster, styles.appNamePosition]}>Planner Money</Text>
          </View>
          <View style={styles.logoSub}>
            <View style={styles.rectangle2}>
              <Text style={[styles.gestorFinanceiroPessoal]}>Gestor Financeiro Pessoal</Text>
            </View>
          </View>

          <View style={styles.text}>
            <Text style={styles.text1}>Crie sua conta</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} contentFit="cover" source={require("../assets/iconlybulkprofile.png")} />

              <TextInput
                style={styles.input}
                placeholder="Usuário "
                value={usuario}
                onChangeText={text => setusuario(text)}
              ></TextInput>
            </View>

            <View style={styles.inputContainer}>
              <FontAwesome5 name="phone-alt" size={20} marginRight={10} opacity={0.3} color="#15BE77" />
              <TextInput
                style={styles.input}
                placeholder="Telefone"
                value={telefone}
                onChangeText={text => setTelefone(formatarTelefone(text))}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} contentFit="cover" source={require("../assets/iconlybulkmessage.png")} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} contentFit="cover" source={require("../assets/iconlybulklock.png")} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={!showPassword}
              />
              <Pressable onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={
                    showPassword ? require("../assets/olho_invisivel.png") : require("../assets/olho_visivel.png")
                  }
                />
              </Pressable>
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} contentFit="cover" source={require("../assets/iconlybulklock.png")} />
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                value={confirmpass}
                onChangeText={text => setconfirmpass(text)}
                secureTextEntry={!showPassword2}
              />
              <Pressable onPress={togglePasswordVisibility2} style={styles.eyeIcon}>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={
                    showPassword2 ? require("../assets/olho_invisivel.png") : require("../assets/olho_visivel.png")
                  }
                />
              </Pressable>
            </View>
          </View>

          <TouchableOpacity onPress={handleSignUp} style={styles.ctaButton}>
            <LinearGradient style={styles.rectangle} locations={[0, 1]} colors={["#53e88b", "#15be77"]} />
            <View style={styles.createAccountWrapper}>
              <Text style={styles.createAccount}>Registrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        alertType={alertType} // Alterado de type para alertType
        onClose={() => {
          if (alertType === "success") {
            navigation.navigate("SignIn");
          }
          else {
            setAlertVisible(false);
          }
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  viewVoltar: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
    height: 40,
    width: 40,
    top: 40,
    left: 20,
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
  },
  iconlybulkshowContainer: {
    position: "absolute",
    height: 30,
    width: 30,
    opacity: 0.3,
    right: 10,
    top: 12,
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
    right: 10,
    top: 12,
  },
  iconlybulkshow2: {
    height: 30,
    width: 30,
  },
  iconeVoltar: {
    top: 3,
    left: 2,
    zIndex: 1,
  },
  iconlybulkprofile: {
    right: "86.46%",
    left: "3.15%",
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "28.07%",
    top: "22%",
    width: "7.38%",
    height: "42.11%",
    position: "absolute",
    overflow: "hidden",
  },
  logoImg: {
    backgroundColor: "#FFFFFF",
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    top: 50,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
  },
  rectangle1: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 300,
    marginBottom: 5,
    top: 22,
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
  rectangle2: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 0,
    width: 245,
    borderRadius: 8,
    top: 24,
    alignSelf: "center",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
    position: "absolute",
    zIndex: 1,
  },
  buttonPosition: {
    bottom: "23.77%",
    top: "71.21%",
    width: "40.53%",
    height: "7.02%",
  },

  iconPosition: {
    height: 25,
    top: 16,
    position: "absolute",
    overflow: "hidden",
  },

  byTappingCreateTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  logoPosition: {
    alignSelf: "center",
    position: "absolute",
  },
  patternIcon: {
    top: -70,
    left: -14,
    width: 403,
    height: 966,
    position: "absolute",
    opacity: 0.4,
  },
  rectangle: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  createAccount: {
    fontWeight: "bold",
    fontSize: FontSize.size_lg,
    lineHeight: 21,
    alignSelf: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bentonSansBold,
    position: "absolute",
  },
  createAccountWrapper: {
    width: "100%",
    alignSelf: "center",
    height: 10,
    top: "50%",
    marginTop: -10.5,
    position: "absolute",
  },
  ctaButton: {
    width: "37.6%",
    top: "87%",
    right: "31.2%",
    bottom: "7.39%",
    left: "31.2%",
    height: "7.02%",
    position: "absolute",
  },
  rectangleShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "90%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },

  text1: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 26,
    alignSelf: "center",
    top: 10,
    color: Color.colorGray_200,
    fontFamily: FontFamily.bentonSansBold,
    position: "absolute",
  },
  byTappingCreate: {
    position: "absolute",
    marginTop: 37.5,
    alignSelf: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.bentonSansBold,
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  forgotPasswordLink: {
    marginTop: 154.5,
    left: "20.28%",
    textDecoration: "underline",
    color: Color.colorGray_300,
    fontFamily: FontFamily.bentonSansMedium,
  },
  text: {
    top: 345,
    alignSelf: "center",
    width: 217,
    height: 325,
    position: "absolute",
  },
  moneymaster: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.vigaRegular,
    color: "#15be77",
    letterSpacing: 1,
    textAlign: "center",
  },
  gestorFinanceiroPessoal: {
    padding: 8,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    letterSpacing: 1,
  },
  appName: {
    height: 68,
    width: 250,
  },
  logotitle: {
    // marginLeft: -125.5,
    textAlign: "center",
    left: "12%",
    top: 220,
    position: "absolute",
  },
  icon: {
    top: 20,
    width: 150,
    height: 150,
    borderRadius: 30,
    position: "absolute",
  },
  signUp: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 880,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  form: {
    width: "89%",
    alignSelf: "center",
    marginTop: 130,
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bentonSansRegular,
    color: Color.colorDarkslategray,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    opacity: 0.5,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    opacity: 0.5,
  },
});

export default SignUp;
