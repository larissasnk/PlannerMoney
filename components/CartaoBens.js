import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

const CartaoBens = ({
  descricaoBem,
  valor,
  data,
  conquista,
  onToggleStatus,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descricao}>{descricaoBem}</Text>
          <Text style={styles.data}>{data}</Text>
        </View>
        <View style={styles.valorContainer}>
          <Text style={styles.valorTotal}>
            R$ {parseFloat(valor).toFixed(2)}
          </Text>
          <View style={styles.statusContainer}>
            <Checkbox
              status={conquista ? "checked" : "unchecked"}
              onPress={onToggleStatus} // Adicione o manipulador de eventos aqui
              color="green"
              uncheckedColor="red"
            />

            <Text
              style={[
                styles.status,
                conquista ? styles.conquistado : styles.pendente,
              ]}
            >
              {conquista ? "Conquistado" : "Não Conquistado"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    data:{
        marginTop: 7,
    },
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "rgba(0, 0, 0, 0.5)", // Cor preta para a sombra
    shadowOffset: { width: 0, height: 10 }, // Aumenta a altura da sombra
    shadowOpacity: 0.8, // Aumenta a opacidade da sombra
    shadowRadius: 15, // Aumenta o raio do desfoque da sombra
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  descriptionContainer: {
    flex: 1,
    paddingRight: 10,
  },
  descricao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  valorContainer: {
    alignItems: "flex-end",
  },
  valorTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  status: {
    fontSize: 14,
  },
  conquistado: {
    color: "green",
  },
  pendente: {
    color: "red",
  },
});

export default CartaoBens;
