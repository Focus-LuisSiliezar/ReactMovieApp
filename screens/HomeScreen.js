import { StyleSheet, Text, View } from "react-native";
import MovieCard from "../components/MovieCard";
import Title from "../components/ui/Title";
import { Colors } from "../styles/colors";

function HomeScreen() {

    return (
        <View style={style.root}>
            <Title
                label='Available Movies'
                styleOverride={{ color: Colors.primary }}
            />
            <View style={style.cardsContainer}>
                <MovieCard
                    movieTitle='TITLE'
                    movieDescription='Description ds d sd s d s ds d s d sd s ddsdsdjkjkjsdkjskdjskdjskdjskjdksjdksjdskjds kdjs kdjs dksj k sd opsodpskapodksa pod '
                    movieRating='100%'
                />
                <MovieCard
                    movieTitle='TITLE'
                    movieDescription='Description ds d sd s d s ds d s d sd s ddsdsdjkjkjsdkjskdjskdjskdjskjdksjdksjdskjds kdjs kdjs dksj k sd opsodpskapodksa pod '
                    movieRating='100%'
                />
                <MovieCard
                    movieTitle='TITLE'
                    movieDescription='Description ds d sd s d s ds d s d sd s ddsdsdjkjkjsdkjskdjskdjskdjskjdksjdksjdskjds kdjs kdjs dksj k sd opsodpskapodksa pod '
                    movieRating='100%'
                />
                <MovieCard
                    movieTitle='TITLE'
                    movieDescription='Description ds d sd s d s ds d s d sd s ddsdsdjkjkjsdkjskdjskdjskdjskjdksjdksjdskjds kdjs kdjs dksj k sd opsodpskapodksa pod '
                    movieRating='100%'
                />
            </View>
        </View>
    );
}

export default HomeScreen;

const style = StyleSheet.create({
    root: {
        marginHorizontal: 15
    }
});