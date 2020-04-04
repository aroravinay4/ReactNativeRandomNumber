import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enterValue, setEnterValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectNumber, setSelectNumber] = useState();


    const numberInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''));

    };

    const resetInputHandler = () => {
        setEnterValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enterValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99',
                [{ text: 'Okey', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectNumber(chosenNumber);
        setEnterValue('');
    };

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectNumber}</NumberContainer>

            <MainButton onPress={() => props.onStartGame(selectNumber)} >
                Start Game
            </MainButton>

        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>The Game Screen.</Text>



                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input style={styles.inpput}
                        blurOnSubmit autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enterValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 5,
        alignItems: "center",


    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
        paddingHorizontal: 10


    },
    title: {
        fontSize: 30,
        marginVertical: 10,
        fontFamily: 'OpenSansBold'

    },
    inputContainer: {
        padding: 20,
        width: '80%',

    },
    button: {
        width: 100
    },

    inpput: {
        width: '100%',
        textAlign: "center",

    },
    summaryContainer: {
        marginTop: 20,
        alignItems: "center",
        padding: 20

    }


});
export default StartGameScreen;