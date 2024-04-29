import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TrendingTemplate from '../../components/trending template/TrendingTemplate'
import { Feather } from '@expo/vector-icons';
import PostTemplate from '../../components/post template/PostTemplate';
import { styles } from './SearchScreen.style';
import PageHeader from '../../components/page header/PageHeader';
import { AntDesign } from '@expo/vector-icons';
import TabNavigation from '../../navigations/tab navigation/TabNavigation';
import Input from '../../components/input/Input';
import { navigateBack } from '../../utils/navigations/navigations';

const SearchScreen = ({navigation}) => {

  // useEffect(() => {
  //   navigation.navigate("tab")
  // })

  const navigate = () => navigateBack(navigation)
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={navigate}>
          <AntDesign name='arrowleft' style={styles.icon} />
        </TouchableOpacity>
      <View style={styles.inputBox}>
        <AntDesign name='search1' style={styles.icon} />
        <Input autoFocus={true} value={""} style={styles.input} placeholder={"Search SwiftScribe"}/>
        </View>
      </View>
      <View style={styles.wrapBox}>
      <Text style={styles.title}>Recent Searches</Text>
        <View style={styles.wrapper}>
          <View style={styles.wrap1}>
          <AntDesign name='search1' style={styles.icon} />
            <Text style={styles.searchTerm}>Boss Baby</Text>
          </View>
          <AntDesign name="close" style={styles.icon} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen