import React, { useState, useRef } from "react";
import { View } from "react-native";
import Toast from "react-native-easy-toast";
import Loading from "../../components/Loading";
import AddDiscotecasForm from "../../components/Discotecas/AddDiscotecasForm";

export default function AddDiscoteca(props) {
    const { navigation } = props;
    const [isLoading, setIsLoading] = useState(false);
    const toastRef = useRef();

    return (
       <View>
           <AddDiscotecasForm 
            toastRef={toastRef}
            setIsLoading={setIsLoading}
            navigation={navigation}
           />
           <Toast ref={toastRef} position="center" opacity={0.9} />
           <Loading isVisible={isLoading}  text="Creando discoteca" />
       </View> 
    );
}
