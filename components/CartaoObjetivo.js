import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartaoObjetivo = ({ tipo, data, valor, plano }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.tipo}>{tipo}</Text>
          <Text style={styles.data}>{data}</Text>
        </View>
        <View style={styles.valorContainer}>
          <Text style={styles.valor}>R$ {parseFloat(valor).toFixed(2)}</Text>
          <Text style={styles.plano}>{plano}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: 'rgba(0, 0, 255, 0.5)', // Cor azul da sombra
    shadowOffset: { width: 0, height: 10 }, // Aumenta a altura da sombra
    shadowOpacity: 0.8, // Aumenta a opacidade da sombra
    shadowRadius: 15, // Aumenta o raio do desfoque da sombra
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  descriptionContainer: {
    flex: 1,
    paddingRight: 10,
  },
  tipo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  data: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  valorContainer: {
    alignItems: 'flex-end',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  plano: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default CartaoObjetivo;
