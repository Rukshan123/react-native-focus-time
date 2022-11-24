import {
    StyleSheet,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
} from "react-native";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";
import { useState } from "react";
import { Timer } from "./src/features/Timer";

export default function App() {
    const [currentSubject, setCurrentSubject] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            {!currentSubject ? (
                <Focus addSubject={setCurrentSubject} />
            ) : (
                <Timer
                    focusSubject={currentSubject}
                    onTimerEnd={() => {}}
                    clearSubject={() => {}}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.darkBlue,
    },
});
