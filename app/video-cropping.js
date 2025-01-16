import { View, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import VideoPlayer from '../components/VideoPlayer';
import CropScrubber from '../components/CropScrubber';
import { useState } from 'react';
import VideoPlayer2 from '../components/VideoPlayer2';

 const VideoCropping = () => {
  const { uri } = useLocalSearchParams();
  console.log(uri)
  const router = useRouter();
  const [cropData, setCropData] = useState(null);
  params =  uri?? JSON.stringify(uri) , cropData?? JSON.stringify(cropData) 
  const proceedToMetadata = () => {
    if (cropData) {
      router.push({ pathname: '/add-metadata', params });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{flex:1 ,flexDirection: 'row'}}>
        <VideoPlayer uri={uri} />
        <VideoPlayer2 uri={uri} />
      </View>
      <CropScrubber uri={uri} onCrop={(data) => setCropData(data)} />
      <Button title="Next" onPress={proceedToMetadata} />
    </View>
  );
}

export default VideoCropping;