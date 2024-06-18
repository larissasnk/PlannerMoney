import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ViagemDetalhada = ({
  nomeViagem,
  inicioPassagem,
  terminoHospedagem,
  valorHospedagem,
  detalhesDiarias,
  onCloseModal,
}) => {
  // Função para calcular o total dos gastos de uma diária
  const calcularTotalDiaria = (diaria) => {
    return (
      parseFloat(diaria.passagem || 0) +
      parseFloat(diaria.alimentacao || 0) +
      parseFloat(diaria.passeios || 0) +
      parseFloat(diaria.transporte || 0) +
      parseFloat(diaria.extras || 0)
    );
  };

  // Função para calcular o total da viagem
  const calcularTotalViagem = () => {
    let total = parseFloat(valorHospedagem) * detalhesDiarias.length;
    detalhesDiarias.forEach((diaria) => {
      total += calcularTotalDiaria(diaria);
    });
    return total;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.titulo}>Detalhes da Viagem</Text>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Nome da Viagem:</Text>
            <Text>{nomeViagem}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Data de Início:</Text>
            <Text>{inicioPassagem}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Data de Término:</Text>
            <Text>{terminoHospedagem}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Valor da Hospedagem (por dia):</Text>
            <Text>R$ {valorHospedagem}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Quantidade de Diárias:</Text>
            <Text>{detalhesDiarias.length}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Valor Total da Viagem:</Text>
            <Text style={styles.valorTotal}>
              R$ {calcularTotalViagem().toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
        </View>

        <Text style={styles.titulo}>Detalhes das Diárias</Text>
        {detalhesDiarias.map((diaria, index) => (
          <View key={index}>
            <View style={styles.diariaContainer}>
              <Text style={styles.label}>Data: {diaria.data}</Text>
              <Text style={styles.label}>Passagem: R$ {diaria.passagem}</Text>
              <Text style={styles.label}>
                Alimentação: R$ {diaria.alimentacao}
              </Text>
              <Text style={styles.label}>Passeios: R$ {diaria.passeios}</Text>
              <Text style={styles.label}>
                Transporte: R$ {diaria.transporte}
              </Text>
              <Text style={styles.label}>Extras: R$ {diaria.extras}</Text>
              <Text style={styles.label}>
                Total da Diária: R$ {calcularTotalDiaria(diaria).toFixed(2)}
              </Text>
            </View>
            {index < detalhesDiarias.length - 1 && (
              <View style={styles.diariaSeparator} />
            )}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  detailItem: {
    marginBottom: 10,
  },
  separatorContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  separator: {
    width: "80%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  diariaContainer: {
    marginBottom: 20,
  },
  diariaSeparator: {
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
   alignSelf:"center",
   marginBottom:20,
  },

  container: {
    width:"86%",
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginBottom:50,
    marginTop:50,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  titulo: {
    alignSelf:"center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  informacoesViagem: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  valorTotal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF0000", // Cor vermelha para destacar o valor total da viagem
  },
  diariaContainer: {
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ViagemDetalhada;
