import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Perfil")
        }, 4800);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Video
                source={require("../assets/splash.mp4")}
                rate={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                style={styles.video}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#010001",
        alignItems: "center",
        justifyContent: "center",
    },
    video: {
        width: "100%",
        height: "100%",
    },
});
