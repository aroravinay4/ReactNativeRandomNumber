import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {

    return (

        <View style={styles.screen}>
            <BodyText>Game is Over.</BodyText>
            <View style={styles.imageContainer}>
                {<Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover" />}
                {/* <Image source={{ uri: 'https://res.cloudinary.com/demo/image/fetch/fl_png8/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' }} /> */}
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to guess number
            <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestart} >New Game</MainButton>

        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: '100%',
        height: '100%'

    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        borderColor: 'black',
        borderWidth: 3,
        height: 300,
        overflow: 'hidden'


    },
    highlight: {
        fontFamily: 'OpenSansBold',
        color: Colors.primary,



    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 50


    },
    resultText: {
        textAlign: "center",
        fontSize: 20
    }


});

export default GameOverScreen;