import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import DiscotecasStack from "./DiscotecasStack";
import TopDiscotecasStack from "./TopDiscotecasStack";
import FavoritesStack from "./FavoritesStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
     <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Discotecas"
            tabBarOptions={{
                inactiveTintColor: "#646464",
                activeTintColor: "#00a680",
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
            })}
        >
            <Tab.Screen 
                name="Discotecas" 
                component={DiscotecasStack} 
                options={{ title: "Discotecas"}}/>
            <Tab.Screen 
                name="Favorites" 
                component={FavoritesStack}
                options={{ title: "favoritos"}}
            />
            <Tab.Screen
                name="Top-Discotecas"
                component={TopDiscotecasStack}
                options={{ title: "Top 5"}}
            />
            <Tab.Screen
                name="Search"
                component={SearchStack}
                options={{ title: "Buscar"}}
            />
            <Tab.Screen
                name="Account"
                component={AccountStack}
                options={{ title: "Cuenta"}}
            />
        </Tab.Navigator>
    </NavigationContainer>
    )
}
function screenOptions(route, color){
    let iconName;

    switch (route.name){
        case "Discotecas":
            iconName = "party-popper"
            break;
        case "Favorites":
            iconName = "heart-outline"
            break;
        case "Top-Discotecas":
            iconName = "star-outline"
            break;
        case "Search":
            iconName = "magnify"
        break;
        case "Account":
            iconName = "account-circle-outline"
        break;
        default:
            break;
    }
    return(
        <Icon type="material-community" name={iconName} size={22} color={color}/>
    );
}