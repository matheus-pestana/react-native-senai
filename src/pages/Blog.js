import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Blog({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Players da LOUD</Text>
            <Pressable style={styles.botao} 
            onPress={() => navigation.navigate("Info1")}>
                <Text style={styles.textoBotao}>Tuyz</Text>
            </Pressable>
            
            <Pressable style={styles.botao} 
            onPress={() => navigation.navigate("Info2")}>
                <Text style={styles.textoBotao}>Cauanzin</Text>
            </Pressable>

            <Pressable style={styles.botao} 
            onPress={() => navigation.navigate("Info3")}>
                <Text style={styles.textoBotao}>Saadhak</Text>
            </Pressable>

            <Pressable style={styles.botao} 
            onPress={() => navigation.navigate("Info4")}>
                <Text style={styles.textoBotao}>Less</Text>
            </Pressable>

            <Pressable style={styles.botao} 
            onPress={() => navigation.navigate("Info5")}>
                <Text style={styles.textoBotao}>qck</Text>
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
    title: {
        color: 'white',
    },
    botao: {
        padding: 20,
        margin: 5,
        borderRadius: 5,
        width: 200,
        height: 40,
        backgroundColor: "lime",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        fontSize: 20,
    },
})