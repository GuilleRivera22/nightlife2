import React from 'react';
import { LogBox } from "react-native";
import { firebaseApp } from "./app/utils/Firebase";
import Navigation from "./app/navigations/Navigations";
import { decode, encode } from "base-64";
// Quitar avisos de consola o mensajes popup del android.

LogBox.ignoreLogs(["Setting a timer", "expo-permissions is now"]);

if(!global.btoa) global.btoa= encode;
if(!global.atob) global.atob= decode;
export default function App() {

  return (
    <Navigation></Navigation>
  );
}


