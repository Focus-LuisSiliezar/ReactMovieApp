import { StyleSheet, Text } from "react-native";

function Title({ label, styleOverride }) {
    return <Text style={[style.title, styleOverride]}>{label}</Text>
}

export default Title;
const style = StyleSheet.create({
    title: {
        fontSize: 21,
        fontWeight: "900",
        color:'white',
    }

});