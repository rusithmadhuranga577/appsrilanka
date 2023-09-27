/** @format */

import React, { useEffect } from 'react';
import {
  View,
  Image,
  Animated,
} from 'react-native';
import { DotIndicator } from '..';
import {Images} from '@common';
import styles from './styles';

export default function LoadingComponent({visibility}) {

  const fadeValue = new Animated.Value(0);

  useEffect(()=>{
    Animated.timing(
      fadeValue,
      {
        toValue: 2,
        duration: 200,
        useNativeDriver : true
      }
    ).start();
  },[])

    return (
      <>
        {visibility ? 
            <View style={[styles.overlay]}>
                <View style={[styles.indicatorholder]}>
                  {/* <Image source={Images.devil} style={{width : 100, height : 100, marginBottom : 20}}/> */}
                  <DotIndicator size={15}/>
                </View>
            </View>:null
        }
      </>
    );
}