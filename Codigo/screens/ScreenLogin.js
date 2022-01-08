//SCREEN 1
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import TouchableCmp from '../componentes/UI/TouchableCmp.js';

const ScreenLogin = ({ navigation }) => {
  function goToNumber() {
    navigation.navigate("ScreenTelefonoValido");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../Images/logoRappi.png")} />
      <View style={styles.viewBotones}>
        <View style={styles.viewGoogle}>
          <TouchableCmp>
            <View style={styles.botonGoogle}>
              <AntDesign name="google" size={24} color="white" style={styles.iconoGoogle}/>
              <Text style={styles.textContinua}>Continúa con Google</Text>
            </View>
          </TouchableCmp>
        </View>
        <View style={styles.viewTelefono}>
          <TouchableCmp onPress={goToNumber}>
            <View style={styles.botonTelefono}>
              <Foundation name="telephone" size={32} color="white" style={styles.iconoTelefono}/>
              <Text style={styles.textContinua}>Continúa con tu teléfono</Text>
            </View>
          </TouchableCmp>
        </View>
        <View style={styles.viewFacebook}>
          <TouchableCmp>
            <View style={styles.botonFacebook}>
              <FontAwesome5 name="facebook" size={24} color="white" style={styles.iconoFacebook}/>
              <Text style={styles.textContinua}>Continúa con Facebook</Text>
            </View>
          </TouchableCmp>
        </View>
      </View>
    </View>
  );
};
export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "80%",
    height: 300,
    marginTop: "30%",
    marginLeft: "10%",
    resizeMode: "contain",
  },
  iconoGoogle: {
    marginTop: "4.75%"
  },
  iconoTelefono: {
    marginTop: "4.2%"
  },
  iconoFacebook: {
    marginTop: "4.70%"
  },
  viewBotones: {
    marginTop: '16%',
  },
  viewGoogle: {
    height: Dimensions.get('window').height * 0.07,
    marginHorizontal:"6%",
    marginVertical:"2%",
    overflow: "hidden",
    borderRadius: 35,
  },
  viewTelefono: {
    height: Dimensions.get('window').height * 0.07,
    marginHorizontal:"6%",
    marginVertical:"2%",
    overflow: "hidden",
    borderRadius: 35,
  },
  viewFacebook: {
    height: Dimensions.get('window').height * 0.07,
    marginHorizontal:"6%",
    marginVertical:"2%",
    overflow: "hidden",
    borderRadius: 35,
  },
  textContinua: {
    color: "white",
    fontSize: 16,
    marginTop: '4.5%',
    fontFamily: "Nunito-ExtraBold",
    marginLeft: "10%",
  },
  botonGoogle: {
    backgroundColor: "#4483F4",
    borderRadius: 35,
    paddingLeft: "5%",
    width: "100%",
    height: "100%",
    flexDirection: 'row',
  },
  botonTelefono: {
    backgroundColor: "#2BD781",
    borderRadius: 20,
    paddingLeft: "5%",
    width: "100%",
    height: "100%",
    flexDirection: 'row',
  },
  botonFacebook: {
    backgroundColor: "#1676F1",
    borderRadius: 35,
    paddingLeft: "5%",
    width: "100%",
    height: "100%",
    flexDirection: 'row',
  },
});
