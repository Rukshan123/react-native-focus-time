import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";

export const Focus = () => {
    const [subject, setSubject] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setSubject}
                    label="What would you like to focus on"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 0.5,
        padding: 25,
        justifyContent: "flex-start",
    },
});
