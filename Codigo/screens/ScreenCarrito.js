import React from 'react';
import {StyleSheet, View, Text, Dimensions, Button, FlatList} from 'react-native';
import CartItem from '../componentes/cartItem';
import { useSelector } from 'react-redux';
import TouchableCmp from '../componentes/UI/TouchableCmp';
import { useDispatch } from 'react-redux';
import * as cartActions from "../validators/actions/cartActions"

import { AntDesign } from '@expo/vector-icons';


const ScreenCarrito = ({navigation}) => {
  const cartItems = useSelector(state => state.cart.items);
  const cartTotal = useSelector(state => state.cart.total);
  const dispatch = useDispatch();
  const redirect = () =>{
    cartTotal!=0?
    navigation.navigate("ScreenDetallesCompra"):
    null;
  }
  const vaciarCarrito = () =>{
    try{
      dispatch(cartActions.deleteAllItems())
    }catch(e){
      console.log(e)
    }
  }
  const regresar = () =>{
    navigation.goBack()
  }
    return (
      <View style={styles.container}>
        <View style={styles.style1}>
          <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={regresar}
          style={{
            marginLeft:Dimensions.get('window').width*0.05,
            marginTop:'2%',  
          }}/> 
          <Text style={styles.headerText}>Tu canasta</Text>
        </View>
        <View style={styles.viewFlatlist}>
          <FlatList
              data={cartItems}
              showsVerticalScrollIndicator={true}
              keyExtractor= {() => Math.floor(Math.random() * 1001).toString()}
              renderItem={itemData =>(
                  <CartItem item={itemData.item}/>
              )}
          />
          <View style={styles.viewFantasma}></View>
        </View>
        <View style={styles.vaciarCanasta}>
          <TouchableCmp onPress={vaciarCarrito}>
            <View>
              <Text style={{fontFamily: 'Nunito-Bold', color: 'gray'}}>Vaciar Canasta</Text>
            </View>
          </TouchableCmp>
        </View>
        <View style={{height:Dimensions.get('window').height*0.1}}></View>
        <View style={styles.buttonCarritoPre}>
          <TouchableCmp onPress={redirect}>
            <View style={styles.buttonCarritoPost}>
              <View style={styles.buttonPedidoIzquierda}>
                <Text style={styles.buttonPedidoIzquierdaTXT1}>Ir a pagar</Text>
              </View>
              <View style={styles.buttonPedidoDerecha}>
                <Text style={styles.buttonPedidoDerechaTXT1}>Subtotal: </Text>
                <Text style={styles.buttonPedidoDerechaTXT2}>${cartTotal}.00</Text>
                {/* usestate de la cantidad de costo total de items que van en el carrito */}
              </View>
            </View>
          </TouchableCmp>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // paddingTop: 10,
      backgroundColor: 'white',
  },
  style1:{
    height:Dimensions.get('window').height * 0.15,
    width:Dimensions.get('window').width * 1,
    paddingTop: '5%',
    backgroundColor:'#F7F8FA',
    borderRadius:15,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  headerText:{
    // marginTop:'5%',
    marginRight:Dimensions.get('window').width*0.4,
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
  },
  footerCartContainer:{
      flexDirection:'row',
      width:'100%',
      height:Dimensions.get('window').height *0.07,
      paddingHorizontal:10,
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'grey',
      position:'absolute',
      bottom:0,
      borderTopRightRadius:15,
      borderTopLeftRadius:15,
  },
  summaryText: {
      fontFamily: 'Nunito-Bold',
      fontSize: 16,
      color:'black'
  },
  buttonCarritoPre:{
    position: 'absolute',
    bottom: Dimensions.get('window').height*0,
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.15,
    borderRadius:20,
    marginLeft: Dimensions.get('window').width*0.05,
    marginBottom: Dimensions.get('window').height*0.025,
    overflow: 'hidden',
    justifyContent:'space-around',
    backgroundColor:'#2BD781',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonCarritoPost:{
    width: '100%',
    height: '100%',
    // backgroundColor:'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCarritoAcumulado: {
    width: '20%',
    // backgroundColor:'green',
    alignItems: 'center',
  },
  buttonCarritoAcumuladoBloque:{
    width: Dimensions.get('window').width*0.1,
    height: Dimensions.get('window').width*0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15  ,
    backgroundColor: '#126B41',
  },
  buttonPedidoIzquierda:{
    marginLeft: '5%',
    width:'25%',
    // backgroundColor:'magenta',
    alignItems: 'center',
  },
  buttonPedidoIzquierdaTXT1:{
    color: 'white',
    fontSize: 15,
    fontFamily: 'Nunito-Bold'
  },
  buttonPedidoDerecha:{
    width: '45%',
    marginRight: '5%',
    // backgroundColor:'blue',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonPedidoDerechaTXT1:{
    color: 'white',
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
  },
  buttonPedidoDerechaTXT2:{
    color: 'white',
    fontSize: 15,
    fontFamily: 'Nunito-Bold'
  },
  vaciarCanasta:{
    alignItems:'center',
    justifyContent:'center',
  },
  viewFlatlist:{
    paddingTop: '2%',
    width: '100%',
    height: Dimensions.get('window').height*0.75,
    // marginBottom:Dimensions.get('window').height*2.5,
    // backgroundColor: 'red',
  }
});

export default ScreenCarrito;