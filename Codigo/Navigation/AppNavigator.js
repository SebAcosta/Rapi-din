import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

import ScreenLogin from "../screens/ScreenLogin";
import ScreenTelefonoValido from "../screens/ScreenTelefonoValido";
import ScreenCodigoAuth from "../screens/ScreenCodigoAuth";
import ScreenMenuPrincipal from "../screens/ScreenMenuPrincipal";
import ScreenListaRestaurantes from "../screens/ScreenListaRestaurantes";
import ScreenMapa from "../screens/ScreenMapa";
import ScreenRestaurante from "../screens/ScreenRestaurante";
import RestaurantCard from "../componentes/RestaurantCard";
import ScreenCarrito from "../screens/ScreenCarrito";
import ScreenDetallesCompra from "../screens/ScreenDetallesCompra";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function noScreenForNow() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WORK IN PROGRESS</Text>
    </View>
  );
}

export const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle:{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 35,
          height: 50,
          display: "flex",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.00,
          
          elevation: 1,
        }
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={ScreenMenuPrincipal}
        options={{
          tabBarIcon: ({focused}) => <AntDesign name="home" size={24} color={focused?"#F4503E":"gray"}/>,
          headerShown: false
        }}
      />

      <Tab.Screen
        name="Promos"
        component={noScreenForNow}
        options={{ 
          tabBarIcon: ({focused}) => <MaterialCommunityIcons name="brightness-percent" size={24} color={focused?"#F4503E":"gray"} />,
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="Buscar"
        component={ScreenListaRestaurantes}
        options={{ 
          tabBarIcon: ({focused}) => <Entypo name="magnifying-glass" size={24} color={focused?"#F4503E":"gray"} />,
          headerShown: false 
        }}
      />
      <Tab.Screen
        name="Soporte"
        component={noScreenForNow}
        options={{ 
          tabBarIcon: ({focused}) => <MaterialIcons name="support-agent" size={24} color={focused?"#F4503E":"gray"} />,
          headerShown: false 
        }}
      />
      <Tab.Screen
        name="Mi perfil"
        component={noScreenForNow}
        options={{ 
          tabBarIcon: ({focused}) => <AntDesign name="user" size={24} color={focused?"#F4503E":"gray"}/>,
          headerShown: false 
        }}
      />
      {/* <Tab.Screen
        name="Restaurantes"
        component={ScreenRestaurante}
        options={{ 
          tabBarIcon: ({focused}) => <AntDesign name="user" size={24} color={focused?"#F4503E":"gray"}/>,
          headerShown: false,
          tabBarButton: () => null,
          tabBarVisible: false
        }}
      /> */}
      <Tab.Screen
        name="RestaurantCard"
        component={RestaurantCard}
        options={{ 
          tabBarIcon: ({focused}) => <AntDesign name="user" size={24} color={focused?"#F4503E":"gray"}/>,
          headerShown: false,
          tabBarButton: () => null,
          tabBarVisible: false 
        }}
      />
    </Tab.Navigator>
  );
};

export const StackLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ScreenLogin"}
        component={ScreenLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenTelefonoValido"
        component={ScreenTelefonoValido}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ScreenCodigoAuth"}
        component={ScreenCodigoAuth}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const StackRestaurant = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ScreenRestaurante"}
        component={ScreenRestaurante}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ScreenCarrito"}
        component={ScreenCarrito}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ScreenDetallesCompra"}
        component={ScreenDetallesCompra}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenMapa"
        component={ScreenMapa}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;