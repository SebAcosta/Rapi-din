//SCREEN 8

import React from 'react';
import {View, StyleSheet, Text, Dimensions} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import TouchableCmp from '../componentes/UI/TouchableCmp';
import { useSelector } from 'react-redux';


const ScreenDetallesCompra = ({navigation}) =>{
  const cantidadItems = useSelector(state => state.cart.cantidadItems);
  const cartTotal = useSelector(state => state.cart.total);
  const redirect = () =>{
    navigation.navigate("ScreenMapa");
  }
  const volver = () =>{
    navigation.goBack();
  }
  return(
    <View style={styles.container}>
      <View style={styles.part1}>
        <View style={styles.style1}>
          <AntDesign name="arrowleft" size={24} color="black" onPress={volver}/>
          <Text style={styles.txt1}>Tu pedido</Text>
        </View>
        <View style={styles.style2}>
          <Text style={styles.txt2}>Dividir cuenta</Text>
          <Text style={styles.txt3}>Seleccionar contactos</Text>
        </View>
        <View style={styles.style3}>
          <Text style={styles.txtP1}>Propina</Text>
          <Text style={styles.txtP4}>¡Las entregas solo son posibles gracias a ellos!</Text>
          <Text style={styles.txtP5}>Añade un propina y reconoce su esfuerzo</Text>
          <View style={styles.style7}>
            <View style={styles.cuadrito2}>
              <Text style={styles.txtCuadrito2}>$0</Text>
            </View>
            <View style={styles.cuadrito}>
              <Text style={styles.txtCuadrito}>$20</Text>
            </View>
            <View style={styles.cuadrito}>
              <Text style={styles.txtCuadrito}>$30</Text>
            </View>
            <View style={styles.cuadrito}>
              <Text style={styles.txtCuadrito}>$40</Text>
            </View>
            <View style={styles.cuadrito}>
              <Text style={styles.txtCuadrito}>Otro</Text>
            </View>
          </View>
          <Text style={styles.txtP6}>Tu Rappi recibe el 100% de este valor</Text>
        </View>
      </View>
      <View style={styles.part2}>
        <View style={styles.style4}>
          <Text style={styles.txtP1}>Resumen</Text>
          <View style={styles.resumen}>
            <View style={styles.resumenfila}>
                <Text style={styles.resumenTextInfo}>Costo de productos</Text>
                <Text style={styles.resumenCostoDigitos}>${cartTotal}.00</Text>
            </View>
            <View style={styles.resumenfila}>
                <Text style={styles.resumenTextInfo}>Tarifa de Servicio</Text>
                <Text style={styles.resumenCostoDigitos}>$6.00</Text>
            </View>
            <View style={styles.resumenfila}>
                <Text style={styles.resumenTextInfo}>Costo de Envío</Text>
                <Text style={styles.resumenCostoDigitos}>$15.60</Text>
            </View>
            <View style={styles.resumenfila}>
                <Text style={styles.resumenTextInfo}>Propina</Text>
                <Text style={styles.resumenCostoDigitos}>$0.00</Text>
            </View>
            <View style={styles.resumenfila}>
                <Text style={{color: 'black', fontFamily: 'Nunito-Bold', textDecorationLine: 'underline'}}>Así funcionan nuestros costos</Text>
                <Text style={styles.resumenCostoDigitos}></Text>
            </View>
          </View>
            <Text style={styles.aviso}>Realizaremos un cobro a tu método de pago por el valor de la orden.
              Si hay modificaciones, lo ajustaremos al saber el valor final de tu orden</Text>
        </View>

        <View style={styles.buttonCarritoPre}>
        <TouchableCmp onPress={redirect}>
          <View style={styles.buttonCarritoPost}>
            <View style={styles.buttonCarritoAcumulado}>
              <View style={styles.buttonCarritoAcumuladoBloque}>
                <Text style={styles.buttonCarritoTextText}>{cantidadItems}</Text>
              </View>
              {/* usestate de la cantidad total de items que van en el carrito */}
            </View>
            <View style={styles.buttonCarritoText}>
              <Text style={styles.buttonCarritoTextText}>Hacer pedido</Text>
            </View>
            <View style={styles.buttonCarritoAcumuladoCost}>
              <Text style={styles.buttonCarritoTextText2}>${cartTotal+21}.60</Text>
              {/* usestate de la cantidad de costo total de items que van en el carrito */}
            </View>
          </View>
        </TouchableCmp>
      </View>
      </View> 
    </View>
  )
}

