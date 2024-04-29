import { View, Text, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { styles } from './TrendingTemplate.style';


const TrendingTemplate = ({index = null, profilePhotoUrl = null, title = null, readTime = null, date = null, username = null}) => {


  return (
      <View style={[styles.container]}>
          
              <View style={[styles.wrap]}>
              <Text style={[styles.num]}>0{index}</Text>
          </View>
          
              <View style={[styles.wrapper]}>
                  <View style={[styles.wrap]}>
                  <Image source={profilePhotoUrl } style={[styles.profileImg]} />
                      <Text style={[styles.name]}>Joe doe {/* subscribed user tag*/ }</Text>
                  </View>
                  
                      <Text style={[styles.title]} numberOfLines={2}>How to be a man in the 21st century. be warned of the stories they tell</Text>
                  

                  <View style={[styles.wrap]}>
                      <Text style={[styles.text]}>1 day ago</Text>
                      <Text style={[styles.text]}>8 min read</Text>
                  </View>
              </View>
          </View>
  )
}

export default TrendingTemplate