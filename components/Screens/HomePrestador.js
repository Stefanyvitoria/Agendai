import React from "react";
import {
    StyleSheet, 
    View, 
    Image,
    ImageBackground, 
    Text, 
    StatusBar,
    Dimensions
    } 
from "react-native";
import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { BottomNavigation } from 'react-native-paper';


export default function HomePrestador({navigation}) {
    const MusicRoute = () => <PrimaryButton text='ok' onPress={()=>navigation.navigate('LoginUm')}></PrimaryButton>;
    
    const AlbumsRoute = () => <Text style={styles.text}>Albums</Text>;
    
    const RecentsRoute = () => <Text style={styles.text}>Recents</Text>;
    
    const NotificationsRoute = () => <Text style={styles.text}>Notifications</Text>;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
    });

    return (
        <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}/>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "flex-start",
        alignItems : 'center',

        backgroundColor : 'yellow',
    },
    
    text : {
        color : colors.color1
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: "center",
        marginHorizontal : 15,
    },
});
