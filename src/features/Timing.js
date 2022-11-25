import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Timing = ({ OnChangeTime }) => {
    return (
        <>
            <View style={styles.timingBtn}>
                <RoundedButton
                    size={70}
                    title="10"
                    onPress={() => OnChangeTime(10)}
                />
            </View>
            <View style={styles.timingBtn}>
                <RoundedButton
                    size={70}
                    title="15"
                    onPress={() => OnChangeTime(15)}
                />
            </View>
            <View style={styles.timingBtn}>
                <RoundedButton
                    size={70}
                    title="25"
                    onPress={() => OnChangeTime(25)}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    timingBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
