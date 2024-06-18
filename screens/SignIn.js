import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const SignIn = () => {
  const [usuario, setusuario] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmpass, setconfirmpass] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
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
        <View style={styles.signUp}>
          <Image
            style={styles.patternIcon}
            contentFit="cover"
            source={require("../assets/pattern1.png")}
          />
          <View style={styles.ctaButton}>
            <LinearGradient
              style={styles.rectangle}
              locations={[0, 1]}
              colors={["#53e88b", "#15be77"]}
            />
            <View style={styles.createAccountWrapper}>
              <Text style={styles.createAccount}>Criar Conta</Text>
            </View>
          </View>

          <View style={[styles.form, styles.formPosition1]}>
            <View style={[styles.nameForm, styles.formPosition]}>
              <View style={styles.rectangleShadowBox} />
              <Text style={[styles.email, styles.emailFlexBox]}></Text>
 
              <Image
                style={styles.iconlybulkprofile}
                contentFit="cover"
                source={require("../assets/iconlybulkprofile.png")}
              />

              <TextInput
                style={[styles.email, styles.emailFlexBox]}
                placeholder="Usuário "
                value={usuario}
                onChangeText={(text) => setusuario(text)}
              ></TextInput>
            </View>

            <View style={[styles.emailForm, styles.formPosition]}>
              <View style={styles.rectangleShadowBox} />
              {/* <Text style={[styles.email, styles.emailFlexBox]}>Email</Text> */}
              <Image
                style={styles.iconlybulkprofile}
                contentFit="cover"
                source={require("../assets/iconlybulkmessage.png")}
              />
              <TextInput
                style={[styles.email, styles.emailFlexBox]}
                placeholder="Email "
                value={email}
                onChangeText={(text) => setEmail(text)}
              ></TextInput>
            </View>

            <View style={[styles.passwordForm, styles.formPosition]}>
              <View style={styles.rectangleShadowBox} />
              <TextInput
                style={[styles.email, styles.emailFlexBox]}
                placeholder="Senha "
                value={pass}
                onChangeText={(text) => setPass(text)}
                secureTextEntry={!showPassword}
              ></TextInput>
              <Image
                style={styles.iconlybulkprofile}
                contentFit="cover"
                source={require("../assets/iconlybulklock.png")}
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
              {/* <Text style={[styles.email, styles.emailFlexBox]}>Senha</Text> */}
            </View>

            <View style={[styles.passwordForm2, styles.formPosition]}>
              <View style={styles.rectangleShadowBox} />
              <TextInput
                style={[styles.email, styles.emailFlexBox]}
                placeholder=" Confirme sua senha "
                value={confirmpass}
                onChangeText={(text) => setconfirmpass(text)}
                secureTextEntry={!showPassword}
              ></TextInput>
              <Image
                style={styles.iconlybulkprofile}
                contentFit="cover"
                source={require("../assets/iconlybulklock.png")}
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
              {/* <Text style={[styles.email, styles.emailFlexBox]}>Senha</Text> */}
            </View>
          </View>
          <View style={styles.text}>
            <Text style={styles.text1}>Crie sua conta</Text>
          </View>
          <View style={styles.logoImg}>
            <Image
              style={[styles.icon, styles.logoPosition]}
              contentFit="cover"
              source={require("../assets/9412378-11.png")}
            />
          </View>
          <View style={styles.rectangle1}>
            <Text style={[styles.moneymaster, styles.appNamePosition]}>
              Planner Money
            </Text>
          </View>
          <View style={styles.logoSub}>
            <View style={styles.rectangle2}>
              <Text style={[styles.gestorFinanceiroPessoal]}>
                Gestor Financeiro Pessoal
              </Text>
            </View>
          </View>
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
  emailFlexBox: {
    letterSpacing: 1,
    textAlign: "left",
  },
  iconPosition: {
    height: 25,
    top: 16,
    position: "absolute",
    overflow: "hidden",
  },
  formPosition1: {
    left: "6.67%",
    position: "absolute",
  },
  formPosition: {
    height: "45.24%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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

  email: {
    flex: 1,
    padding: 2,
    width: 300,
    left: "13%",
    fontFamily: FontFamily.bentonSansRegular,
    color: Color.colorDarkslategray,
    opacity: 0.3,
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    position: "absolute",
    top: "20%",
  },
  nameForm: {
    height: "45.24%",
    top: "0%",
  },
  emailForm: {
    height: "45.24%",
    top: "60%",
  },
  passwordForm: {
    top: "120%",
    bottom: "0%",
    height: "45.24%",
  },
  passwordForm2: {
    top: "180%",
    bottom: "0%",
    height: "45.24%",
  },
  form: {
    height: "15.52%",
    width: "86.67%",
    top: "48%",
    bottom: "38.18%",
    right: "6.67%",
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
    height: 830,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
    marginTop: 38,
  },
});

export default SignIn;
