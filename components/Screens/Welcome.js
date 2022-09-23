import React from "react";
import {
    StyleSheet, 
    View, 
    Image, 
    useWindowDimensions, 
    ImageBackground, 
    Text, 
    StatusBar
    } 
from "react-native";

import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function WelcomeScreen() {
    const window = useWindowDimensions();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.color1} barStyle={currentTheme == 'dark'? 'light-content' : 'dark-content'} />
        
            <ImageBackground 
                style={Object.assign({}, styles.imageBackground,
                    {   
                        width: window.width * 0.90,
                        height: window.height * 0.5,
                    })
                } 
                source={require('../../assets/BG.png')}>
                    
                <Image style={styles.logo} source={require('../../assets/AgendAi_Logo.png')} />

            </ImageBackground>

            <View style={styles.card}>

                <View style={styles.texts} >
                    <Text style= {styles.title}>Bem vindo ao AgendAí!</Text>
                    <Text style= {styles.subtitle}>Seu aplicativo de agendamentos.</Text>
                    <Text style={styles.text}>Aqui você pode consultar os serviços estéticos próximos à você e realizar agendamentos.</Text>
                </View>

                <View style={styles.button}>
                    <PrimaryButton text={'Comece agora mesmo!'} marginHorizontal={10}/>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.color1,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
    },
    imageBackground: {
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: "center",
    },
    logo: {
        width : '70%',
        height : '15%'
    },
    card : {
        flex : 1,
        backgroundColor : 'white',
        paddingTop : 50,
        paddingHorizontal: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width : '100%'
    },
    title : {
        color : colors.color1,
        fontSize : 35,
        fontFamily: 'Fredoka-Bold',
    },
    subtitle : {
        fontSize : 20,
        color : colors.color1,
        marginVertical : 25,
        fontFamily: 'Fredoka-SemiBold',
    },
    text : {
        fontSize: 17,
        color : colors.color1,
        fontFamily: 'Fredoka-Medium',
    },
    texts : {
        height: '45%',
    },
    button: {
        height: '40%',
        justifyContent : 'center',
    },
});