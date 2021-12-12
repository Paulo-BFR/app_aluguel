import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function House({ cover }) {
    return (
        <View style={style.container}>
            <View>
                <Image
                    source={cover}
                    style={style.cover}
                />
            </View>

            <View style={style.content}>
                <Text style={style.description}>
                    Condominio com vigilancia 24h e otima vista.
                </Text>
                <Text style={style.price}>
                    R$ 899,90
                </Text>
            </View>

        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
    },
    cover: {
        borderRadius: 10,
        width: 60,
        height: 60
    },
    content: {
        width: '65%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: '100%'
    },
    description: {
        fontSize: 14,
    },
    price: {
        fontSize: 12,
        //fontFamily: 'bold'
    }
});