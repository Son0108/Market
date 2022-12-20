import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

function UploadImage() {
    const [image, setImage] = useState(null);
    const [handleUpload, setHandleUpload] = useState(false);
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
        setHandleUpload(true)
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        } else {
          setHandleUpload(false)
        }
    };
  if (!handleUpload) {
    return (
        <TouchableOpacity onPress={pickImage}>
              <Text style={{width:150, height: 150, borderWidth: 1, paddingTop: 70, paddingLeft: 45,backgroundColor: '#FFFF'}}> Chọn ảnh</Text>
        </TouchableOpacity>
    )
  } else {
      return (
      <TouchableOpacity onPress={pickImage}>
            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150}} />}
          </TouchableOpacity>
      )
  }
}

export default UploadImage