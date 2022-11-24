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

export default function App() {
    const [currentSubject, setCurrentSubject] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            {!currentSubject ? (
                <Focus addSubject={setCurrentSubject} />
            ) : (
                <View>
                    <Text style={colors.white}>
                        Going to render the timer for {currentSubject}
                    </Text>
                </View>
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
