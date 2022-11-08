import { Alert, Image, StyleSheet, View } from "react-native";
import IconButton from "./ui/IconButton";
import Paragraph from "./ui/Paragraph";
import TextButton from "./ui/TextButton";
import Title from "./ui/Title";

function MovieDetails({ moviePoster, movieTitle, movieOverview, movieRating }) {
    return (
        <View>
            <Image
                style={style.image}
                source={moviePoster ? { uri: moviePoster } : require('../assets/images/placeholder_image.png')}
            />
            <View style={style.buttonRow}>
                <TextButton label='Play movie' iconName='play-arrow' onPress={() => Alert.alert('Movie unavailable at the moment', 'Please try again later')} />
                <IconButton name='add' color='white' />
                <IconButton name='cast' color='white' onPress={() => Alert.alert('Unable to connect', 'Please check your internet connection and try again later')} />
            </View>
            <View style={style.infoRow}>
                <Title
                    label={movieTitle} />
                <View style={style.infoRow}>
                    <Paragraph
                        label='Average Rating: '
                        styleOverride={{ fontWeight: 'bold' }}
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
        width: '100%',
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 3,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 5,
    }
});