import React, { Component, useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, Alert, BackHandler, StatusBar, TouchableOpacity} from 'react-native';
import { Images } from '@common';
import ButtonList from './buttonlist';

import styles from './styles';

class TabView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currenttabid : 0,
        };
    }

    onPressFunction = (data) => {
        if(data.id != 4){
            this.setState({currenttabid : data.id});
            this.props.setCurrentTab(data.id);
        }
        this.props.getUrl(data);
    }

    RenderIcon = (data) => {
        const selectedtab_id = this.state.currenttabid;
        return(
            <TouchableOpacity onPress={()=>this.onPressFunction(data)} style={{width : 28, height : 28}}>
                <Image source={data.icon} style={{width : '100%', height : '100%', resizeMode: 'center', tintColor : selectedtab_id == data.id ? 'red' : 'black' || data.id == 4 ? 'black' : null}}/>
            </TouchableOpacity>
        );
    }

    render(){
        return (
            <View style={[styles.tabbarcontainer]}>
                {ButtonList.map((data) => {
                    return (
                        this.RenderIcon(data)
                    )
                })}
            </View>
        );
    }
  }

export default TabView;
