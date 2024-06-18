import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartaoGastoAniversariantes = ({ nomeAniversariante, dataAniversario, valorPresente }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.nomeContainer}>
          <Text style={styles.nomeAniversariante}>{nomeAniversariante}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.descricaoText}>Data de Aniversário:</Text>
          <Text style={styles.descricaoValor}>{dataAniversario}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.descricaoText}>Valor do Presente:</Text>
          <Text style={styles.descricaoValor}>R$ {parseFloat(valorPresente).toFixed(2)}</Text>
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
    paddingBottom:20,
    
  },
  content: {
    flexDirection: 'column',
  },
  nomeContainer: {
    height:35,
    borderTopLeftRadius:9,
    borderTopRightRadius:9,
    backgroundColor:"rgba(83, 232, 139, 0.4)",

    // opacity:0.4,
    alignItems: 'center',
    marginBottom: 10,
  },
  nomeAniversariante: {
    paddingTop:5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Cor laranja para o nome do aniversariante
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
    marginLeft:20,
    
   // Cor preta para o texto da descrição
  },
  descricaoValor: {
    fontSize: 16,
    color: '#555',
    marginRight:20,
  },
});

export default CartaoGastoAniversariantes;
