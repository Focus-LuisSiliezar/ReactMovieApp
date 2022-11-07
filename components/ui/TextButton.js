import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

function TextButton({ label, onPress, iconName }) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && style.pressed}>
            <View style={style.buttonStyle}>
                <Text style={{ color: 'black', fontWeight: "bold", marginRight: 15, }}>{label}</Text>
                <Icon name={iconName}
                    size={15}
                    color='black'
                />
            </View>
        </Pressable>
    );
}
export default TextButton;

const style = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        backgroundColor: 'white',
        maxWidth: 300,
        width: 280,
        borderRadius: 4,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }, 
    pressed:{
        opacity: 0.7
    }
});