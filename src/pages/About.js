import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.containerTexto}>O que é ser </Text>
                <Text style={styles.loud}>LOUD</Text>
                <Text style={styles.containerTexto}>?</Text>
            </View>

            <View>
                <Text style={styles.about}>
                    Fundada em 2019, a LOUD é a organização de esportes eletrônicos com maior número de seguidores nas redes sociais do Brasil e a segunda maior do mundo.
                     Em 2022, a equipe de Valorant da Loud ganhou o prêmio de Melhor Equipe de Esportes Eletrônicos no Esports Awards e no The Game Awards.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        display: 'flex',
        flexDirection: 'row',
    },
    containerTexto: {
        color: 'white',
        fontSize: '1.2rem',
    },
    loud: {
        color: 'lime',
        fontWeight: 'bold',
        fontSize: '1.3rem',
    },
    about: {
        color: 'white',
        textAlign: 'center',
        margin: 20,
    },
})