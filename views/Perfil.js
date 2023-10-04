import React from "react";
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image
                source={require("../assets/logo.png")}
                style={styles.logo} />
            <Text style={styles.text}>Escolha seu perfil</Text>
            <SafeAreaView style={styles.PerfisView}>
                <TouchableOpacity onPress={
                    () => navigation.navigate("Home")
                }>
                    <Image
                        source={require("../assets/images/User1.png")}
                        style={styles.perfil} />
                    <Text style={styles.descricao}>Perfil 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                    () => navigation.navigate("Home")
                }>
                    <Image
                        source={require("../assets/images/User2.png")}
                        style={styles.perfil} />
                    <Text style={styles.descricao}>Perfil 2</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.PerfisView}>
                <TouchableOpacity onPress={
                    () => navigation.navigate("Home")
                }>
                    <Image
                        source={require("../assets/images/User3.png")}
                        style={styles.perfil} />
                    <Text style={styles.descricao}>Perfil 3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                    () => navigation.navigate("Home")
                
                }>
                    <Image
                        source={require("../assets/images/User4.png")}
                        style={styles.perfil} />
                    <Text style={styles.descricao}>Perfil 4</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    perfil: {
        aspectRatio: 1,
        width: 100,
        height: undefined,
    },
    descricao: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#000000",
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
    },
    logo: {
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        left: 20,
    },
    PerfisView: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
        width: "100%",
    },


});
