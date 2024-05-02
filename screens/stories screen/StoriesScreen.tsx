import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { styles } from './StoriesScreen.style'
import PostTemplate from '../../components/post template/PostTemplate'

const StoriesScreen = () => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([
    { label: 'Published', value: 'Published' },
    { label: 'Draft', value: 'Draft' }
  ])

  const [value, setValue] = useState('')


  return (
    <View style={styles.container}>
      <DropDownPicker value={value} setValue={setValue} open={open} setOpen={setOpen} items={items} setItems={setItems} style={styles.dropdown} />

      <View>
        <PostTemplate containerStyle={styles.containerStyle} boxStyle={styles.boxStyle} isUserStories={true} wrapperStyle={styles.wrapperStyle} date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} />
        <PostTemplate containerStyle={styles.containerStyle} boxStyle={styles.boxStyle} isUserStories={true} wrapperStyle={styles.wrapperStyle} date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} />
        <PostTemplate containerStyle={styles.containerStyle} boxStyle={styles.boxStyle} isUserStories={true} wrapperStyle={styles.wrapperStyle} date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} />

      </View>


    </View>
  )
}

export default StoriesScreen