import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function IconButton({ name, color, onPress,styleOverride }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && style.pressed}>
            <Icon
            style={styleOverride}
                name={name}
                size={25}
                color={color}
            />
        </Pressable>
    );
}
export default IconButton;

const style = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});