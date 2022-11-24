import { View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import React, { useState } from "react";
import { Countdown } from "../components/Countdown";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";

export const Timer = ({ focusSubject }) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <Countdown
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={() => {}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Working On :</Text>
                    <View
                        style={{ alignItems: "center", marginLeft: spacing.sm }}
                    >
                        <Text style={styles.task}>{focusSubject}</Text>
                    </View>
                </View>
            </View>

            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar
                    progress={progress}
                    style={{ height: spacing.sm, padding: spacing.sm }}
                    color={colors.lightBlue}
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
    title: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center",
    },
    task: {
        color: colors.white,
        textAlign: "center",
    },
    textContainer: {
        flexDirection: "row",
        padding: spacing.lg,
        justifyContent: "flex-start",
        paddingTop: spacing.xxl,
    },
});
