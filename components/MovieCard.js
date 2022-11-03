import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../styles/colors";
import Paragraph from "./ui/Paragraph";
import Rating from "./ui/Rating";
import Subtitle from "./ui/Subtitle";

function MovieCard({ styleOverride, movieURI, movieTitle, movieDescription, movieRating }) {

    return (
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
                <Rating
                    movieRating={movieRating}
                />
            </View>
        </View>
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
    movieInfo:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop: 15,
        marginBottom: 25,
        marginLeft: 10,
        marginRight: 25,
    },
    movieData:{
        maxWidth: '75%',
        marginRight: 10,
    }
});


