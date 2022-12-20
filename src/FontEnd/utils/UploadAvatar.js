import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Text, TouchableOpacity, Image } from 'react-native';

function UploadAvatar({ setImageForm}) {
    const [image, setImage] = useState(null);
    const [handleUpload, setHandleUpload] = useState(false);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
          });
        setImageForm(result.assets[0])
        setHandleUpload(true)
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        } else {
            setHandleUpload(false);
        }
    };
    if (!handleUpload) {
        return (
            <TouchableOpacity onPress={pickImage}>
                  <Text style={{width:100, height: 100, borderWidth: 1, borderRadius: 50, paddingTop: 40, paddingLeft: 20}}> Chọn ảnh</Text>
            </TouchableOpacity>
        )
    } else {
        return (
        <TouchableOpacity onPress={pickImage}>
              {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 50 }} />}
            </TouchableOpacity>
        )
    }
 
}

export default UploadAvatar