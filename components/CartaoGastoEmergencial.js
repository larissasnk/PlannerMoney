import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartaoGastoEmergencial = ({ descricao, data, valor }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.nomeContainer}>
          <Text style={styles.nomeDescricao}>{descricao}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.descricaoText}>Data do Gasto:</Text>
          <Text style={styles.descricaoValor}>{data}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.descricaoText}>Valor do Gasto:</Text>
          <Text style={styles.descricaoValor}>R$ {parseFloat(valor).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 20,
  },
  content: {
    flexDirection: 'column',
  },
  nomeContainer: {
    height: 35,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    backgroundColor: 'rgba(255, 99, 71, 0.9)', // Cor de fundo vermelha com opacidade
    alignItems: 'center',
    marginBottom: 10,
  },
  nomeDescricao: {
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Cor preta para a descrição do gasto
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  descricaoText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginLeft: 20,
  },
  descricaoValor: {
    fontSize: 16,
    color: '#555',
    marginRight: 20,
  },
});

export default CartaoGastoEmergencial;
