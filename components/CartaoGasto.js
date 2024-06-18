import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartaoGasto = ({ descricao, data, valorTotal, tipo, parcelas, valorParcela }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descricao}>{descricao}</Text>
          <Text style={styles.data}>{data}</Text>
        </View>
        <View style={styles.valorContainer}>
          <Text style={styles.valorTotal}>R$ {parseFloat(valorTotal).toFixed(2)}</Text>
          <Text style={styles.tipo}>{tipo}</Text>
          {tipo === 'Parcelado' && (
            <Text style={styles.parcelas}>{parcelas}x R$ {parseFloat(valorParcela).toFixed(2)}</Text>
          )}
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
  descricao: {
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
  valorTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tipo: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  parcelas: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default CartaoGasto;
