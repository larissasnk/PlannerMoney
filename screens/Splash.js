import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.Splash}>
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/splas 1.png")}
      />
      <Image
        style={[styles.SplashChild, styles.SplashLayout]}
        contentFit="cover"
        source={require("../assets/group-783.png")}
      />
      <Image
        style={[styles.SplashItem, styles.SplashLayout]}
        contentFit="cover"
        source={require("../assets/group-782.png")}
      />
      <Image
        style={[styles.SplashInner, styles.SplashLayout]}
        contentFit="cover"
        source={require("../assets/group-784.png")}
      />
      <Image
        style={[styles.groupIcon, styles.SplashLayout]}
        contentFit="cover"
        source={require("../assets/group-785.png")}
      />
      <View style={styles.logoImg}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/splash_gif.gif")}
        />
      </View>
      <View style={styles.rectangle1}>
        <Text style={[styles.moneymaster, styles.moneymasterPosition]}>
          Planner Money
        </Text>
      </View>
      <View style={styles.rectangle2}>
        <Text style={[styles.gestorFinanceiroPessoal]}>
          Gestor Financeiro Pessoal
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoImg: {
    backgroundColor: "#FFFFFF",
    width: 270,
    height: 270,
    borderRadius: 280,
    alignSelf: "center",
    top: 165,
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
    paddingVertical: 30,
    top: 130,
    width: 300,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2, 
    shadowRadius: 20, 
    elevation: 15,
  },
  SplashLayout: {

    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle2: {
    top: 470,
    backgroundColor: "#FFFFFF", 
    paddingVertical: 0,
    width: 245,
    borderRadius: 8,
    alignSelf: "center",
    position: "absolute",
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
  logoLayout: {
    height: 68,
    width: 250,
    position: "absolute",
  },
  // appNamePosition: {
  //   top: 0,
  //   marginLeft: -125,
  // },
  moneymasterPosition: {
    letterSpacing: 1,
    position: "absolute",
  },
  patternIcon: {
    top: 296,
    left: 3,
    width: 605,
    height: 618,
    position: "absolute",
  },
  SplashChild: {
    height: "46.42%",
    width: "100.77%",
    top: "-2.22%",
    right: "-2.31%",
    bottom: "55.8%",
    left: "1.53%",
  },
  SplashItem: {
    height: "14.38%",
    width: "27.84%",
    top: "0%",
    right: "64.96%",
    bottom: "85.62%",
    left: "3.2%",
  },
  SplashInner: {
    height: "4.77%",
    width: "14.51%",
    top: "4.06%",
    right: "42.56%",
    bottom: "91.17%",
    left: "42.93%",
  },
  groupIcon: {
    height: "16.63%",
    width: "38.48%",
    top: "-0.12%",
    right: "-0.08%",
    bottom: "83.5%",
    left: "61.6%",
  },
  moneymaster: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.vigaRegular,
    color: "#15be77",
    alignSelf: "center",
  },
  gestorFinanceiroPessoal: {
    padding: 8,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    letterSpacing: 1,
  },
  // appName: {
  //   height: 68,
  //   width: 250,
  //   left: "50%",
  //   position: "absolute",
  // },
  logo: {
    
    top: 400,
  },
  icon: {
alignSelf:"center",
    top: 10,
    width: 250,
    height: 250,

    position: "absolute",
    borderRadius: 250,
  },
  Splash: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    marginTop: 38,
  },
});

export default Splash;
