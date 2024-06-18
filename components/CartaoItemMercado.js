import React, { useState } from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Checkbox } from 'react-native-paper';


const CartaoItemMercado = ({
  nome,
  quantidade,
  precoUnitario,
  unidade,
  check,
  onIncrease,
  onDecrease,
  onToggleStatus,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const precoTotal = (quantidade * precoUnitario).toFixed(2);

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.arameContainer}>
        <Image
          style={styles.arame}
          contentFit="cover"
          source={require("../assets/arame_sem_fundo.png")}
        />
        <Image
          style={[styles.arame, { left: -10 }]}
          contentFit="cover"
          source={require("../assets/arame_sem_fundo.png")}
        />
      </View>
      <View style={styles.card}>
      <View style={[styles.line, { marginHorizontal: 20}]} />
        <View style={styles.content}>
        <View style={styles.line} />
        
          <View style={styles.header}>

          <View style={styles.statusContainer}>
            <Checkbox
              status={check ? 'checked' : 'unchecked'}
              onPress={onToggleStatus}
              color="blue"
              uncheckedColor="blue"
            />
            <Text style={[styles.status, check]}>
              {check ? '' : ''}
            </Text>
          </View>
            <View style={styles.descriptionContainer}>
            <Text style={[styles.nome, check ? styles.riscado : null]}>{nome}</Text>
              <View style={styles.line} />
              <Text style={[styles.precoUnitario, check ? styles.riscado : null]}>
                R$ {precoUnitario.toFixed(2)} / {unidade}
              </Text>
              <View style={styles.line} />
            </View>
            
            <View style={styles.valorContainer}>
              
              <Text style={[styles.precoTotal, check ? styles.riscado : null]}>Total: R$ {precoTotal}</Text>
              <View style={styles.line} />
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  style={styles.changeButton1}
                  onPress={onDecrease}
                  disabled={quantidade <= 1}
                >
                  <FontAwesome
                    name="minus-circle"
                    size={24}
                    color={quantidade > 1 ? "#FF3B30" : "#ccc"}
                  />
                </Pressable>
                <Text style={[styles.quantidade, check ? styles.riscado : null]}>
                  {quantidade} {unidade}
                </Text>
                <Pressable style={styles.changeButton2} onPress={onIncrease}>
                  <FontAwesome name="plus-circle" size={24} color="#4CAF50" />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.line, {marginVertical:20}]} />
    
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  riscado: {
    textDecorationLine: 'line-through',
    color: 'grey', // Altere a cor se desejar
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quitado: {
    color: 'green',
  },
  naoQuitado: {
    color: 'red',
  },
  cardWrapper: {
    marginTop:15,
    marginBottom: 20,
    position: "relative",
  },
  arameContainer: {
    flexDirection: "row",
    position: "absolute",
    top: -21,
    left: 5,
    right: 10,
    height: 50,
    alignItems: "center",
    zIndex: 1,
  },
  arame: {
    width: "52.5%",
    height: "60%",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "rgba(0, 0, 0, 0.2)", // Sombra preta
    shadowOffset: { width: 0, height: 2 }, // Posição da sombra
    shadowOpacity: 0.8, // Opacidade da sombra
    shadowRadius: 5, // Raio do desfoque da sombra
    elevation: 5,
    overflow: "hidden",
    paddingTop: 30, // Deixe espaço para o arame
  },
  line: {
    height: 1,
    backgroundColor: "#eee",
  },
  content: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  descriptionContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "PermanentMarker",
  },
  quantidade: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    fontFamily: "PermanentMarker",
  },
  precoUnitario: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
    fontFamily: "PermanentMarker",
  },
  precoTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "PermanentMarker",
  },
  valorContainer: {
    alignItems: "flex-end",
  },
  changeButton1: {
    paddingRight: 7,
    marginTop:4,
  },
  changeButton2: {
    paddingLeft: 7,
    marginTop:4,
  },
});

export default CartaoItemMercado;
