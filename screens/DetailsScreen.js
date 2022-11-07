import { useLayoutEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import MovieDetails from "../components/MovieDetails";
import ScreenDimensions from "../components/ui/ScreenDimensions";

function DetailScreen({ route, navigation }) {
    const { movieTitle, movieId, overview, moviePoster, movieRating } = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Text style={{ color: 'white' }}>Fav</Text>
        });
    });

    return (
        <ScrollView>
            <ScreenDimensions>
                <MovieDetails
                    movieRating={movieRating}
                    movieTitle={movieTitle}
                    moviePoster={moviePoster}
                    movieOverview={overview}
                />
            </ScreenDimensions>
        </ScrollView>

    );

}

export default DetailScreen;