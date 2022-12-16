import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

function UploadImage() {
    const [image, setImage] = useState(null);
    const [handleUpload, setHandleUpload] = useState(false);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        setHandleUpload(true)
        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };
  if (!handleUpload) {
    return (
        <TouchableOpacity onPress={pickImage}>
              <Text style={{width:200, height: 200, borderWidth: 1, paddingTop: 90, paddingLeft: 70,backgroundColor: '#FFFF'}}> Chọn ảnh</Text>
        </TouchableOpacity>
    )
  } else {
      return (
      <TouchableOpacity onPress={pickImage}>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200}} />}
          </TouchableOpacity>
      )
  }
}

export default UploadImage