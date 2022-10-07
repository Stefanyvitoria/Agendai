import React from 'react';
import { StyleSheet,  View} from "react-native";


export default function SimpleCard(props) {

    const styles = StyleSheet.create({
        card : {
        flex : 1,
        backgroundColor : 'white',
        paddingTop : 50,
        paddingHorizontal: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width : '100%',
    },})
    
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    );
}

