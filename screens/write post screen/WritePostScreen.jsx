import React from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const handleHead = ({ tintColor }) => (
  <Text style={{ color: tintColor }}>H1</Text>
);
const TempScreen = () => {
  const richText = React.useRef();

  // richText.current.insertImage(
  //   "https://plus.unsplash.com/premium_photo-1675884829570-83a41714113b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // );
  // console.log(richText.current);
  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Text>Description:</Text>
          <RichEditor
            ref={richText}
            onChange={(descriptionText) => {
              console.log("descriptionText:", descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <RichToolbar
        editor={richText}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.heading1,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertImage,
        ]}
        iconMap={{ [actions.heading1]: handleHead }}
      />
    </SafeAreaView>
  );
};

export default TempScreen;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   ScrollView,
//   FlatList,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   NativeSyntheticEvent,
//   TextInputKeyPressEventData,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import * as ImagePicker from "expo-image-picker";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons, FontAwesome } from "@expo/vector-icons";
// import { Button } from "react-native-paper";
// const options = [
//   {
//     id: 1,
//     name: "image",
//     icon: "image-outline",
//     fontAwesome: false,
//   },
//   {
//     id: 2,
//     name: "text",
//     icon: "text-outline",
//     fontAwesome: false,
//   },
//   {
//     id: 3,
//     name: "link",
//     icon: "link-outline",
//     fontAwesome: false,
//   },
//   {
//     id: 4,
//     name: "color",
//     icon: "color-palette-outline",
//     fontAwesome: false,
//   },
//   {
//     id: 5,
//     name: "bold",
//     icon: "bold",
//     fontAwesome: true,
//   },
//   {
//     id: 6,
//     name: "italic",
//     icon: "italic",
//     fontAwesome: true,
//   },
// ];

// const TextEditor = () => {
//   const [block, setBlock] = useState([]);
//   const [option, setOption] = useState("text");
//   const [isImageBlockLoaded, setIsImageBlockLoaded] = useState(true);
//   const [text, setText] = useState({ title: "", content: "" }); // State to hold the current text
//   // const [selection, setSelection] = useState({ start: 0, end: 0 }); // State to hold the text selection range

//   const handleTextChange = (value) => {
//     setText(value);
//     console.log(value);
//   };

//   const createNewBlocks = () => {
//     setBlock((prev) => {
//       if (option === "text") {
//         // setLoading(true)
//         return [
//           ...prev,
//           <TextInput
//             autoFocus={true}
//             value={text.content}
//             onChangeText={handleTextChange}
//             multiline={true}
//             style={styles.content}
//             onKeyPress={handleEndEditing}
//             numberOfLines={undefined}
//             placeholder="start writing"
//           />,
//         ];
//       } else if (option === "image" && isImageBlockLoaded) {
//         setIsImageBlockLoaded(false);
//         return [
//           ...prev,
//           <TouchableOpacity style={styles.block} onPress={handleImageUpload}>
//             <Text>Add Image</Text>
//           </TouchableOpacity>,
//         ];
//       } else {
//         return [...prev];
//       }
//     });
//   };

//   const replaceBlock = () => {
//     setBlock((prev) => {
//       const newItems = [...prev];
//       newItems[prev.length - 1] = (
//         <Image
//           style={styles.image}
//           source={require("../../assets/images (14).jpeg")}
//         />
//       );
//       return newItems;
//     });
//   };

//   const handleImageUpload = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== "granted") {
//       alert("Sorry, we need camera roll permissions to make this work!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       const { uri } = result;
//       const imgTag = `<img src="${uri}" alt="Uploaded Image" style="max-width: 100%;" />`;
//       replaceBlock();
//     }
//   };

//   const chooseOption = (opt) => {
//     setOption(opt);
//     if (opt === "image") {
//       createNewBlocks();
//     } else if (opt === "text") {
//       createNewBlocks();
//     }
//   };

//   const handleEndEditing = (event) => {
//     if (event.nativeEvent.key === "Enter") {
//       createNewBlocks();
//     }
//   };

//   // // Function to apply formatting (e.g., bold)
//   // const applyFormatting = (format) => {
//   //   const newText = `${text.slice(0, selection.start)}${format}${text.slice(
//   //     selection.start,
//   //     selection.end
//   //   )}${format}${text.slice(selection.end)}`;
//   //   setText(newText);
//   // };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <TextInput
//           placeholder="Add title"
//           value={text.title}
//           onChangeText={handleTextChange}
//           multiline={true}
//           onKeyPress={handleEndEditing}
//           numberOfLines={undefined}
//           autoFocus={true}
//           style={styles.title}
//         />

