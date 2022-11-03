import { StyleSheet, Text } from "react-native";

function Paragraph({ label, styleOverride }) {
    return <Text style={[style.paragraph, styleOverride]}>{label}</Text>
}

export default Paragraph;
const style = StyleSheet.create({
    paragraph: {
        fontSize: 14,
        fontWeight: "400",
    }

});