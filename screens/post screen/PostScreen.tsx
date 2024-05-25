import { View, Platform, Text } from "react-native";
import { useAppSelector } from "../../hooks/use selector/useSelector";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import React, { useState } from "react";
import { styles } from "./PostScreen.style";
import theme from "../../utils/theme/theme/theme";
import CommentTemplate from "../../components/comment template/CommentTemplate";

const RenderPost = ({ activateCommentDisplay }) => {
    const getPostData = useAppSelector((state) => state.postData.storePostData);

    const html = `
        <html>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <script src="https://kit.fontawesome.com/20b8edb75e.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Climate+Crisis&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Kanit&family=Rubik+Burned&family=Single+Day&display=swap" rel="stylesheet">
            <style>
            body {
                font-size: 50px;
                padding: 30px 20px;
                font-family: "Kanit", sans-serif;
                font-weight: 400;
                font-style: normal;
                scrollbar-width: none; /* Firefox */
                overflow: auto;
            }
            body::-webkit-scrollbar {
                display: none; 
            }
            b {
              font-weight: bold;
            }
            div {
                font-size: 42px;
            }
            span {
                display: inline-block;
                font-size: 42px !important;
            }
            a {
                font-size: 42px;
            }
            img {
                height: 600px;
                width: 100%;
                border-radius: 200px;
            }
            a {
                color: lightblue;
            }
            .header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0;
                width: 100%;
            }
            .wrap {
                display: flex;
                align-items: center;
            }
            .btn {
              margin-right: 55px;
            }
            .title {
                font-size: 71px;
                text-transform: capitalize;
                margin-bottom: 10px;
                width: 100%;
                margin-top:90px;
            }
            .subtitle {
                font-size: 45px;
                color: gray;
                margin-top: 5;
                margin-bottom: 20;
                font-weight: 10;
            }
            .image {
                width: 150px;
                height: 150px;
                margin-right: 20px;
                border-radius: 50%;
                object-fit: cover;
            }
            .text {
                margin-right: 0px;
                font-size: 35px;
                font-weight: 100;
            }
            .btn-text {
                font-size: 43px;
                margin-left: 10px;
                color: ${theme().primary};
                background-color: transparent;
                border: none;
                font-family: "Kanit", sans-serif;
                font-weight: 600;
                margin-left: 15px;
            }
            .box {
                margin-top: -90px;
            }
            .wrapBox {
                margin-top: -40px;
            }
            .icon {
                font-size: 60px;
            }
            .previewimage {
                width: 100%;
                margin-top: 80px;
                margin-bottom: 100px;
                border-radius: 30px;
            }
            .bottomBox {
                background: rgba(255, 255, 255, 0.8);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);
                padding: 2.5rem;
                margin-top: 50px;
                z-index:1;
                max-width: 90%;
            }
            .gap {
                margin-right: 30px;
            }
            .text {
                margin-left: 15px;
            }
            .a {
                font-size: 62px;
            }
            .wrap1{
                margin:50px 0;
            }
            </style>
            </head>
    <body>
        <div class="header">
            <div>
                <i class="fa fa-arrow-left icon" aria-hidden="true"></i>
            </div>
            <div class="wrap">
                <i class="fa fa-share-square-o btn icon" aria-hidden="true"></i>
                <i class="fa fa-ellipsis-v icon" aria-hidden="true"></i>
            </div>
        </div>
        <h1 class="title"> ${getPostData.title} </h1>
        <h3 class="subtitle"> ${getPostData.subTitle} </h3>
        <div class="wrap wrap1">
            <img src=${getPostData.previewImage} alt="an image" class="image" />
            <div class="wrapBox">
                <div class="wrap">
                    <h4 class="name">Joe Doe </h4>
                    <button class="btn-text"> Follow </button>
                </div>
                <div class="wrap box">
                    <p class="text">7 mins read </p>
                    <p class="text">6 hours ago </p>
                </div>
            </div>
        </div>
        <img src=${getPostData.previewImage} alt="an image" class="previewimage" />
        ${getPostData.content}
        <div class="header bottomBox">
            <div class="wrap">
                <div class="wrap gap">
                    <i class="fa fa-heart-o icon a" aria-hidden="true"></i>
                    <span class="text"> 56 </span>
                </div>
                <div class="wrap" id="comment">
                    <i class="fa fa-comment-o icon a" aria-hidden="true"></i>
                    <span class="text"> 56 </span>
                </div>
            </div>
            <div class="wrap">
                <i class="fa fa-share-square-o icon btn" aria-hidden="true"></i>
                <i class="fa fa-ellipsis-v icon" aria-hidden="true"></i>
            </div>
        </div>
    </body>
    </html>
    `;

    const injectedJavaScript = `
        (function() {
            const bottomBox = document.querySelector(".bottomBox");
          
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
       
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            bottomBox.style.position = "relative";
            bottomBox.style.bottom = "0"; 
        } else {
            bottomBox.style.position = "fixed";
            bottomBox.style.bottom = "0";
            bottomBox.style.left = "0";
            bottomBox.style.right = "0";
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

    const getCommentBtn = document.querySelector("#comment");


    let isCommentActive = false

    getCommentBtn.addEventListener("click", () => {
     isCommentActive = true;
     window.ReactNativeWebView.postMessage(isCommentActive);
    })


    true; // Note: this is required, or you'll sometimes get silent failures
})();
`;

    const handleMessage = (event) => {
        const value = event.nativeEvent.data;
        console.log("message" + value);

        activateCommentDisplay(value)
    };


    // console.log(isCommentClicked);


    return (
        <>
            <WebView
                source={{ html }}
                scalesPageToFit={(Platform.OS === 'ios') ? false : true}
                style={{ flex: 1 }}
                originWhitelist={["*"]}
                injectedJavaScript={injectedJavaScript}
                onMessage={handleMessage}
            />
        </>
    );
};

const PostScreen = () => {
    const [isCommentClicked, setIsCommentClicked] = useState<boolean>(false)



    return (
        <>
            <SafeAreaView>

            </SafeAreaView>

            {isCommentClicked ? <CommentTemplate isCommentActive={isCommentClicked} closeComment={setIsCommentClicked} /> : ""}


            <RenderPost activateCommentDisplay={setIsCommentClicked} />
        </>
    );
};

export default PostScreen;