//         <TextInput>
//           <Text style={{ fontWeight: 900 }}>aa</Text>aa
//           <Text style={{ fontStyle: "italic" }}>aa</Text>
//         </TextInput>
//         <FlatList data={block} renderItem={({ item }) => item} />

//         {/*   <TouchableOpacity style={styles.block} onPress={createNewBlocks}>
// <AntDesign name="plus" size={24} color="black" />
//         </TouchableOpacity>*/}
//       </View>
//       <View style={styles.toolbar}>
//         <FlatList
//           horizontal
//           data={options}
//           keyExtractor={(data) => String(data.id)}
//           renderItem={({ item }) => {
//             return (
//               <TouchableOpacity
//                 onPress={() => chooseOption(item.name)}
//                 style={styles.btn}
//               >
//                 {item.fontAwesome ? (
//                   <FontAwesome size={20} name={item.icon} />
//                 ) : (
//                   <Ionicons name={item.icon} size={24} color="black" />
//                 )}
//               </TouchableOpacity>
//             );
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     justifyContent: "space-between",
//   },
//   btn: {
//     borderRightColor: "gray",
//     borderRightWidth: 0.5,
//     padding: 20,
//   },
//   content: {
//     fontFamily: "kanit-regular",
//     paddingVertical: 10,
//     minHeight: 50,
//   },
//   image: {
//     width: 109,
//     height: 100,
//   },
//   title: {
//     fontSize: 35,
//   },
//   block: {
//     width: "70%",
//     height: 120,
//     alignSelf: "center",
//     marginVertical: 10,
//     borderColor: "black",
//     borderWidth: 1,
//     borderStyle: "dashed",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//   },
//   toolbar: {
//     backgroundColor: "#eee",
//     borderRadius: 10,
//     elevation: 5,
//   },
//   toolbarButton: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   editor: {
//     flex: 1,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "gray",
//     marginBottom: 10,
//     padding: 5,
//   },
// });

// export default TextEditor;

// import React, { useEffect, useLayoutEffect } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
//   View,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import QuillEditor, { QuillToolbar } from "react-native-cn-quill";
// import theme from "../../utils/theme/theme/theme";
// import Button from "../../components/button template/Button";
// import { styles } from "./WritePostScreen.style";
// import { AntDesign } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";

// export default function App() {
//   const _editor = React.createRef();

//   const toolbarOptions = [
//     ["bold", "italic", "underline", "strike"], // toggled buttons
//     ["blockquote", "code-block"],
//     ["link", "video", "formula"],
//     ["image"],
//     [({ header: 1 }, { header: 2 })], // custom button values
//     [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
//     [{ script: "sub" }, { script: "super" }], // superscript/subscript
//     [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//     [{ direction: "rtl" }], // text direction

//     [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],

//     [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//     [{ font: [] }],
//     [{ align: [] }],

//     ["clean"], // remove formatting button
//   ];
//   // const toolbarOptions = {
//   //   handlers: {
//   //     // handlers object will be merged with default handlers object
//   //     link: function (value) {
//   //       if (value) {
//   //         const href = prompt("Enter the URL");
//   //         this.quill.format("link", href);
//   //       } else {
//   //         this.quill.format("link", false);
//   //       }
//   //     },
//   //   },
//   // };

//   const a = () => {
//     _editor.current.dangerouslyPasteHTML(
//       0,
//       "<img src='https://plus.unsplash.com/premium_photo-1675884829570-83a41714113b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>"
//     );
//   };
//   return (
//     <SafeAreaView style={styles.root}>
//       <View style={styles.wrapper}>
//         <Button expoIcon={<AntDesign name="close" style={styles.icon} />} />
//         <View style={styles.wrapper}>
//           <Button
//             helperFunction={a}
//             expoIcon={
//               <FontAwesome
//                 name="image"
//                 style={[styles.icon, { fontSize: 30 }]}
//               />
//             }
//           />
//           <Button
//             containerStyle={styles.btn}
//             text={"Preview"}
//             textStyle={styles.btnText}
//           />
//         </View>
//       </View>

//       <QuillEditor
//         loading="loading"
//         theme={{
//           background: theme().background,
//         }}
//         container={true} // Make sure to enable the wrapping container (also custom container)
//         ref={_editor}
//         style={styles.editor}
//       />
//       <View>
//         <QuillToolbar editor={_editor} options={toolbarOptions} theme="dark" />
//       </View>
//     </SafeAreaView>
//   );
// }
