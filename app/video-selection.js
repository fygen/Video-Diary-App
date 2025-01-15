import * as ImagePicker from 'expo-image-picker';
import { View, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const VideoSelection = () => {
  const [videoUri, setVideoUri] = useState(null);
  const router = useRouter();

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });
    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick a Video" onPress={pickVideo} />
      {videoUri && (
        <Button
          title="Next"
          onPress={() => router.push({ pathname: '/video-cropping', params: { uri: videoUri } })}
        />
      )}
    </View>
  );
}


export default VideoSelection;