import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    overlay : {
        width: '100%',
        height : '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 99,
        backgroundColor : 'rgba(255, 255, 255, 0.6)',
    },
    lottie: {
        width: 100,
        height: 100
    },
    indicatorholder : {
        width : '45%', 
        height : 110, 
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 25
    },
    text : {
        color : '#fff',
        fontSize : 12,
        marginTop : 15
    }
})

export default styles;