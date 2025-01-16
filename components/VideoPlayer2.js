import { useState, useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { TextInput } from 'react-native-web';

export default function VideoPlayer2({ uri }) {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const formattedUri = uri ? JSON.stringify(JSON.stringify(uri, null, 2)) : "No URI available";
    console.log(formattedUri)
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{ uri }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        flex: 1,
        alignSelf: 'stretch',
        maxWidth:'%25',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

