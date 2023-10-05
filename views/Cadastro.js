import React from "react";
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {

    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");

    return (
        <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Image source={require("../assets/logo.png")} style={styles.logo} />
                <View style={styles.forms}>
                    <Text style={styles.title}>Cadastro de Categoria</Text>
                    <Image source={require("../assets/images/Banner.png")} style={styles.imagem} />
                    <View style={styles.inputArea}>
                        <Ionicons name='create-outline' size={25} color="#000" />
                        <TextInput
                            value={categoria}
                            onChangeText={setCategoria}
                            style={styles.input}
                            placeholder="Nome da Categoria"
                            placeholderTextColor="#05050520"
                            maxLength={250}
                        />
                    </View>
                    <View style={styles.inputAreaDescricao}>
                        <View style={styles.inputIcon}>
                            <Ionicons name='document-text-outline' size={25} color="#000" />
                        </View>
                        <TextInput
                            value={descricao}
                            onChangeText={setDescricao}
                            style={[styles.input, styles.multilineInput]}
                            placeholder="Descrição da Categoria"
                            placeholderTextColor="#05050520"
                            editable
                            multiline
                            numberOfLines={10}
                            maxLength={500}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={
                            () => {
                                alert(`Categoria ${categoria} cadastrada com sucesso! `);
                            }
                        }>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        left: 20,
    },
    forms: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
    },
    inputArea: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 5,
        paddingLeft: 15,
        marginBottom: 15,
        elevation: 2,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        color: "#000",
        fontSize: 16,
    },
    button: {
        width: "100%",
        height: 60,
        backgroundColor: "#ff0000",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    multilineInput: {
        textAlignVertical: "top",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    imagem: {
        aspectRatio: 16 / 9,
        width: 400,
        height: 200,
        borderRadius: 5,
        marginBottom: 20,
    },
    inputAreaDescricao: {
        flexDirection: "row",
        paddingVertical: 10,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 5,
        paddingLeft: 15,
        marginBottom: 15,
        elevation: 2,
        height: 200,
    },

});

