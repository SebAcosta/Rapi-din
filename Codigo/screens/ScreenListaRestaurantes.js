//SCREEN 5
import React from 'react';
import {View, StyleSheet, Text, Dimensions, TextInput, FlatList, ScrollView} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import TouchableCmp from '../componentes/UI/TouchableCmp';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { RESTAURANT } from '../dummy-data/data';
import SearchCard from '../componentes/SearchCard';


const ScreenListaRestaurantes = (props) =>{

  function regresar(){
    props.navigation.navigate("Inicio");
  };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <AntDesign name="arrowleft" size={24} color="black" onPress={regresar}/>
              <TextInput
                style={styles.input}
                placeholder="¿Qué quieres comer?"
              />
              <View style={styles.botonBuscar1}>
                <TouchableCmp>
                  <View style={styles.botonBuscar2}>
                    <Entypo name="magnifying-glass" size={22} color={"#FFFFFF"} />
                    {/* <Text>Hola</Text> */}
                  </View>
                </TouchableCmp>
              </View>
              <View style={styles.bolsa}>
                <Feather name="shopping-bag" size={22} color="grey" />
              </View>
            </View>
            <View style={styles.Ctexto}>
              <Text style={styles.texto}>Recomendados para ti</Text>
            </View>
            <ScrollView style={styles.lista}>
              <FlatList
                data={RESTAURANT}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem= {itemData => (
                  <SearchCard {...props} productInfo={itemData.item}/>
                )}
              />
            </ScrollView>
        </View>
    )
}

export default ScreenListaRestaurantes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    height:Dimensions.get('window').height * 0.195,
    alignItems:'center',
    flexDirection:'row',
    width:Dimensions.get('window').width * .900,
    marginLeft:'5%',
  },
  input:{
    width:'64%',
    height:'30%',
    fontFamily: 'Nunito-Light',
    backgroundColor:'#F7F8FA',
    borderRadius:18,
    paddingLeft:15,
    marginLeft:10
  },
  botonBuscar1:{
    //marginLeft:'77%',
    //marginTop: '-11.25%',
    backgroundColor: '#F4503E',
    height:'30%',
    width:'13%',
    overflow: "hidden",
    borderRadius: 10,
  },
  botonBuscar2:{
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bolsa:{
    marginLeft:13
  },
  Ctexto:{
    marginTop:10,
    marginLeft:'5%'
  },
  texto:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:23
  },
  lista:{
    marginTop:15,
    marginBottom:60,
  }
});