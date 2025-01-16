import { View, Text, FlatList, Button } from 'react-native';
import useVideoStore from '../store/videoStore';
import { useRouter } from 'expo-router';


export default function VideoList() {
  const videos = useVideoStore((state) => state.videos);
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <View  >
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Date(item.id)}</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
      </View>
      <Text style={{ color: '#555' }}>{item.description}</Text>
      <Text style={{ color: '#777' }}>URI: {item.uri}</Text>
      <Text style={{ color: '#777' }}>Crop Data: {JSON.stringify(item.cropData)}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No videos available.</Text>}
      />
      <Button title="Add New Video" onPress={() => router.push('/video-selection')} />
    </View>
  );
}
