//SCREEN 4
import React from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView, TextInput, FlatList} from "react-native";
import { Entypo } from '@expo/vector-icons';

import SeccionesCard from '../componentes/SeccionesCard';
import TouchableCmp from '../componentes/UI/TouchableCmp';
import RestaurantCard from '../componentes/RestaurantCard';

import { RESTAURANT } from '../dummy-data/data';
import {SECTIONS} from "../dummy-data/sections"

const ScreenMenuPrincipal = (props) =>{

  function buscar(){
    props.navigation.navigate("Buscar");
  }

    return(
        <ScrollView style={styles.container} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
            <View style={styles.style1}> 
              <TextInput
                style={styles.input}
                placeholder="Buscar en rappi..."
              />
              <View style={styles.botonBuscar1}>
                <TouchableCmp onPress={buscar}>
                  <View style={styles.botonBuscar2}>
                    <Entypo name="magnifying-glass" size={24} color={"#FFFFFF"} />
                    {/* <Text>Hola</Text> */}
                  </View>
                </TouchableCmp>
              </View>
            </View> 
            <View style={styles.style2}>
              <View style={styles.encabezado}>
                <Text style={styles.secciones}>Secciones</Text>
                <Text style={styles.verTodo}>Ver todos</Text>
              </View>
              <View style={styles.cuerpo}>
                <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                  <FlatList 
                    data={SECTIONS}
                    scrollEnabled={false}
                    contentContainerStyle ={{paddingHorizontal:15, alignSelf:'flex-start'}}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={Math.ceil(SECTIONS.length / 2)}
                    keyExtractor={item => item.id.toString()}
                    renderItem = {itemData =>(
                      <SeccionesCard {...props} productInfo={itemData.item}/>
                    )}
                  />
                </ScrollView>
              </View>
            </View>
            <View style={styles.style3}>
              <View style={styles.encabezado}>
                <Text style={styles.restaurantes}>Restaurantes</Text>
                <TouchableCmp onPress={buscar}>
                  <Text style={styles.verTodo2}>Ver todos</Text>
                </TouchableCmp>
              </View>
              <View >
                <FlatList
                    data={RESTAURANT}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    scrollEnabled={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {itemData => (
                      <RestaurantCard {...props} productInfo={itemData.item}/>
                    )}
                  />
              </View>
            </View>
        </ScrollView>
    )
}

export default ScreenMenuPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  style1:{
    height:Dimensions.get('window').height * 0.150,
    width:Dimensions.get('window').width * 1,
    // backgroundColor:'#A00',
    backgroundColor:'#F7F8FA',
    borderRadius:15,
    flex:1,
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  style2:{
    height:Dimensions.get('window').height * 0.440,
    width:Dimensions.get('window').width * 1,
    backgroundColor:'#FBFBFB'
  },
  style3:{
    backgroundColor:'#FFFCF3',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * .850,
  },
  input:{
    width:'68%',
    height:'37%',
    marginTop:'16%',
    marginLeft:'7%',
    backgroundColor:'white',
    borderRadius:15,
    paddingLeft:17,
    fontFamily: 'Nunito-Light',
    flexDirection: "row",
  },
  secciones:{
    fontFamily: 'Nunito-ExtraBold',
    fontSize:20
  },
  encabezado:{
    flexDirection:'row',
    width:'85%',
    marginLeft:'7.5%',
    justifyContent:'space-between',
    height: Dimensions.get('window').height * 0.130,
    alignContent:'center',
    alignItems:'center'
  },
  verTodo:{
    fontFamily: 'Nunito-ExtraBold',
    fontSize:14,
    color:'#2BD781',
    marginTop:5
  },
  cuerpo:{
    height: Dimensions.get('window').height * 0.295,
    backgroundColor:'#FCFCFC'
  },
  restaurantes:{
    fontFamily: 'Nunito-ExtraBold',
    fontSize:35,
    color:'#F4503E'
  },
  verTodo2:{
    fontFamily: 'Nunito-ExtraBold',
    fontSize:14,
    color:'#D44838',
    marginTop:5
  },
  botonBuscar1:{
    marginLeft:'77%',
    marginTop: '-11.25%',
    backgroundColor: '#F4503E',
    height:'37%',
    width:'15%',
    overflow: "hidden",
    borderRadius: 10,
  },
  botonBuscar2:{
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});