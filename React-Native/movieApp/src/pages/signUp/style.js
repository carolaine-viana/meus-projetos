import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    page: {
        flex: 1,
    },
    
    designImage: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    
    Text: {
        // width: 296,
        // height: 18,
        // fontFamily: 'Roboto',
        marginTop: 50,
        fontSize: 20,
        fontWeight: 'normal',
    },
    
    InputDesign: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 2,
        marginBottom: 10,
    },
    
    ButtonDesign: {
        width: 100,
        borderRadius: 2,
        backgroundColor: '#5cb646',
        borderWidth: 1,
    }

})

export default style;