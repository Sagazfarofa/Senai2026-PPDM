import { useState } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

// CAMINHO CORRETO DA IMAGEM
import single from "../assets/images/logo3.png";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Login() {
    console.log("Dados do login:");
    console.log("Email:", email);
    console.log("Senha:", senha);
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image
        source={single}
        resizeMode="contain"
        style={estilos.logo}
      />

      <Text style={estilos.titulo}>Login</Text>

      <Text style={estilos.sub}>
        Para prosseguir insira seus dados
      </Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={estilos.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={Login}
      >
        <Text style={estilos.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  sub: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  botao: {
    width: "100%",
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});