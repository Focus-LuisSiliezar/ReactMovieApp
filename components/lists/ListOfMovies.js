import { FlatList, StyleSheet, View } from "react-native";
import MoviesModel from "../../models/movies";
import MovieCard from "../MovieCard";
import ListContainerFlatList from "../ui/ListContainerFlatList";

const MOVIES = [
    new MoviesModel(
        'm1',
        'Movie One',
        'This is the overview',
        '100%',
        '../poster/path',
        '1999-08-15',
        '100%',
        '150'
    ),
    new MoviesModel(
        'm2',
        'Movie Two',
        'This is the overview for the secodn movie fht the sequel',
        '90%',
        '../poster/path',
        '1999-08-15',
        '90%',
        '150'
    ),
    new MoviesModel(
        'm3',
        'Original Title',
        'This is the overview',
        '100%',
        '../poster/path',
        '1999-08-15',
        '23%',
        '150'
    ),
    new MoviesModel(
        'm4',
        'Original Title',
        'This is the overview',
        '100%',
        '../poster/path',
        '1999-08-15',
        '54%',
        '150'
    ),
    new MoviesModel(
        'm5',
        'Original Title',
        'This is the overview',
        '100%',
        '../poster/path',
        '1999-08-15',
        '35%',
        '150'
    ),
    new MoviesModel(
        'm6',
        'Original Title',
        'This is the overview',
        '45%',
        '../poster/path',
        '1999-08-15',
        '45%',
        '150'
    ),
    new MoviesModel(
        's6',
        'Original Title',
        'This is the overview',
        '52%',
        '../poster/path',
        '1999-08-15',
        '52%',
        '150'
    ),
    new MoviesModel(
        'm7',
        'Original Title',
        'This is the overview',
        '90%',
        '../poster/path',
        '1999-08-15',
        '90%',
        '150'
    ),
    new MoviesModel(
        'm8',
        'Original Title',
        'This is the overview',
        '85%',
        '../poster/path',
        '1999-08-15',
        '85%',
        '150'
    ),
    new MoviesModel(
        'm9',
        'Original Title',
        'This is the overview',
        '70%',
        '../poster/path',
        '1999-08-15',
        '70%',
        '150'
    ),
]
function ListOfMovies() {

    function movieDetailsNavigator(itemId) {
        console.log(itemId);
    }

    const renderItem = ({ item }) => (
        <MovieCard
            onPress={() => {
                movieDetailsNavigator(item.id);

            }}
            movieTitle={item.originalTitle}
            movieRating={item.voteAverage}
            movieDescription={item.releaseDate}
        />
    );

    return (
        <ListContainerFlatList >
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={MOVIES}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ListContainerFlatList>
    );
}

export default ListOfMovies;
