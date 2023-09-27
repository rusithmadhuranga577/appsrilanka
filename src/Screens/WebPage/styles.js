import { StyleSheet } from 'react-native';

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
    }
  });

export default styles;
