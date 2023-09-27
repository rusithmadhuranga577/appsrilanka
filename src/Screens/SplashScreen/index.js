import React, {useEffect} from 'react';
import {
  StatusBar,
  View,
  Image,
  Animated,
  Easing,
  ImageBackground,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Images} from '@common';
import styles from './styles';

const SplashPage = () => {

    const navigation = useNavigation();
    const rotateValueHolder = new Animated.Value(0);

    useEffect(() => {
        setTimeout(() => { 
          navigation.replace('WebPage')              
        }, 2000);
        startImageRotateFunction();
    }, [])

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
          toValue: 1,
          duration: 3000,
          easing: Easing.quad,
          useNativeDriver: false,
        }).start(() => startImageRotateFunction());
    };

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return(
        <View style={{backgroundColor: '#aaaa', height: '100%', width: '100%'}}>
            <StatusBar
                animated={true}
                barStyle={'dark-content'}
                backgroundColor={'#fff'}/>
                
            <ImageBackground source={Images.splashbg} style={[styles.whiteoverlay]}>
                <View style={[styles.circleview]}>
                    <Animated.View style={[styles.circleimage, {transform : [{ rotate: rotateData }]}]}>
                        <Image source={Images.circleimage} style={[styles.circleimage]}/>
                    </Animated.View>
                    <Image source={require('../../assets/logo.webp')} style={[styles.logoimage]}></Image>
                </View>
            <View style={[styles.flagholder]}>
                <Image source={Images.flag} style={{height : 30, resizeMode : 'contain'}}/>
            </View>
            <Text style={[styles.madein]}>MADE IN SRI LANKA</Text>
            </ImageBackground>
        </View>
    );

}

export default SplashPage;

