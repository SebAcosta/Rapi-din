import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import LoginValidation from "./Navigation/LoginValidator";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import authReducer from "./validators/reducers/authReducer";
import cartReducer from "./validators/reducers/cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  const fetchFonts = () =>{
    return Font.loadAsync({
      'Nunito-SemiBold': require('./assets/Fuentes/Nunito/Nunito-SemiBold.ttf'),
      'Nunito-Bold': require('./assets/Fuentes/Nunito/Nunito-Bold.ttf'),
      'Nunito-ExtraBold': require('./assets/Fuentes/Nunito/Nunito-ExtraBold.ttf'),
      'Nunito-Light': require('./assets/Fuentes/Nunito/Nunito-Light.ttf'),
    })
  }

  if(!fontLoaded){
    return(
        <AppLoading
            startAsync={fetchFonts}
            onFinish={()=>setFontLoaded(true)}
            onError={console.warn}
        />
    );
  }

  return (
    <Provider store={store}>
      <LoginValidation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
