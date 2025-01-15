import { View, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import VideoPlayer from '../components/VideoPlayer';
import CropScrubber from '../components/CropScrubber';
import { useState } from 'react';

 const VideoCropping = () => {
  const { uri } = useLocalSearchParams();
  const router = useRouter();
  const [cropData, setCropData] = useState(null);

  const proceedToMetadata = () => {
    if (cropData) {
      router.push({ pathname: '/add-metadata', params: { uri, cropData } });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer uri={uri} />
      <CropScrubber uri={uri} onCrop={(data) => setCropData(data)} />
      <Button title="Next" onPress={proceedToMetadata} />
    </View>
  );
}

export default VideoCropping;