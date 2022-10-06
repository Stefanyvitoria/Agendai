import React, { useState } from "react";
import {
    StyleSheet, 
    View,
    Text,
    TouchableOpacity
    } 
from "react-native";
import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function BottomBar({setTabAtual}) {

    const [fontTypeP, setFontTypeP]= useState('Fredoka-Bold');
    const [fontTypeA, setFontTypeA]= useState('Fredoka-Regular');
    const [fontTypeH, setFontTypeH]= useState('Fredoka-Regular');
    const [fontTypeR, setFontTypeR]= useState('Fredoka-Regular');
    
    function onPressTab(tabDestino) {

        if (tabDestino == 'Perfil') {
            setFontTypeP('Fredoka-Bold');
            setFontTypeA('Fredoka-Regular');
            setFontTypeH('Fredoka-Regular');
            setFontTypeR('Fredoka-Regular');
            setTabAtual('Perfil')

        } else if (tabDestino == 'Agenda') {
            setFontTypeP('Fredoka-Regular');
            setFontTypeA('Fredoka-Bold');
            setFontTypeH('Fredoka-Regular');
            setFontTypeR('Fredoka-Regular');
            setTabAtual('Agenda')

        }else if (tabDestino == 'Historico') {
            setFontTypeP('Fredoka-Regular');
            setFontTypeA('Fredoka-Regular');
            setFontTypeH('Fredoka-Bold');
            setFontTypeR('Fredoka-Regular');
            setTabAtual('Historico')

        }else {
            setFontTypeP('Fredoka-Regular');
            setFontTypeA('Fredoka-Regular');
            setFontTypeH('Fredoka-Regular');
            setFontTypeR('Fredoka-Bold');
            setTabAtual('Relatorio')
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab} onPress={() => onPressTab('Perfil')}>
                <Text style={Object.assign({}, styles.text, {fontFamily: fontTypeP,})}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => onPressTab('Agenda')}>
                <Text style={Object.assign({}, styles.text, {fontFamily: fontTypeA,})}>Agenda</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => onPressTab('Historico')}>
                <Text style={Object.assign({}, styles.text, {fontFamily: fontTypeH,})}>Histórico</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => onPressTab('Relatorio')}>
                <Text style={Object.assign({}, styles.text, {fontFamily: fontTypeR,})}>Relatório</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems : 'center',
        width : '100%',
        height : RFPercentage(6.5),
        backgroundColor : colors.color1,
        position: 'absolute',
        bottom: 0,
    },
    tab : {
        flex: 1,
        alignItems: "center",
    },
    text : {
        color : 'white',
        fontSize: RFPercentage(2.5),
    },
});
