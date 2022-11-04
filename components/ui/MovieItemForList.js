import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../../styles/colors";
import Subtitle from "./Subtitle";
import Title from "./Title";

function MovieItemForList({ movieTitle, uri, onPress }) {

    return (
        <Pressable onPress={onPress}>
            <View style={style.cardContainer}>
                <ImageBackground
                    style={style.image}
                    source={require('../../assets/images/placeholder_image.png')}
                >
                    <View>
                        <Subtitle
                            label={movieTitle} />
                    </View>
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
});
