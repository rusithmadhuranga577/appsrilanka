import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
    },
    activityIndicatorStyle: {
      flex: 1,
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    flexContainer: {
      flex: 1
    },
    tabBarContainer: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#b43757'
    },
    button: {
      color: 'white',
      fontSize: 24
    },
    whiteoverlay : {
      width: '100%', 
      height: '100%', 
      backgroundColor: '#fff', 
      alignSelf: 'center', 
      zIndex: 98,
      alignItems : 'center',
      justifyContent : 'center'
    },
    logoimage : {
      height: 300, 
      zIndex : 99,
      resizeMode : 'contain',
      position : 'absolute'
    },
    circleview : {
      width : 300,
      height : 300,
      alignItems : 'center',
      justifyContent : 'center'
    },
    circleimage : {
      width : '100%',
      height : '100%'
    },
    flagholder : {
      position : 'absolute',
      alignSelf : 'center',
      bottom : 60
    },
    madein : {
      fontSize : 18,
      color : 'black',
      fontWeight : 'bold',
      marginTop : 40,
      position : 'absolute',
      alignSelf : 'center',
      bottom : 20
    }
});

export default styles;