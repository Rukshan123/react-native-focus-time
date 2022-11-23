import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";

export const Focus = () => (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput label="What would you like to focus on" />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: colors.white,
    },
    inputContainer: {
        flex: 0.5,
        padding: 25,
        justifyContent: "flex-start",
    },
});
