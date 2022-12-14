import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../../styles/colors";

function MovieItemForList({  uri, onPress }) {

    return (
        <Pressable onPress={onPress}>
            <View style={style.cardContainer}>
                <ImageBackground
                    style={style.image}
                    source={
                        uri ? { uri: uri }
                            : require('../../assets/images/placeholder_image.png')
                    }
                >
                </ImageBackground>
            </View>
        </Pressable>


    );
}
export default MovieItemForList;

const style = StyleSheet.create({
    cardContainer: {
        maxWidth: 175,
        minWidth: '49.5%',
        backgroundColor: Colors.primary,
        borderRadius: 6,
        overflow: "hidden",
        marginHorizontal: 8,

    },
    image: {
        height: 250,
        width: '100%',

    },
    textContainer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: Colors.secondary50,
        width: '100%',
        padding: 5,
    }
});
