import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Colors } from "../styles/colors";
import Paragraph from "./ui/Paragraph";
import Rating from "./ui/Rating";
import Subtitle from "./ui/Subtitle";

function MovieCard({ onPress,styleOverride, movieURI, movieTitle, movieDescription, movieRating }) {

    return (
        <Pressable  onPress={onPress}>
            <View style={[styleOverride, style.cardContainer]}>
                <View>
                    <Image
                        style={style.image}
                        source={require('../assets/images/placeholder_image.png')}
                    />
                </View>
                <View style={style.movieInfo}>
                    <View style={style.movieData}>
                        <Subtitle
                            label={movieTitle}
                            styleOverride={{ color: 'white' }}
                        />
                        <Paragraph
                            label={movieDescription}
                            styleOverride={{ color: 'white' }}
                        />
                    </View>
                    <View style={style.ratingData}>
                    <Rating
                        movieRating={movieRating}
                    />
                    </View>
            
                </View>
            </View>
        </Pressable>
    );
}

export default MovieCard;

const style = StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        marginVertical: 15,
        overflow: "hidden",

    },
    image: {
        width: '100%',
        height: 250,
    },
    movieInfo: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        alignContent: "space-between",
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    movieData: {
        marginRight: 10,
        alignItems:"flex-start"
    },
    ratingData:{
        maxWidth: '25%',
        alignItems:"flex-end",
    }
});


