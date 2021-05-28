import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import{ useNavigation } from "@react-navigation/native";
export default function UserGuest(){
    const navigation = useNavigation();
    
    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image 
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil de NightLife</Text>
            <Text style={styles.description}>
                ¿Estás cansado/a de ir siempre a las mismas discotecas? Bienvenido
                a NightLife, la mejor aplicación sobre ocio nocturno, descubre las
                mejores discotecas, pubs o lugares de entretenimiento y pasa una 
                noche de 10. 
            </Text>
            <View  style={styles.viewBtn}>
                <Button 
                 title="Ver tu perfil" 
                 buttonStyle={styles.btnStyle}
                 containerStyle={styles.btnContainer}
                 onPress= {() => navigation.navigate("login")}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        textAlign: "center",
        marginBottom: 20,

    },
    viewBtn:{
        flex: 1,
        alignItems: "center"
    },
    btnStyle: {
        backgroundColor: "#00a680",
    },
    btnContainer: {
        width: "70%",
    }
});