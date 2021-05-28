import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button} from "react-native-elements";
import * as firebase from "firebase";
import { validateEmail } from "../../utils/validations";
import { reauthenticate } from "../../utils/api";

export default function ChangeEmailForm(props){
    const{email, setShowModal, toastRef, setReloadUserInfo}= props;
    const [formData, setFormData] = useState(defaultValue());
    const [showPassword, setshowPassword] = useState(false)
    const [errors, setErrors] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text})
    }

    const onSubmit = () => {
        setErrors({});
        if(!formData.email || email === formData.email){
            setErrors({
                email: "El email no ha cambiado",
            });
        } else if(!validateEmail(formData.email)){
            setErrors({
                email: "Email incorrecto",
            });
        } else if (!formData.password){
            setErrors({
                password: "La contraseña no puede estar vacía",
            })
        } else {
            setIsloading(true);
            reauthenticate(formData.password)
            .then(() => {
                firebase.auth()
                    .currentUser.updateEmail(formData.email)
                    .then(() => {
                        setIsloading(false);
                        setReloadUserInfo(true);
                        toastRef.current.show("Email actualizado correctamente");
                        setShowModal(false);
                    })
                    .catch(() => {
                        setErrors({ email: "error al actualizar el Email"})
                        setIsloading(false);
                    })
           }).catch(() => {
                setIsloading(false);
               setErrors({ password: "La contraseña no es correcta "})
           })
        }
    }
    return (
        <View style={StyleSheet.view}>
            <Input 
            placeholder="Correo electronico" 
            containerStyle={styles.input}
            defaultValue={email || ""}
            rightIcon={{
                type: "material-community",
                name: "at",
                color: "#c2c2c2",
            }}
            onChange={(e) => onChange(e, "email")}
            errorMessage={errors.email}
            />
            <Input 
                placeholder="Contraseña" 
                containerStyle={styles.input}
                passwordRules={true}
                secureTextEntry={showPassword ? false : true}
                rightIcon={{
                    type: "material-community",
                    name: showPassword ? "eye-off-outline" : "eye-outline",
                    color: "#c2c2c2",
                    onPress: () => setshowPassword(!showPassword),
                }}
            onChange={(e) => onChange(e, "password")}
            errorMessage={errors.password}
            />
            <Button
                title="Cambiar Email"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                loading={isLoading}
            />
        </View>
    )
}

function defaultValue(){
    return {
        email: "",
        password: "",
    }
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        marginBottom: 10
    }, 
    btnContainer: {
        marginTop: 20,
        width: "95%", 
    },
    btn: {
        backgroundColor: "#00a680"
    }

});