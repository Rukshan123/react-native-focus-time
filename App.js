import {
    StyleSheet,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";
import { colors } from "./src/utils/colors";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Test 1</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.darkBlue,
    },
    text: {
        color: colors.white,
    },
});
