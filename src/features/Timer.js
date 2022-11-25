import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import React, { useState } from "react";
import { Countdown } from "../components/Countdown";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject }) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN);
        setProgress(1);
        setIsStarted(false);
        reset();
    };

    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={onEnd}
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
                    style={{ height: spacing.sm, margin: spacing.sm }}
                    color={colors.lightBlue}
                />
            </View>
            <View style={styles.timingButtonWrapper}>
                <Timing OnChangeTime={setMinutes} />
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
            <View style={styles.clearSubject}>
                <RoundedButton size={50} title="Back" onPress={clearSubject} />
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
    timingButtonWrapper: {
        paddingTop: spacing.xxl,
        flex: 0.1,
        flexDirection: "row",
    },
    clearSubject: {
        flexDirection: "row",
        justifyContent: "center",
    },
});
