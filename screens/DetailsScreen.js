import { useLayoutEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import ListOfRelatedMovies from "../components/lists/ListOfRelatedMovies";
import MovieDetails from "../components/MovieDetails";
import IconButton from "../components/ui/IconButton";
import ScreenDimensions from "../components/ui/ScreenDimensions";

function DetailScreen({ route, navigation }) {
    const { movieTitle, movieId, overview, moviePoster, movieRating } = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton name='star' color='white' />,
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
                <ListOfRelatedMovies />
            </ScreenDimensions>
        </ScrollView>
    );
}

export default DetailScreen;