import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Home from './Home';
// import { ImageBackground } from 'react-native-web';

export default function Login() {

    const navigator = useNavigation();

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/logo.jpg')}
                style={styles.logo}
            />

            <TextInput
                style={styles.input}
                placeholder='Digite seu e-mail'
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Digite sua senha'
            />
            <TouchableOpacity style={styles.botao}
                onPress={() => navigator.navigate('home')}
            >
                <Text style={styles.botaoText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 50
    },
    input: {
        marginBottom: 20,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        //fontWeight: 'bold',
        borderRadius: 3
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'

    },
    botaoText: {
        fontSize: 16,
        //fontWeight: 'bold',
        color: '#FFF'
    }

})