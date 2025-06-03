import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const mockCards = [
  {
    id: '1',
    text: '비 오는 날, 따뜻한 말 한마디',
    image: require('@/assets/images/adaptive-icon.png'),
  },
  {
    id: '2',
    text: '마음이 흐를 수 있도록 놓아줘요',
    image: require('@/assets/images/sample2.jpg'),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f4f4f4',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  text: {
    padding: 12,
    fontSize: 16,
    fontWeight: '500',
  },
});
