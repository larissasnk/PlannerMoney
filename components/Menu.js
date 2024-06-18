import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Menu = ({ isVisible, onClose }) => {
  const navigation = useNavigation();
  const menuContent = (
    <View style={styles.menuContainer}>
      <View style={styles.infoImg}>
        <Ionicons name="person-circle" size={150} color="black" />
      </View>
      <Text style={[{ textAlign: "center", fontWeight: "bold", fontSize: 18,   marginBottom: 10, }]}>
        @Usuário
      </Text>

      <View style={styles.separator} />

      <Pressable onPress={() => navigation.navigate("UserProfile")}>
        <Text style={styles.menuItem}>Perfil do usuário</Text>
      </Pressable>

      <View style={styles.separator} />

      <Pressable onPress={() => navigation.navigate("EditProfile")}>
        <Text style={styles.menuItem}>Editar Perfil</Text>
      </Pressable>
      <View style={styles.separator} />

      <View style={styles.ViewLogout}>
      <View style={styles.separator} />
      
        <Text style={styles.logout}> Logout</Text>
  

      </View>


    </View>
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.menuPanel}>{menuContent}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ViewLogout:{
    top:"54%",
  },
  separator: {
    marginBottom: 5,
    width: "95%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    alignSelf: "center",
  },
  infoImg: {
    backgroundColor: "#FFFFFF",
    width: 150,
    height: 150,
    borderRadius: 100,
    left: 35,
    marginBottom: 25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 15,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "white",
    // Espaço para o cabeçalho do menu
    padding: 20, // Espaço para margem esquerda
  },
  menuItem: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop:5,
    marginBottom: 10,
    marginLeft: 10,
  },
  logout:{
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  menuPanel: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "65%", // Metade da largura da tela
    backgroundColor: "white",
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
});

export default Menu;
