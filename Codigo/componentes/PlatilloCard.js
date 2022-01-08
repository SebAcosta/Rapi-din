import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image, ImageBackground} from "react-native";
import TouchableCmp from '../componentes/UI/TouchableCmp.js';
import { Divider } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import * as cartActions from "../validators/actions/cartActions"

const PlatilloCard = (props) =>{
    const {productInfo} = props
    const dispatch = useDispatch();
    const aniadir = () =>{
        try{
            dispatch(cartActions.addToCart(productInfo))
            // console.log(productInfo)
        }catch(e){
            console.log(e)
        }
    }
    return(
        <View style={styles.platillo}>
            <Image source={{uri: props.productInfo.image}} style={styles.platilloImage}/>
            <View style={styles.platilloView}>
                <Text style={styles.platilloTitle}>{props.productInfo.name}</Text>
                <View style={styles.platilloInfo}>
                    <Text style={styles.platilloDescription}>{props.productInfo.description}</Text>
                    <Text style={styles.platilloCost}>${props.productInfo.cost}</Text>
                </View>
            </View>
            <View style={styles.touchablePre}>
                {/* VVVVVVVVVVVVVVVVVV AQUI SEBAS VVVVVVVVVVVVVVVVVV*/}
                <TouchableCmp onPress={aniadir}> 
                    {/* OnPress={Funcion(ParametroPlatilloCosto No sé xd)} */}
                    {/* ^^^^^^^^^^^^^^^^^^^ SEBAS ^^^^^^^^^^^^^^^^^^^^^ */}
                    <View style={styles.touchablePost}>
                        <Text style={styles.touchableText}>Agregar</Text>
                    </View>
                </TouchableCmp>
            </View>
            {/* <Divider style={styles.separatorLine}/> */}
        </View>
    )
}

export default PlatilloCard;

const styles= StyleSheet.create({
    platillo:{
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.25,
        marginLeft: Dimensions.get('window').width*0.05,
        marginBottom: 5,
        // backgroundColor:'green',
    },
    platilloImage: {
        width: Dimensions.get('window').width*0.3,
        height: Dimensions.get('window').width*0.3,
        marginTop: 15,
        right: 0,
        borderRadius: 15,
        resizeMode:'cover',
        position: 'absolute',
        borderWidth: 1,
        borderColor: "#F0F0F0"
        
    },
    platilloView:{
        width: Dimensions.get('window').width*0.55,
        height: "100%",
        paddingTop: 15,
        // backgroundColor:'red',
    },
    platilloTitle:{
        color:'black',
        fontSize: 15,
        fontFamily: 'Nunito-Bold'
    },
    platilloInfo:{
        // backgroundColor: 'blue',
    },
    platilloDescription:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 10,
        color: '#AAA',
    },
    platilloCost:{
        fontFamily: 'Nunito-Bold',
        fontSize: 13,
        color: 'black'
    },
    touchablePre:{
        position: 'absolute',
        width: Dimensions.get('window').width*0.3,
        height: Dimensions.get('window').width*0.1,
        backgroundColor: 'white',
        borderRadius: 35,
        overflow: 'hidden',
        right: 0,
        bottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    touchablePost:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    touchableText:{
        color: '#2AA761',
        fontFamily: 'Nunito-Bold',
        fontSize: 15,
    }
    // separatorLine:{
    //     marginHorizontal:'1%',
    //     color:'grey'
    // },
})