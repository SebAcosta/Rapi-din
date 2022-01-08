import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import TouchableCmp from './TouchableCmp';
import * as cartActions from "../../validators/actions/cartActions";
import {useDispatch} from 'react-redux';

const InputSpinner = (props) => {
    const dispatch = useDispatch();
    const reload = (item, value) => {
        if(value == '+'){
            try {
                dispatch(cartActions.addToCart(item.price));
            }catch(e) {
                console.log(e); 
            }
        }else if(value == '-'){
            try {
                dispatch(cartActions.minusItem(item.price));
            }catch(e) {
                console.log(e); 
            }
        }
    }
    return(
        <View style={styles.container}>
            <TouchableCmp
                onPress={() => {
                    reload(props, '-');
                }}
            >
                <View style={styles.plusMinus}>
                    <Text style={styles.textStyle}>{'-'}</Text>
                </View>
            </TouchableCmp>

            <View style={styles.numberContainer}>
                <Text style={styles.textStyle}>{props.price.quantity}</Text>
            </View>

            <TouchableCmp
                    style={styles.plusBttn}
                    onPress={() => {
                        reload(props, '+');
                    }}>
                    <View style={styles.plusText}>
                        <Text style={styles.textStyle}>{'+'}</Text>
                    </View>
                </TouchableCmp>
        </View>
    );
}

export default InputSpinner;

const styles = StyleSheet.create({
    container: {
        flex:1,
        overflow:'hidden',
        flexDirection:'row',
        justifyContent: 'space-between',
        width:Dimensions.get('window').width*0.23,
        height:Dimensions.get('window').height*0.03,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        backgroundColor:'white',
        borderRadius: 20,
    },

    plusBttn: {
        width:Dimensions.get('window').width*0.077,
        height:'100%',
        alignItems:'center',
        justifyContent:'center',

    },
    plusMinus:{
        alignItems:'center',
        justifyContent:'center',
        width:Dimensions.get('window').width*0.07,
        height:'100%',
    },
    plusText: {
        alignItems:'center',
        justifyContent:'center',
        width:Dimensions.get('window').width*0.07,
        height:'100%',
    },
    numberContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'33%',
        height:'100%',
    },
    textStyle:{
        position: 'relative',
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        color:'black',
    }    
});