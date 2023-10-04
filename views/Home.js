import React from "react";
import { Text, SafeAreaView, StyleSheet, Image, View, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    const regras = [
        "- Ser assinante a mais de 1 ano;",
        "- Ter mais de 18 anos;",
        "- Ter assistido mais de 100 filmes;",
        "- Ter muita criatividade;",
        "- Se divertir muito!;",
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Video
                        source={require("../assets/video/video.mp4")}
                        rate={1.0}
                        isMuted={true}
                        resizeMode="cover"
                        shouldPlay={true}
                        autoPlay="true"
                        loop="true"
                        style={styles.video}
                    />
                    <Text style={styles.title}>25 Anos de Netflix</Text>
                    <Text style={styles.description}>
                        Em comemoração aos 25 anos de <Text style={styles.destaque}>NETFLIX</Text> no Brasil, a empresa
                        resolveu fazer uma promoção para os usuários que estão a mais tempo na plataforma.
                    </Text>
                    <Text style={styles.destaqueRegras}>
                        Regras:
                    </Text>
                    <FlatList
                        style={styles.list}
                        data={regras}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text style={styles.itemText}>{item}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity onPress={
                        () => navigation.navigate("Cadastro")
                    }>
                        <Text style={styles.TextButton}>Participar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

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
    card: {
        backgroundColor: "transparent",
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    cardContent: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 8,
        padding: 10,
        width: 350,
        height: 600,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        color: "#fff",
        textAlign: "justify",
        padding: 10,
    },
    video: {
        width: "100%",
        height: 200,
    },
    destaque: {
        fontWeight: "bold",
        color: "#E50914",
    },
    list: {
        marginTop: 5,
    },
    listItem: {
        marginTop: 5,
        padding: 5,
        borderRadius: 8,
    },
    itemText: {
        color: "#fff",
    },
    destaqueRegras: {
        fontWeight: "bold",
        color: "#E50914",
        marginTop: 10,
        fontSize: 20,
    },
    TextButton: {
        backgroundColor: "#fff",
        borderRadius: 8,
        color: "#E50914",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
    },
});