export default ScreenDetallesCompra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  part1:{
    backgroundColor:'white',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * .4,
  },
  part2:{
    // backgroundColor:'green',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * .6,
    marginTop:Dimensions.get('window').height*.07
  },
  style1:{
    backgroundColor:'white',
    width: Dimensions.get('window').width * .549,
    height:Dimensions.get('window').height * .100,
    flexDirection:'row',
    marginLeft:'5%',
    justifyContent:'space-between',
    alignItems:'flex-end',
  },
  style2:{
    backgroundColor:'white',
    width: Dimensions.get('window').width * .900,
    height:Dimensions.get('window').height * .060,
    borderRadius: 15,
    marginLeft:'5%',
    marginTop:'9%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  style3:{
    // backgroundColor:'red',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * 0.225,
    marginTop:'7%'
  },
  style4:{
    // backgroundColor:'purple',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * .450
  },
  style5:{
    position: 'absolute',
    backgroundColor:'#2BD781',
    width: Dimensions.get('window').width * .900,
    height:Dimensions.get('window').height * .080,
    marginLeft:'5%',
    marginTop: Dimensions.get('window').height * .465,
    borderRadius:15,
  },
  style6:{
    width: '60%',
    height:Dimensions.get('window').height * .080,
    marginLeft:'35%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  style7:{
    width: '90%',
    height: '30%',
    marginLeft:'5%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:5,
    marginBottom:5
  },
  txt1:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
  },
  txtP1:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
    marginLeft:'5%'
  },
  txt2:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:14,
  },
  txt3:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
    color: '#2BD781'
  },
  txtP4:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:12,
    color: 'black',
    marginLeft:'5%'
  },
  txtP5:{
    fontFamily:'Nunito-Light',
    fontSize:13,
    color: 'black',
    marginLeft:'5%'
  },
  txtP6:{
    fontFamily:'Nunito-Light',
    fontSize:12,
    color: 'grey',
    marginLeft:'5%',
  },
  txtB1:{
    fontFamily:'Nunito-SemiBold',
    fontSize:16,
    color:'white',
  },
  txtB2:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
    color:'white',
  },
  cuadrito:{
    borderRadius:20,
    borderWidth:.5,
    borderColor:'grey',
    height: Dimensions.get('window').height*0.05,
    width:'18%',
    alignItems:'center',
    justifyContent:'center'
  },
  cuadrito2:{
    borderRadius:20,
    borderWidth:5,
    borderColor:'#2BD781',
    height: Dimensions.get('window').height*0.05,
    width:'18%',
    alignItems:'center',
    justifyContent:'center'
  },
  txtCuadrito:{
    color: 'grey',
    fontFamily:'Nunito-ExtraBold',
    fontSize:14
  },
  txtCuadrito2:{
    color: '#2BD781',
    fontFamily:'Nunito-ExtraBold',
    fontSize:14
  },
  resumen:{
    marginTop:'5%',
    // backgroundColor: 'red',
    marginLeft: '5%',
    width: '90%',
  },
  resumenfila:{
    flexDirection: 'row',
    // backgroundColor:'pink',
    justifyContent: 'space-between',
    marginBottom: Dimensions.get('window').height*0.02
  },
  resumenTextInfo:{
    // backgroundColor: 'blue',
    color:'gray',
    fontFamily: 'Nunito-SemiBold',
  },
  resumenCostoDigitos:{
    fontFamily: 'Nunito-SemiBold',
    // backgroundColor: 'green',
  },
  aviso:{
    marginLeft: '5%',
    marginTop: '5%',
    width: '90%',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 11,
    color: 'gray',
  },
  buttonCarritoPre:{
    position: 'absolute',
    bottom: Dimensions.get('window').height*0.05,
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.15,
    borderRadius:20,
    marginLeft: Dimensions.get('window').width*0.05,
    // marginBottom: Dimensions.get('window').height*0.025,
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
    justifyContent: 'center',
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
  buttonCarritoText:{
    width:'60%',
    // backgroundColor:'magenta',
    alignItems: 'center',
  },
  buttonCarritoTextText:{
    color: 'white',
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold'
  },
  buttonCarritoTextText2:{
    color: 'white',
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold'
  },
  buttonCarritoAcumuladoCost:{
    width: '20%',
    // backgroundColor:'blue',
    alignItems: 'center',
  },
});