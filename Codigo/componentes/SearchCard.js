import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image, ImageBackground} from "react-native";
import TouchableCmp from '../componentes/UI/TouchableCmp.js';
import { Divider } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import ScreenRestaurante from '../screens/ScreenRestaurante.js';

const SearchCard = (props) =>{
    const redirect = () =>{
        // console.log(props)
        props.navigation.navigate("ScreenRestaurante",{productInfo:props.productInfo});
    }
    return(
        <View style={styles.container}>
                <TouchableCmp onPress={redirect}>
                    <View style={{height:'100%',width:'100%', flexDirection:'row'}}>
                        <View style={styles.Cimagen}>
                            <View style={styles.card}>
                                <Image source={{uri: props.productInfo.background}} style={styles.image}/>
                            </View>
                        </View>
                        <View style={styles.textos}>
                            <Text style={styles.text}>{props.productInfo.name}</Text>
                            <View style={styles.detalles}>
                                <Text style={styles.text2}>{props.productInfo.deliveryTime} ° </Text>
                                <Text style={styles.text2}>${props.productInfo.deliveryFee} ° </Text>
                                <AntDesign name="star" size={15} color="#FC8C03" />
                                <Text style={styles.text2}>{props.productInfo.rating}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableCmp>
            <Divider style={styles.separatorLine}/>
        </View>
    )
}

export default SearchCard;

const styles= StyleSheet.create({
    card: {
        width: Dimensions.get('window').height * 0.130,
        height: Dimensions.get('window').height * 0.130,
        borderRadius:15,
        overflow:'hidden',
        marginTop:'20%'
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:'cover',
    },
    Cimagen: {
        alignContent:'center',
        alignItems:'center'
    },
    background: {
        width:'100%',
        height:'100%',
        resizeMode:'cover',
    },
    textos:{
        justifyContent:'flex-start',
        marginLeft:17,
        marginTop:'8%',
        width:'60%',
        height:'70%'
        
    },
    text:{
        color: 'black',
        fontFamily:'Nunito-Bold',
        fontSize: 17,
    },
    text2:{
        color: 'black',
        fontFamily:'Nunito-SemiBold',
        fontSize: 14,
        textAlign:'center',
    },
    container:{
        width: Dimensions.get('window').width * 0.850,
        height:Dimensions.get('window').height * 0.180,
        marginHorizontal:'7.5%',
    },
    separatorLine:{
        marginHorizontal:'1%',
        color:'grey'
    },
    detalles:{
        flexDirection:'row',
        marginTop:20
    }
})