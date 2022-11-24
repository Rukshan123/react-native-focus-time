import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setSubject}
                    label="Focusing On ?"
                />
                <View style={styles.button}>
                    <RoundedButton
                        onPress={() => addSubject(subject)}
                        title="+"
                        size={50}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        padding: spacing.lg,
        justifyContent: "flex-start",
    },
    button: {
        justifyContent: "center",
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm,
    },
});
