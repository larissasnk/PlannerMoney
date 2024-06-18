import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CartaoViagemTotal = ({ nomeViagem, dataViagem, detalhes, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.cartao}>
        <View>
          <Text style={styles.nomeViagem}>{nomeViagem}</Text>
          <Text style={styles.dataViagem}>{dataViagem}</Text>
        </View>
        <FontAwesome name="angle-right" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    elevation: 3,
  },
  nomeViagem: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dataViagem: {
    fontSize: 16,
    color: "#666",
  },
  valorTotal: {
    fontSize: 16,
    color: "#666",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default CartaoViagemTotal;
