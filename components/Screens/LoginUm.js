import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image,
    Dimensions
    } 
from "react-native";
import CheckBox from "@react-native-community/checkbox";import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height, fontScale } = Dimensions.get('window');

export default function LoginUm({navigation}) {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>LOGIN</Text>

            <View style={styles.componentes}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder={"YourEmail@Agendai.com"} keyboardType="email-address"></TextInput>

                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder={"********"} secureTextEntry={true}></TextInput>

                <View style={styles.row}>
                    <CheckBox style={styles.checkbox} ></CheckBox>
                    <Text style={styles.subText}>Manter Conectado</Text>
                </View>

                <PrimaryButton text={"Avançar"} onPress={() => navigation.navigate('LoginDois')}></PrimaryButton>

                <Text style={Object.assign({},styles.subText, styles.senha)}>Esqueceu a asenha?</Text>
                
                <View style={styles.row}>
                    <View style={styles.linha}></View>
                    <Text style={Object.assign({},styles.subText, {marginHorizontal: 5, color: colors.color1})}>OU</Text>
                    <View style={styles.linha}></View>
                </View>

                <View style={styles.row2}>
                    <Image style={styles.image} source={require("../../assets/google.png")}></Image>
                    <Image style={styles.image} source={require("../../assets/facebook.png")}></Image>
                </View>

                <Text style={Object.assign({}, styles.text, {fontSize : RFValue(10, width), alignSelf : 'center'})}>Não possui uma conta? Cadastre-se</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "flex-start",
        paddingHorizontal : 40,
        paddingVertical : 50,
        alignItems : 'center',
    },
    title : {
        flex : 1,
        fontSize : RFPercentage(5),
        color : colors.color1,
        alignSelf : 'flex-start',
        fontFamily : 'Fredoka-Medium',
    },
    componentes : {
        flex : 6,
        alignSelf : 'flex-start',
        width : '100%',
    },
    text : {
        color : colors.color1,
        fontSize : RFPercentage(3),
        fontFamily : 'Fredoka-Regular'
    },
    checkbox: {
        border : 1,
    },
    subText : {
        color : colors.color6,
        fontSize : RFPercentage(2),
        fontFamily : 'Fredoka-Regular'
    },
    input : {
        backgroundColor : colors.color4,
        borderRadius : 10,
        paddingHorizontal : 18,
        paddingVertical : 12,
        marginTop : 5,
        marginBottom: 15,
    },
    row : {
        alignItems : "center",
        flexDirection: "row",
        marginBottom : 15,
    },
    senha : {
        alignSelf : "flex-end",
        marginTop : 10,
        marginBottom : 15,
    },
    linha : {
        flex : 1,
        backgroundColor : colors.color1,
        height : 1.3,
    },
    row2 : {
        alignItems : "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal : width * 0.1,
        marginTop : 10,
        marginBottom : 20,
    },
    image : {
        width : RFValue(27, width),
        height : RFValue(27, width),
    }
});