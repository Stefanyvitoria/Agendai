import React from "react";
import { StyleSheet,  View, Text, } from "react-native";

import colors from "../Constantes";

export default function appButton(props) {

    const styles = StyleSheet.create({
        button : {
            borderRadius: 15,
            backgroundColor : props.color == null ? colors.color1 : props.color,
            paddingHorizontal: 15,
            paddingVertical: 12,
            marginHorizontal : props.marginHorizontal == null ? 0 : props.marginHorizontal,
            justifyContent: 'center',
            alignItems : 'center',
        },
        text : {
            fontWeight: "bold",
            fontSize: 20,
            color : colors.color5,
        }
    });

    return (
        <View style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}


