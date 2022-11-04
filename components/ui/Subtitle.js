import { StyleSheet, Text } from "react-native";

function Subtitle({ label, styleOverride }) {
    return <Text style={[style.subtitle, styleOverride]}>{label}</Text>
}

export default Subtitle;
const style = StyleSheet.create({
    subtitle: {
        fontSize: 17,
        fontWeight: "700",
    }

});     