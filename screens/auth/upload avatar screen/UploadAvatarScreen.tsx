import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './UploadAvatarScreen.style'
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Button from '../../../components/button/Button';

const UploadAvatarScreen = () => {

    const navigateToSignup = () => null

    const pickImageFromLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
        if (!result.canceled) {
            // setImage(result.assets[0].uri);
          }
    };
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={navigateToSignup} style={styles.iconBox}>
              <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Add your profile picture</Text>

                <TouchableOpacity style={styles.box} onPress={pickImageFromLibrary}>
                
            <AntDesign style={styles.plus} name="pluscircle" size={24} color="black" />
            <View style={styles.imageBox}>
              <Image style={styles.image} source={require("../../../assets/images (14).jpeg")} />
            </View>
                </TouchableOpacity>  
                
            
            </View>
            
            <Button text={"Done"} textStyle={styles.btnText} containerStyle={styles.btnStyle}/>
    </SafeAreaView>
  )
}

export default UploadAvatarScreen