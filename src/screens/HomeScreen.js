import React from "react";
import { Text, StyleSheet, View, Button, SafeAreaView } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.title}>
            <Text>To Do List App</Text>
            <Button
                onPress={() => navigation.navigate("ToDo")}
                title="Go to To Do List App"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        alignItems: "center",
        marginTop: 10,
    },
});

export default HomeScreen;
