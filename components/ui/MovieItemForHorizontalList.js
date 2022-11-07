import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../../styles/colors";

function MovieItemForHorizontalList({ uri, onPress }) {
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
export default MovieItemForHorizontalList;

const style = StyleSheet.create({
    cardContainer: {
        width: 150,
        height: 230,
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
