import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
    } 
from "react-native";

import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function LoginUm({navigation}) {

    return (
        <View style={styles.container}>
            <Button title="go welcome" onPress={() => navigation.navigate("Welcome")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "center",
        alignItems : 'center'
    },
});