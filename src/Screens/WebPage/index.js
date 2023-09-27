import React, { useState, useEffect, useRef} from 'react';
import { View, ActivityIndicator, Alert, BackHandler, StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { LoadingComponent } from '@components';
import { Url } from '@common';
import TabView from './TabBar';

const WebPage = () => {

  const webviewRef = useRef(null);
  const [url, seturl] = useState(Url.homeurl);
  const [canGoBack, setCanGoBack] = useState(false);
  const navigation = useNavigation();
  const [loading, setloading] = useState(false);
  const [currenttabid, setcurrenttabid] = useState(0);

  const INJECTED_JAVASCRIPT = `(function() {
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
  })();`;

  useEffect(() => {
    setloading(false)
    BackHandler.addEventListener("hardwareBackPress", backAction, backButtonHandler);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction, backButtonHandler);
  }, [])

  const backAction = () => {
    backButtonHandler();
    return true;
  };

  const backButtonHandler = () => {
      if(canGoBack == true){
        if (webviewRef.current) {
            webviewRef.current.goBack()
      }}else{
        setloading(false)
        Alert.alert("Hold on!", "Are you sure you want to exit app?", [
          {
            text: "No",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
    }
  }

  const checkurl = (url) => {
    if(url == 'https://shopping.appsl.lk/mobile/goback'){
      backAction();
    }
  }

  const onTabPress = (data) => {
    if(data.type == 'function'){
      backAction();
    }else{
      if(currenttabid != data.id){
        setloading(true);
        seturl(data.url);
      }
    }
  }

    return (
        <View style={{width: '100%', height: '100%',}}>
            <LoadingComponent visibility={loading}/>
            <WebView 
              ref = {webviewRef}
              style={{ flex: 1, marginBottom: 60 }}
              source={{ uri: url}}
              javaScriptEnabled={true}
              injectedJavaScript={INJECTED_JAVASCRIPT}
              domStorageEnabled={true}
              onLoadStart={() => setloading(true)}
              onLoad={() => {setloading(false)}}
              onLoadEnd={()=> setloading(false)}
              onNavigationStateChange={navState => {
                setCanGoBack(navState.canGoBack)
                checkurl(navState.url)
              }}
              onError={(err)=>alert(err)}
              />
              <TabView getUrl={(data)=>onTabPress(data)} setCurrentTab={(id)=>setcurrenttabid(id)}/>
        </View>

    );
  }

export default WebPage;
