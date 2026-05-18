import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={estilos.corpo}>
      <Text style={estilos.titulo}>Senai 2026 🚀</Text>

      <Image 
        source={require("../assets/images/ryan.jpg")}
        style={estilos.imagem}
      />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Senai</Text>
        <Text style={estilos.texto}>
          Primeiro aplicativo feito pelo SENAI com React Native
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>📚 O que aprenderei</Text>
        <Text style={estilos.item}>• Push Notification</Text>
        <Text style={estilos.item}>• Acesso aos recursos</Text>
        <Text style={estilos.item}>• APIs externas</Text>
      </View>
      
      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>🛠 O que vou precisar</Text>
        <Text style={estilos.item}>• Node.js</Text>
        <Text style={estilos.item}>• VS Code</Text>
        <Text style={estilos.item}>• Emulador ou celular</Text>
        <Text style={estilos.item}>• Ser um bom aluno</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    flexGrow: 1,
    backgroundColor: "#0f172a", 
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    color: "#38bdf8", 
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagem: {
    width: 280,
    height: 280,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#38bdf8",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 18,
    borderRadius: 15,
    width: "100%",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  subtitulo: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  texto: {
    fontSize: 14,
    color: "#cbd5f5",
    textAlign: "center",
  },
  item: {
    color: "#e2e8f0",
    marginTop: 5,
    fontSize: 14,
  },
});