import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from "react-native";
import { Divider } from "react-native-elements";
import Card from "./UI/Card";
import { Feather } from '@expo/vector-icons'; 
import InputSpinner from "./UI/InputSpinner";
import {useDispatch} from "react-redux";
import * as cartActions from "../validators/actions/cartActions";

const CartItem = (props) =>{
    const dispatch = useDispatch();
    const borrar = (item) =>{
        try{
            dispatch(cartActions.deleteItemFromCart(item))
        }catch(e){
            console.log(e)
        }
    }
    return(
        <Card style={styles.product}>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={()=>borrar(props.item)}>
                    <Feather style={{marginTop:7}} name="trash" size={24} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerImagePriceNumber}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.image}
                        source={{uri:props.item.image}}
                    />
                </View>
                <Text style={styles.itemTitle}>{props.item.name}</Text>
                <View style={styles.costContainer}>
                    <Text style={styles.cost}>${props.item.cost}</Text>
                </View>
                <View style={styles.editQty}>
                    <View style={styles.spinnerContainer}>
                        <InputSpinner
                            price ={props.item}
                        />
                    </View>
                </View>
            </View>
        </Card>
    )
}

export default CartItem;
const styles = StyleSheet.create({
    product:{
        height: Dimensions.get('window').height*0.12,
        width: Dimensions.get('window').width*0.95,
        backgroundColor: 'white',
    },
    containerImagePriceNumber:{
        // height: '50%',
        // flexDirection: 'row',
        // backgroundColor: '#FFF',
    },
    itemTitle:{
        // backgroundColor: 'red',
        position: 'absolute',
        marginTop: Dimensions.get('window').width*0.03,
        marginLeft: Dimensions.get('window').width*0.26,
        height: Dimensions.get('window').width*0.10,
        width: Dimensions.get('window').width*0.5,
        fontSize: 12,
        fontFamily:'Nunito-SemiBold',
    },
    buttonView: {
        alignItems: 'flex-end',
        position: 'absolute',
        right: Dimensions.get('window').width*0.25,
        bottom: Dimensions.get('window').width*0.01,
    },
    button: {
        // backgroundColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center'
    },
    imgContainer: {
        width: Dimensions.get('window').width*0.25,
        height:'100%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: Dimensions.get('window').width*0.20,
        height: Dimensions.get('window').width*0.20,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: '#eee',
    },
    separatorLine:{
        marginHorizontal:'1%',
        margin: StyleSheet.hairlineWidth,
    },
    costContainer:{
        position: 'absolute',
        marginLeft: Dimensions.get('window').width*0.20,
        marginTop: Dimensions.get('window').width*0.16,
        width:'20%',
        height:'30%',
        alignItems:'center',
    },
    cost:{
        fontFamily:'Nunito-SemiBold',
        fontSize:16,
    },
    editQty:{
        position: 'absolute',
        right: Dimensions.get('window').width*0.01,
        marginTop: Dimensions.get('window').width*0.11,
        width:'30%',
        flexDirection:'column-reverse',
        alignItems:'center',
    },
    spinnerContainer:{
        height:'25%',
        // marginBottom: '25%',
    },
  });