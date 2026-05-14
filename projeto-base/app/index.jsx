import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from './components/Header';
import tarefas from './dados/tarefas';

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto} />

      <View style={estilos.infoArea}>
        <View style={estilos.topoCard}>
          <Text style={estilos.titulo}>{item.title}</Text>

          <View
            style={[
              estilos.badge,
              item.status === 'Concluída'
                ? estilos.concluida
                : estilos.pendente,
            ]}
          >
            <Text style={estilos.textoBadge}>{item.status}</Text>
          </View>
        </View>

        <Text style={estilos.desc}>{item.description}</Text>
      </View>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='Sesi Produtividade' />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemTarefa item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={estilos.lista}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  lista: {
    padding: 16,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#1E293B',
    borderRadius: 24,
    marginBottom: 22,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
  },

  foto: {
    width: '100%',
    height: 220,
  },

  infoArea: {
    padding: 18,
  },

  topoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },

  desc: {
    color: '#CBD5E1',
    fontSize: 15,
    lineHeight: 24,
  },

  badge: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
  },

  concluida: {
    backgroundColor: '#22C55E',
  },

  pendente: {
    backgroundColor: '#F59E0B',
  },

  textoBadge: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});