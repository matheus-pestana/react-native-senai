import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.containerTexto}>Como a LOUD é o melhor time da história do VALORANT</Text>
            <Image
            style={styles.containerImage}
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png'}}
            />
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
    containerTexto: {
        padding: 20,
        width: 250,
        color: 'lime',
        textAlign: 'center',
    },
    containerImage: {
        width: 200,
        height: 150,
    }
})