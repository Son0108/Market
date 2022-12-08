import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { View, Text, Button, TouchableOpacity } from 'react-native';

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
      <TouchableOpacity onPress={pickImage}>
        <Text style={{width:200, height: 200, borderWidth: 1}}> thêm</Text>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </TouchableOpacity>
  )
}

export default UploadImage