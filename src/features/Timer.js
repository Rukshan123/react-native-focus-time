import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Countdown } from "../components/Countdown";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";

export const Timer = ({ focusSubject }) => {
    const [isStarted, setIsStarted] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <Countdown
                    isPaused={!isStarted}
                    onProgress={() => {}}
                    onEnd={() => {}}
                />
            </View>

            <View style={styles.buttonWrapper}>
                {!isStarted ? (
                    <RoundedButton
                        title="Start"
                        onPress={() => {
                            setIsStarted(true);
                        }}
                    />
                ) : (
                    <RoundedButton
                        title="Pause"
                        onPress={() => {
                            setIsStarted(false);
                        }}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countDown: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: "row",
        padding: spacing.md,
        justifyContent: "center",
        alignItems: "center",
    },
});
