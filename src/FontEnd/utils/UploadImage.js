import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { View, Button } from 'react-native';

function UploadImage() {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };
  return (
      <Button title="Pick an image from camera roll" onPress={pickImage} />
  )
}

export default UploadImage