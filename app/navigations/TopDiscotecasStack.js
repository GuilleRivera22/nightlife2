import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopDiscotecas from "../screens/TopDiscotecas";

const Stack = createStackNavigator();

export default function TopDiscotecasStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen
            name = "top-discotecas"
            component = {TopDiscotecas}
            options= {{ title: "Discotecas Más Votadas"}}
        />
    </Stack.Navigator>
    )
}