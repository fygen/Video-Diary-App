import { View, TextInput, Button, Text, Error } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import useVideoStore from '../store/videoStore';
import { useState } from 'react';

export default function AddMetadata() {
  const { uri, cropData } = useLocalSearchParams();
  const addVideo = useVideoStore((state) => state.addVideo);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  console.log(JSON.stringify(cropData))

  const saveMetadata = () => {
    addVideo({ id: Date.now(), uri, cropData, name, description });
    router.push('/video-list');
  };

  return (
    <View>
      {cropData? <TextInput placeholder={cropData}  /> : <Error></Error> }
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} multiline />
      <Button title="Save" onPress={saveMetadata} />
    </View>
  );
}
