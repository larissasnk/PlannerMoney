import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CartaoReceitasMensal = ({
  mes,
  rendaMensal,
  rendaExtra,
  eventuais,
  valorRendaEventual,
}) => {
  const valorTotal = rendaMensal + rendaExtra + valorRendaEventual;

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.nomeContainer}>
          <Text style={styles.mes}>{mes}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.descricaoText}>Renda Mensal:</Text>
          <Text style={styles.descricaoValor}>R$ {rendaMensal.toFixed(2)}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.descricaoText}>Renda Extra:</Text>
          <Text style={styles.descricaoValor}>R$ {rendaExtra.toFixed(2)}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.descricaoText}>Eventuais:</Text>
          <Text style={styles.descricaoValor}>{eventuais}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.descricaoText}>Valor da Renda Eventual:</Text>
          <Text style={styles.descricaoValor}>
            R$ {valorRendaEventual.toFixed(2)}
          </Text>
        </View>
        {/* Seção para exibir o valor total da renda do mês */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Valor Total:</Text>
          <Text style={[styles.totalValor]}>R$ {valorTotal.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: "column",
  },
  nomeContainer: {
    height: 35,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0.2,
    backgroundColor: "rgba(0, 191, 255, 0.4)",
    alignItems: "center",
    marginBottom: 10,
  },
  mes: {
    paddingTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  descricaoText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
    marginLeft: 20,
  },
  descricaoValor: {
    fontSize: 16,
    color: "#555",
    marginRight: 20,
  },
  totalContainer: {
    backgroundColor: "rgba(0, 191, 255, 0.2)",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    marginTop: 10,
    borderWidth: 0.2,
    paddingBottom: 12,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
    marginLeft: 20,
  },
  totalValor: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 20,
  },
});

export default CartaoReceitasMensal;
