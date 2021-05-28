import React from 'react';
import { LogBox } from "react-native";
import { firebaseApp } from "./app/utils/Firebase";
import Navigation from "./app/navigations/Navigations";

// Quitar avisos de consola o mensajes popup del android.

LogBox.ignoreLogs(["Setting a timer", "expo-permissions is now"]);

export default function App() {

  return (
    <Navigation></Navigation>
  );
}


