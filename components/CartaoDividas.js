import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CartaoDividas = ({ descricaoDivida, data, valor, quitado, onToggleStatus }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descricao}>{descricaoDivida}</Text>
          <Text style={styles.tipo}>Data Prevista: {data}</Text>
        </View>
        <View style={styles.valorContainer}>
          <Text style={styles.valorTotal}>R$ {parseFloat(valor).toFixed(2)}</Text>
          <View style={styles.statusContainer}>
            <Checkbox
              status={quitado ? 'checked' : 'unchecked'}
              onPress={onToggleStatus}
              color="green"
              uncheckedColor="red"
            />
            <Text style={[styles.status, quitado ? styles.quitado : styles.naoQuitado]}>
              {quitado ? 'Quitado' : 'Não Quitado'}
            </Text>
          </View>
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
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Cor preta para a sombra
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  status: {
    fontSize: 14,
  },
  quitado: {
    color: 'green',
  },
  naoQuitado: {
    color: 'red',
  },
});

export default CartaoDividas;
