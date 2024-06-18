import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Switch, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState } from "react";

const OrderDetails = () => {
  const [switchValue, setswitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setswitchValue(value);
  };

  return (
    <View style={styles.orderDetails}>
      <Image
        style={styles.patternIcon}
        contentFit="cover"
        source={require("../assets/pattern3.png")}
      />
      <Image
        style={styles.patternIcon1}
        contentFit="cover"
        source={require("../assets/pattern4.png")}
      />
      <View style={styles.rectangle1}>
        <View style={[styles.text, styles.textLayout]}>
          <Text style={[styles.tiitle, styles.tiitleTypo]}>Planejamento</Text>
          <Text style={[styles.tiitle1, styles.tiitleTypo]}>Mensal</Text>
        </View>
      </View>

      <View style={styles.viewSwitch}>
        <Text
          style={[styles.textSwitch, { color: switchValue ? "red" : "green" }]}
        >
          {switchValue ? "Adicionar Gastos" : "Adicionar Ganhos"}
        </Text>

        <Switch
          style={styles.switch}
          trackColor={{ false: "green", true: "red" }}
          thumbColor={switchValue ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>

      {/* <View style={styles.menu}> */}
        
        <Text style={[styles.descrio, styles.dataTypo]}>Descrição :</Text>
        <View style={[styles.popularStatus, styles.popularLayout]}>
        <View style={[styles.rectangle, styles.rectangleShadowBox2]} />
          
        </View>

        <View style={[styles.popularStatus1, styles.popularLayout]}>
          <View style={[styles.popularStatus2, styles.popularLayout]}>
            <LinearGradient
              style={styles.rectangleShadowBox1}
              locations={[0, 1]}
              colors={["#53e88b", "#15be77"]}
            />
            <Text style={[styles.data, styles.dataTypo]}>Data:</Text>
          </View>
          <Text style={[styles.valor, styles.dataTypo]}>{`Valor: `}</Text>
        </View>
        <LinearGradient
          style={styles.rectangleShadowBox}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <View style={[styles.iconPlus, styles.iconPosition]}>
          <LinearGradient
            style={[styles.rectangleCopy, styles.rectanglePosition]}
            locations={[0, 1]}
            colors={["#53e88b", "#15be77"]}
          />
          <Image
            style={[styles.pathIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/path.png")}
          />
        </View>
        <Image
          style={[styles.rectangleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        {/* <Image
            style={[styles.iconlybulkshow, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkshow1.png")}
          /> */}
      {/* </View> */}

      <View style={styles.group}>
        <View style={[styles.rectangle6, styles.rectanglePosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.priceInfo, styles.priceLayout]}>
        <LinearGradient
          style={[styles.priceInfoChild, styles.priceLayout]}
          locations={[0, 1]}
          colors={["#53e88b", "#15be77"]}
        />
        <Image
          style={[styles.patternIcon2, styles.priceLayout]}
          contentFit="cover"
          source={require("../assets/pattern5.png")}
        />
        <View style={styles.text1}>
          <Text style={[styles.discount, styles.discountPosition]}>
            Discount
          </Text>
          <Text style={[styles.deliveryCharge, styles.deliveryPosition]}>
            Delivery Charge
          </Text>
          <Text style={[styles.subTotal, styles.subPosition]}>Sub-Total</Text>
          <Text style={[styles.discountPrice, styles.discountPosition]}>
            20 $
          </Text>
          <Text style={[styles.deliveryChargePrice, styles.deliveryPosition]}>
            10 $
          </Text>
          <Text style={[styles.subTotalPrice, styles.subPosition]}>120 $</Text>
          <Text style={[styles.total, styles.totalTypo]}>Total</Text>
          <Text style={[styles.totalPrice, styles.totalTypo]}>150$</Text>
        </View>
        <View style={[styles.ctaPlaceOrderButton, styles.rectangle7Layout]}>
          <View style={[styles.rectangle7, styles.rectangle7Layout]} />
          <Text style={styles.checkOut}>Place My Order</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CampoDesc:{
    backgroundColor: 'blue',
    position: "absolute",
    top: 30,
    // left: 20,
    // right: 20,
  },
  switch: {
    alignSelf: "center",
    top: 3,
  },
  viewSwitch: {
    // backgroundColor: "black",
    top: 70,
  },
  textSwitch: {
    top: 10,
    alignSelf: "center",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
  },
  rectangle1: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    width: 250,
    height: "10%",
    marginBottom: 5,
    top: 60,
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

  tiitleTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.bentonSansBold,
    lineHeight: 33,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },

  dataTypo: {
    fontWeight: "bold",
    color: Color.colorBlack,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    position: "absolute",
  },

  rectangleShadowBox2: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    opacity: 0.1,
    backgroundColor: Color.linear,
    height: 34,
    width: 255,
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    left: 20,
    top: 0,
    position: "absolute",
    backgroundColor: "black",
  },
  iconPosition: {
    left: "88.76%",
    right: "3.75%",
    width: "7.49%",
    height: "17.11%",
  },
  rectanglePosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  priceLayout: {
    height: 206,
    position: "absolute",
  },
  discountPosition: {
    color: Color.colorGray_100,
    marginTop: -5.5,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  deliveryPosition: {
    marginTop: -26.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  subPosition: {
    marginTop: -47.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bentonSansMedium,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  totalTypo: {
    fontSize: FontSize.size_lg,
    marginTop: 29.5,
    color: Color.colorGray_100,
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansBold,
    top: "50%",
    position: "absolute",
  },
  rectangle7Layout: {
    height: 57,
    width: 325,
    position: "absolute",
  },
  patternIcon: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  patternIcon1: {
    top: -325,
    left: -17,
    width: 581,
    height: 1025,
    position: "absolute",
  },
  tiitle: {
    letterSpacing: 1,
    fontWeight: "bold",
    marginTop: -33,
    width: 171,
    marginLeft: -85.5,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.bentonSansBold,
    lineHeight: 33,
    fontSize: FontSize.size_6xl,
  },
  tiitle1: {
    letterSpacing: 1,
    fontWeight: "bold",
    marginTop: 0,
    marginLeft: -45.5,
    width: 90,
  },
  text: {
    top: 7,
    height: 66,
    alignSelf: "center",
    position: "absolute",
  },
  // frameShadowBox: {
  //   backgroundColor: Color.colorWhite,
  //   borderRadius: Border.br_3xl,
  //   shadowOpacity: 1,
  //   elevation: 50,
  //   shadowRadius: 50,
  //   shadowOffset: {
  //     width: 12,
  //     height: 26,
  //   },
  //   shadowColor: "rgba(90, 108, 234, 0.07)",
  //   height: 152,
  //   width: 347,
  //   left: 0,
  //   top: 0,
  //   position: "absolute",
  // },
  menuName: {
    color: "#fb0909",
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    marginLeft: -70.5,
    marginTop: -60,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  descrio: {
    backgroundColor: "pink",
    left: 20,
    top:20,
    // width: 80,
  },
  rectangle: {
    opacity: 0.1,
  },

  rectangleShadowBox1: {
    width: 125,
    left: 5,
    opacity: 0.1,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.linear,
    borderRadius: Border.br_lg_5,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 34,
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    top: -38,
    position: "absolute",
  },
  data: {
    top: -27,
    width: 50,
    left: -35,
  },
  popularStatus2: {
    top: -3,
    left: 15,
    width: 118,
  },
  valor: {
    top: -30,
    left: 150,
    width: 50,
  },
  popularStatus1: {
    top: 95,
    width: 228,
    left: 21,
  },
  rectangleShadowBox: {
    left: 220,
    top: 55,
    width: 125,
    opacity: 0.1,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.linear,
    borderRadius: Border.br_lg_5,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 34,
    shadowOpacity: 1,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    position: "absolute",
  },
  rectangleCopy: {
    borderRadius: Border.br_5xs,
    left: "0%",
    backgroundColor: Color.linear,
  },
  pathIcon: {
    height: "38.46%",
    width: "38.46%",
    top: "30.77%",
    right: "30.38%",
    bottom: "30.77%",
    left: "31.15%",
  },
  iconPlus: {
    top: "65.13%",
    bottom: "17.76%",
    position: "absolute",
  },
  rectangleIcon: {
    top: "32.89%",
    bottom: "50%",
    borderRadius: Border.br_5xs,
    left: "88.76%",
    right: "3.75%",
    width: "7.49%",
    height: "17.11%",
    opacity: 0.1,
  },
  // iconlybulkshow: {
  //   height: "15.79%",
  //   width: "6.92%",
  //   top: "33.55%",
  //   right: "4.03%",
  //   bottom: "50.66%",
  //   left: "89.05%",
  // },

  menuName1: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.bentonSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    // marginLeft: -70.5,
    // // marginTop: -60,
    // textAlign: "left",
    // left: "50%",
    // top: "50%",
    position: "absolute",
  },
  rectangle3: {
    opacity: 0.1,
  },

  // menuList: {
  //   backgroundColor: "blue",
  //   position: "absolute",
  // },
  rectangle6: {
    backgroundColor: "#f9a84d",
    borderRadius: Border.br_mini,
    left: "0%",
    opacity: 0.1,
  },
  vectorIcon: {
    height: "36.44%",
    width: "22.22%",
    top: "31.11%",
    right: "40%",
    bottom: "32.44%",
    left: "37.78%",
  },
  group: {
    backgroundColor: "blue",
    height: "5.54%",
    width: "12%",
    top: "1.70%",
    right: "81.33%",
    bottom: "89.78%",
    left: "3.67%",
    position: "absolute",
  },
  priceInfoChild: {
    backgroundColor: Color.linear,
    borderRadius: Border.br_3xl,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowColor: "rgba(90, 108, 234, 0.07)",
    height: 206,
    width: 347,
    left: 0,
    top: 0,
  },
  patternIcon2: {
    width: 346,
    left: 0,
    top: 0,
  },
  discount: {
    left: "0%",
  },
  deliveryCharge: {
    left: "0%",
  },
  subTotal: {
    left: "0%",
  },
  discountPrice: {
    left: "88.47%",
  },
  deliveryChargePrice: {
    left: "89.49%",
  },
  subTotalPrice: {
    left: "86.44%",
  },
  total: {
    left: "0%",
  },
  totalPrice: {
    left: "84.41%",
  },
  text1: {
    marginTop: -83,
    width: "85.01%",
    right: "6.63%",
    left: "8.36%",
    height: 95,
    top: "50%",
    position: "absolute",
  },
  rectangle7: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_100,
    width: 325,
  },
  checkOut: {
    marginTop: -6.5,
    left: "32.62%",
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansBold,
    top: "50%",
    position: "absolute",
  },
  ctaPlaceOrderButton: {
    top: 137,
    left: 12,
  },
  priceInfo: {
    top: 588,
    left: 14,
    width: 347,
    backgroundColor: "red",
  },
  orderDetails: {
    borderRadius: Border.br_xl,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 830,
    marginTop: 38,
    backgroundColor: Color.colorGray_100,
  },
});

export default OrderDetails;
