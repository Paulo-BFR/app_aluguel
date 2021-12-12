import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import New from '../components/New'
import House from '../components/House';
import Recomended from '../components/Recomended';

export default function Home() {

    const navigation = useNavigation();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#FFF', }}>

            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name='search' size={24} color='black' />
                    <TextInput
                        placeholder='O que está procurando?'
                        style={styles.input}
                    />
                </View>

            </View>
            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
                <New
                    cover={require('../assets/house1.jpg')}
                    name='Casa de Praia'
                    description='Casa nova e linda a uma quadra do mar, lugar seguro e monitorado 24horas.'
                    onPress={() => navigation.navigate('detail')}
                />

                <New
                    cover={require('../assets/house2.jpg')}
                    name='Casa em Petrópolis'
                    description='Casa nova e linda a uma quadra do mar, lugar seguro e monitorado 24horas.'
                    onPress={() => { }}
                />

                <New
                    cover={require('../assets/house3.jpg')}
                    name='Casa em Petrópolis'
                    description='Casa nova e linda a uma quadra do mar, lugar seguro e monitorado 24horas.'
                    onPress={() => { }}
                />
            </ScrollView>

            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                <House
                    cover={require('../assets/house4.jpg')}
                />
                <House
                    cover={require('../assets/house5.jpg')}
                />
                <House
                    cover={require('../assets/house6.jpg')}
                />
            </ScrollView>

            <Text style={[styles.title, { marginTop: 20 }]}>
                Dica do Dia
            </Text>

            <ScrollView horizontal showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                <Recomended
                    cover={require('../assets/house1.jpg')}
                    house="Casa Castelanêa"
                    offer="20%"
                />
                <Recomended
                    cover={require('../assets/house6.jpg')}
                    house="Casa Alto da Serra"
                    offer="5%"
                />
                <Recomended
                    cover={require('../assets/house3.jpg')}
                    house="Casa Corrêas"
                    offer="15%"
                />
            </ScrollView>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input: {
        // fontFamily: "Montserrat-Bold",
        paddingHorizontal: 10,
        fontSize: 15,
        width: '90%'
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        //fontFamily: 'Montserrat_Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }

});