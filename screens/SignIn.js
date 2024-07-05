import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../src/services/firebaseConfig";
import CustomAlert from "../components/CustomAlert"; // Importe o componente CustomAlert

const SignIn = ({ setUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [alertVisible, setAlertVisible] = React.useState(false);
  const [alertTitle, setAlertTitle] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertType, setAlertType] = React.useState("");

  const handleLogin = async () => {
    console.log("Tentando fazer login com:", email, password);
    if (!email || !password) {
      setAlertTitle("Erro de validação");
      setAlertMessage("Todos os campos devem ser preenchidos.");
      setAlertType("error");
      setAlertVisible(true);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuário autenticado:", user.email);
      setUser(user);
    } catch (error) {
      console.log("Erro ao fazer login:", error.message);
      let errorMessage = "Email ou senha incorretos."; // Mensagem genérica de erro
      setAlertTitle("Erro de autenticação");
      setAlertMessage(errorMessage);
      setAlertType("error");
      setAlertVisible(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.signIn}>
            <Image
              style={styles.patternIcon}
              contentFit="cover"
              source={require("../assets/pattern1.png")}
            />

            <View style={styles.logoImg}>
              <Image
                style={[styles.icon, styles.logoPosition]}
                contentFit="cover"
                source={require("../assets/9412378-11.png")}
              />
              <View style={styles.rectangle1}>
                <Text style={styles.appTitle}>Planner Money</Text>
              </View>
              <View style={styles.rectangle2}>
                <Text style={styles.appSubtitle}>
                  Gestor Financeiro Pessoal
                </Text>
              </View>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputIcon}
                  contentFit="cover"
                  source={require("../assets/iconlybulkmessage.png")}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputIcon}
                  contentFit="cover"
                  source={require("../assets/iconlybulklock.png")}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={!showPassword}
                />
                <Pressable
                  onPress={togglePasswordVisibility}
                  style={styles.eyeIcon}
                >
                  <Image
                    style={styles.eyeIcon}
                    contentFit="cover"
                    source={
                      showPassword
                        ? require("../assets/olho_invisivel.png")
                        : require("../assets/olho_visivel.png")
                    }
                  />
                </Pressable>
              </View>
            </View>

            <Text style={styles.continue}>Continue com</Text>

            <View style={styles.socialButtons}>
              <Pressable style={styles.socialButton}>
                <Image
                  style={styles.socialIcon}
                  contentFit="cover"
                  source={require("../assets/googleicon-1.png")}
                />
                <Text style={styles.socialText}>Google</Text>
              </Pressable>
              <Pressable style={styles.socialButton}>
                <Image
                  style={styles.socialIcon}
                  contentFit="cover"
                  source={require("../assets/facebook3-1.png")}
                />
                <Text style={styles.socialText}>Facebook</Text>
              </Pressable>
            </View>

            <View style={{ top: 670, position: "absolute" }}>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.createAccountLink}>Crie uma conta</Text>
              </Pressable>
            </View>
            <Pressable onPress={handleLogin} style={styles.ctaButton}>
              <LinearGradient
                style={styles.ctaButtonGradient}
                colors={["#53e88b", "#15be77"]}
              >
                <Text style={styles.ctaButtonText}>Login</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
        alertType={alertType}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 20,
    width: 150,
    height: 150,
    borderRadius: 30,
    alignSelf: "center",
    position: "absolute",
  },

  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  signIn: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  patternIcon: {
    position: "absolute",
    top: -70,
    left: -14,
    width: 403,
    height: 966,
    opacity: 0.4,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoImg: {
    backgroundColor: "#FFFFFF",
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    top: 70,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 300,
    marginBottom: 5,
    top: 163,
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
    paddingVertical: 5,
    width: 245,
    borderRadius: 8,
    top: 240,
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
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  appTitle: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.vigaRegular,
    color: "#15be77",
    textAlign: "center",
  },
  appSubtitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: 370,
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
  ctaButton: {
    width: "60%",
    position: "absolute",
    top: 740,
  },
  ctaButtonGradient: {
    paddingVertical: 15,
    borderRadius: Border.br_mini,
    alignItems: "center",
    top: -20,
  },
  ctaButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.bentonSansBold,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    position: "absolute",
    top: 590,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 15,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    color: Color.colorGray_200,
  },
  createAccountLink: {
    textDecorationLine: "underline",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bentonSansBold,
    color: Color.colorGray_200,
  },
  continue: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bentonSansRegular,
    color: Color.colorGray_200,
    position: "absolute",
    top: 545,
  },
});

export default SignIn;
