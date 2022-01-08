import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from "react-native";
import TouchableCmp from '../componentes/UI/TouchableCmp.js';

const SeccionesCard = (props) =>{
    const redirect = () =>{
    
    }
    return(
        <View style={styles.card}>
            <TouchableCmp onPress={redirect}>
                <View style={{height:'100%',width:'100%'}}>
                    <Image source={props.productInfo.img} style={styles.image}/>
                    <Text style={styles.text}>{props.productInfo.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

export default SeccionesCard;

const styles= StyleSheet.create({
    card: {
        width: Dimensions.get('window').height * 0.115,
        height:Dimensions.get('window').height * 0.125,
        borderRadius:15,
        overflow:'hidden',
        backgroundColor: 'white',
        alignContent:'center',
        borderWidth:.5,
        borderColor:'#F4F4F4',
        marginHorizontal:5,
        marginVertical:7.5
    },
    image: {
        width:'70%',
        height:'70%',
        resizeMode:'contain',
        marginLeft:'15%'
    },
    text:{
        color: 'black',
        fontFamily:'Nunito-SemiBold',
        fontSize: 14,
        textAlign:'center'
    },
})