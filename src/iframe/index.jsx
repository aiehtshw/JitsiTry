import { WebView } from "react-native-webview";
import React from "react";


const JitsiIframe = () =>{
  return <WebView
    source={{uri: 'https://www.google.com'}}
    onError={(event) =>alert(`Webview Error ${event.nativeEvent}`)}
  />
}
export default JitsiIframe;
