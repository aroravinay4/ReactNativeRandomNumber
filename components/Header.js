import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {

    return (

        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        width: '100%',
        height: 60,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS == 'ios' ? '#ccc' : 'white',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0

    },
    headerTitle: {
        color: Platform.OS === 'ios' ? color.primary : 'white',
        fontSize: 18,
        fontFamily: 'OpenSansBold'


    },
    title: {

    }
});

export default Header;