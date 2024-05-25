import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import {
  actions,
  FONT_SIZE,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import * as ImagePicker from "expo-image-picker";
import { InsertLinkModal } from "../../components/modal template/ModalTemplate";
import theme from "../../utils/theme/theme/theme";
import { XMath } from "@wxik/core";
import { EmojiView } from "../../components/emojis/EmojiBoard";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./WritePostScreen.style";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/button template/Button";
import { IconButton } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { navigateBack } from "../../utils/navigations/navigations";
import { UploadApiOptions, upload } from "cloudinary-react-native";
import { cld } from "../../lib/cloudinary/cloudinary";
import { Cloudinary } from "@cloudinary/url-gen";
import SpinnerOverlay from "../../components/spinner template/SpinnerOverlay";
import Spinner from "react-native-loading-spinner-overlay";
import DrawerBottom from "../../components/drawer bottom template/DrawerBottom";
import { useAppDispatch } from "../../hooks/use dispatch/useDispatch";
import { useAppSelector } from "../../hooks/use selector/useSelector";
import { togglePreviewPostComp } from "../../lib/redux/reducers/toggleReducer";
import { storeTagArr } from "../../lib/redux/reducers/tagReducer";
import { storePostData } from "../../lib/redux/reducers/storeWrittenPost";
import { storeInputValue } from "../../lib/redux/reducers/storeInputValues";

const handleHead = ({ tintColor }) => (
  <Text style={{ color: tintColor }}>H1</Text>
);

const WritePostScreen = ({ navigation }) => {
  const richText = React.useRef(null);
  const linkModal = useRef(null);
  const scrollRef = useRef(null);
  const [emojiVisible, setEmojiVisible] = useState(false);
  const [disabled, setDisable] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);
  const phizIcon = require("../../assets/images/phiz.png");
  const dispatch = useAppDispatch();
  const getPostData = useAppSelector((state) => state.postData.storePostData);
  const inputValues = useAppSelector(
    (state) => state.inputValue.storeInputValue
  );
  const isPreviewPostToggled = useAppSelector(
    (state) => state.toggle.togglePreviewPostComp
  );
  const [titleInput, setTitleInput] = useState('');

  useEffect(() => {
    dispatch(storeTagArr(["clear tags"]));
    dispatch(storeInputValue({ postTitleInput: "", postSubTitleInput: "" }))
  }, []);

  const onPressAddImage = useCallback(async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImageLoaded(true);

        const cldd = new Cloudinary({
          cloud: {
            cloudName: "dcgirmxbm",
          },
          url: {
            secure: true,
          },
        });

        const options: UploadApiOptions = {
          upload_preset: "swiftscribe",
          tag: "swiftscribeImages",
          unsigned: true,
        };

        await upload(cldd, {
          file: result.assets[0].uri,
          options: options,
          callback: (error: any, response: any) => {
            if (error) console.log(error);
            setImageLoaded(false);

            richText.current?.insertImage(
              response.secure_url,
              "background: gray; width:100%; margin:10px 0; min-height:300px; border-radius:15px"
            );
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onInsertLink = useCallback(() => {
    // this.richText.current?.insertLink('Google', 'http://google.com');
    linkModal.current?.setModalVisible(true);
  }, []);

  const onLinkDone = useCallback(
    ({ title, url }: { title?: string; url?: string }) => {
      if (title && url) {
        richText.current?.insertLink(title, url);
      }
    },
    []
  );

  const handleInsertVideo = useCallback(async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImageLoaded(true);
        console.log(result.assets[0].uri);

        const cldd = new Cloudinary({
          cloud: {
            cloudName: "dcgirmxbm",
          },
          url: {
            secure: true,
          },
        });

        const options: UploadApiOptions = {
          upload_preset: "swiftscribe",
          tag: "swiftscribeVideos",
          unsigned: true,
        };

        await upload(cldd, {
          file: result.assets[0].uri,
          options: options,
          callback: (error: any, response: any) => {
            if (error) console.log(error);
            setImageLoaded(false);

            richText.current?.insertVideo(
              response.secure_url,
              "width: 100%; height:300px;  margin:10px 0;"
            );
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleCursorPosition = useCallback((scrollY: number) => {
    // Positioning scroll bar
    scrollRef.current!.scrollTo({ y: scrollY - 30, animated: true });
  }, []);

  const handleInsertEmoji = useCallback((emoji: string) => {
    richText.current?.insertText(emoji);
    richText.current?.blurContentEditor();
  }, []);

  const handleEmoji = useCallback(() => {
    Keyboard.dismiss();
    richText.current?.blurContentEditor();
    setEmojiVisible(!emojiVisible);
  }, [emojiVisible]);

  const onDisabled = useCallback(() => {
    setDisable(!disabled);
  }, [disabled]);

  const handleFontSize = useCallback(() => {
    // 1=  10px, 2 = 13px, 3 = 16px, 4 = 18px, 5 = 24px, 6 = 32px, 7 = 48px;
    let size = [1, 2, 3, 4, 5, 6, 7];
    richText.current?.setFontSize(
      size[XMath.random(size.length - 1)] as FONT_SIZE
    );
  }, []);

  const handleForeColor = useCallback(() => {
    richText.current?.setForeColor("blue");
  }, []);

  const handleHaliteColor = useCallback(() => {
    richText.current?.setHiliteColor("red");
  }, []);

  const handleHeightChange = useCallback((height: number) => {
    console.log("editor height change:", height);
  }, []);

  const editorInitializedCallback = useCallback(() => {
    // richText.current.registerToolbar(function (items) {
    // console.log('Toolbar click, selected items (insert end callback):', items);
    // });
  }, []);

  const navigate = () => navigateBack(navigation);

  const previewPost = () => dispatch(togglePreviewPostComp(true));

  const getPostContentFromEditor = (post: string) => {
    dispatch(
      storePostData({ ...getPostData, content: post })
    );
  };

  const getTitleInputValue = (value: string) => {
    setTitleInput(value);
    dispatch(storeInputValue({ ...inputValues, postTitleInput: value }))
    dispatch(
      storePostData({
        ...getPostData,
        title: value,
      })
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {isPreviewPostToggled && <DrawerBottom navigation={navigation} />}
        {isImageLoaded ? <SpinnerOverlay /> : ""}
        <InsertLinkModal
          placeholderColor={theme().gray}
          color={theme().text}
          backgroundColor={theme().background}
          onDone={onLinkDone}
          forwardRef={linkModal}
        />
        <View style={styles.wrapper}>
          <Button
            helperFunction={navigate}
            expoIcon={<AntDesign name="arrowleft" size={24} color="black" />}
          />
          <Button
            helperFunction={previewPost}
            text={"Preview"}
            containerStyle={styles.btn}
            textStyle={styles.btnText}
          />
        </View>

        <KeyboardAwareScrollView>
          <ScrollView>
            <TextInput
              style={styles.input}
              autoFocus={true}
              multiline
              numberOfLines={undefined}
              autoCapitalize="sentences"
              placeholder="Your Title"
              value={titleInput}
              onChangeText={getTitleInputValue}
            />
            <RichEditor
              enterKeyHint={"done"}
              onHeightChange={handleHeightChange}
              placeholder={"Start writing"}
              style={styles.rich}
              initialFocus={false}
              firstFocusEnd={false}
              editorStyle={{
                contentCSSText: `
            font-family: kanit;
            line-height: 36px; 
            display: flex;
            padding-bottom:100px;
            flex-direction: column; 
            min-height:400; 
            position: absolute; 
            top: 0; right: 0; bottom: 0; left: 0;`,
              }}
              ref={richText}
              onChange={getPostContentFromEditor}
              // editorInitializedCallback={editorInitializedCallback}
              pasteAsPlainText={true}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <RichToolbar
            selectedIconTint={"#2095F2"}
            disabledIconTint={"#bfbfbf"}
            editor={richText}
            style={[styles.richBar]}
            onPressAddImage={onPressAddImage}
            onInsertLink={onInsertLink}
            insertEmoji={handleEmoji}
            insertVideo={handleInsertVideo}
            fontSize={handleFontSize}
            foreColor={handleForeColor}
            hiliteColor={handleHaliteColor}
            actions={[
              actions.insertImage,
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.insertLink,
              actions.keyboard,
              actions.setStrikethrough,
              actions.setUnderline,
              actions.removeFormat,
              actions.insertVideo,
              actions.checkboxList,
              actions.undo,
              actions.redo,
              actions.blockquote,
              actions.alignLeft,
              actions.alignCenter,
              actions.alignRight,
              actions.code,
              actions.line,
              actions.heading1,
              // "fontSize",
            ]}
            iconMap={{ insertEmoji: phizIcon, [actions.heading1]: handleHead }}
          />
          {emojiVisible && <EmojiView onSelect={handleInsertEmoji} />}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default WritePostScreen;
