import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class Cadastro extends Component {
  state = { email: "", password: "" };

  handleCadastro = async () => {
    const { email, password } = this.state;

    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    const user = { email, password };

    await AsyncStorage.setItem("user", JSON.stringify(user));
    alert("Usuário cadastrado com sucesso!");
    this.props.navigation.navigate("login");
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "#b71ef4",
    borderRadius: 5,
    padding: 15,
    width: "80%",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
