import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';



const GameOverScreen = props => {

    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);


    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);

        };
    });

    return (
        <SafeAreaView>
            <ScrollView>
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
            </ScrollView>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'

    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        width: Dimensions.get('window').width * 0.7,
        borderColor: 'black',
        borderWidth: 3,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
    },
    highlight: {
        fontFamily: 'OpenSansBold',
        color: Colors.primary,



    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60,


    },
    resultText: {
        textAlign: "center",
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    }


});

export default GameOverScreen;