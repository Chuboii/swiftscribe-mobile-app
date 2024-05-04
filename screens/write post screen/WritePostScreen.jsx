import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

const options = [
  {
    id: 1,
    name: "image",
  },
  {
    id: 2,
    name: "text",
  },
];

const TextEditor = () => {
  const [block, setBlock] = useState([]);
  const [option, setOption] = useState("text");

  const createNewBlocks = () => {
    setBlock((prev) => {
      if (option === "text") {
        return [...prev, <TextInput placeholder="start writing" />];
      } else if (option === "image") {
        return [...prev];
      }
    });
  };

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const { uri } = result;
      const imgTag = `<img src="${uri}" alt="Uploaded Image" style="max-width: 100%;" />`;
      setHtmlContent((prevHtmlContent) => prevHtmlContent + imgTag + "<br>");
    }
  };
  const chooseOption = (opt) => {
    setOption(opt);
    console.log(option);
  };

  return (
    <SafeAreaView>
      <FlatList data={block} renderItem={({ item }) => item} />
      <ScrollView>
        <TouchableOpacity style={styles.block} onPress={createNewBlocks}>
          <Text>Add Block</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleImageUpload}>
          <Text>Add Image</Text>
        </TouchableOpacity>
      </ScrollView>

      <View>
        <FlatList
          data={options}
          keyExtractor={(data) => String(data.id)}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => chooseOption(item.name)}
                style={styles.btn}
              >
                <Text>{item.name} </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: "green",
    padding: 10,
    margin: 10,
  },
  block: {
    width: 200,
    height: 100,
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "center",
  },
  toolbarButton: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  editor: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    padding: 5,
  },
});

export default TextEditor;

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
