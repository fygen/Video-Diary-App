import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Video Diary App</Text>
      <Button title="Start" onPress={() => router.push('/video-selection')} />
    </View>
  );
}
