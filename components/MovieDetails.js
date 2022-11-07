import { Image, StyleSheet, View } from "react-native";
import Paragraph from "./ui/Paragraph";
import Rating from "./ui/Rating";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";

function MovieDetails({ moviePoster, movieTitle, movieOverview, movieRating }) {
    return (
        <View>
            <Image
                style={style.image}
                source={moviePoster ? { uri: moviePoster } : require('../assets/images/placeholder_image.png')}
            />
            <View style={style.infoRow}>
                <Title
                    label={movieTitle} />
                <View style={style.infoRow}>
                    <Paragraph
                        label='Average Rating: '
                        styleOverride={{fontWeight: 'bold'}}
                    />
                    <Paragraph
                        label={movieRating} />
                </View>

            </View>
            <Paragraph
                label={movieOverview} />
        </View>
    );
}

export default MovieDetails;

const style = StyleSheet.create({
    image: {
        height: 550,
        width: '100%'
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 3,

    }

});