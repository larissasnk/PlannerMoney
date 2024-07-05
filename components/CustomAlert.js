import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontSize, Border, Color } from "../GlobalStyles";

const CustomAlert = ({ visible, title, message, onClose, alertType }) => {
  let headerColor, buttonTextColor;

  if (alertType === "success") {
    headerColor = "#15be77"; // Verde para sucesso
    buttonTextColor = "#15be77"; // Texto verde para botão de sucesso
  } else {
    headerColor = "#ff0000"; // Vermelho para erro (ou outros tipos de alerta)
    buttonTextColor = "#ff0000"; // Texto vermelho para botão de erro (ou outros tipos de alerta)
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.alertContainer}>
          <View style={[styles.alertHeader, { backgroundColor: headerColor }]}>
            <Text style={styles.alertTitle}>{title}</Text>
          </View>
          <Text style={styles.alertMessage}>{message}</Text>
          <TouchableOpacity
            onPress={onClose}
            style={[styles.closeButton, { borderColor: headerColor }]}
          >
            <Text style={[styles.closeButtonText, { color: buttonTextColor }]}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertContainer: {
    width: 300,
    padding: 20,
    borderRadius: Border.br_mini,
    alignItems: "center",
    backgroundColor: "#ffffff", // Fundo branco para o alerta
    borderWidth: 1,
    borderColor: Color.colorGray_300, // Cor da borda cinza para o alerta
  },
  alertHeader: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Border.br_mini,
    width: "100%",
    marginBottom: 15,
  },
  alertTitle: {
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff", // Letras brancas para o título
  },
  alertMessage: {
    marginBottom: 15,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: "#000000", // Letras pretas para a mensagem
  },
  closeButton: {
    backgroundColor: "#ffffff", // Cor do botão branco
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_300, // Cor da borda cinza para o botão
  },
  closeButtonText: {
    fontSize: FontSize.size_base,
  },
});

export default CustomAlert;
