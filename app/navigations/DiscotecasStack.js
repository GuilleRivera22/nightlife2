import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Discotecas from "../screens/Discotecas/Discotecas";
import AddDiscoteca from "../screens/Discotecas/AddDiscoteca";

const Stack = createStackNavigator();

export default function DiscotecasStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "discotecas"
                component = {Discotecas}
                options = {{ title : "Discotecas"}}
            />
            
        <Stack.Screen 
            name="add-discoteca"
            component={AddDiscoteca}
            options= {{title: "Añadir nueva discoteca"}}
        />
        </Stack.Navigator>
    )
}