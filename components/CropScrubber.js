import { useState, useEffect } from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider'

export default function CropScrubber({ uri, onCrop }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  useEffect(() => {
    onCrop({ start, end });
  }, [start, end]);

  return (
    <View>
      <Slider value={start} onValueChange={(value) => setStart(value)} />
      <Slider value={end} onValueChange={(value) => setEnd(value)} />
    </View>
  );
}
