import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.nick}>qck</Text>
            <Text style={styles.nome}>Gabriel Lima</Text>
            <Image
            style={styles.playerImage}
            source={{uri: 'https://owcdn.net/img/62795e2ff2d4f.png'}}
            />
            <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    nick: {
        color: 'lime',
        fontWeight: 'bold',
        fontSize: '1.3rem',
    },
    nome: {
        color: 'white'
    },
    playerImage: {
        margin: 20,
        width: 200,
        height: 200,
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: "lime",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: "black",
        fontSize: 20,
    },
})