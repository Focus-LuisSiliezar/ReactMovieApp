import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import MoviesModel from "../../models/movies";
import MovieCard from "../MovieCard";
import ListContainerFlatList from "../ui/ListContainerFlatList";
import MovieItemForList from "../ui/MovieItemForList";

const MOVIES = [
    new MoviesModel(
        'm1',
        'Movie One',
        'This is the overview',
        '100%',
        'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
        '1999-08-15',
        '100%',
        '150'
    ),
    new MoviesModel(
        'm2',
        'Movie Two',
        'This is the overview for the secodn movie fht the sequel',
        '90%',
        'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
        '1999-08-15',
        '90%',
        '150'
    ),
    new MoviesModel(
        'm3',
        'Original Title',
        'This is the overview',
        '100%',
        null,
        '1999-08-15',
        '23%',
        '150'
    ),
    new MoviesModel(
        'm4',
        'Original Title',
        'This is the overview',
        '100%',
        null,
        '1999-08-15',
        '54%',
        '150'
    ),
    new MoviesModel(
        'm5',
        'Original Title',
        'This is the overview',
        '100%',
        'https://cdn.shopify.com/s/files/1/0608/8264/9321/files/blade_runner_2049_17_u.jpg?v=1637179276',
        '1999-08-15',
        '35%',
        '150'
    ),
    new MoviesModel(
        'm6',
        'Original Title',
        'This is the overview',
        '45%',
        'https://cdn.shopify.com/s/files/1/0608/8264/9321/files/blade_runner_2049_17_u.jpg?v=1637179276',
        '1999-08-15',
        '45%',
        '150'
    ),
    new MoviesModel(
        's6',
        'Original Title',
        'This is the overview',
        '52%',
        'https://cdn.shopify.com/s/files/1/0608/8264/9321/files/blade_runner_2049_17_u.jpg?v=1637179276',
        '1999-08-15',
        '52%',
        '150'
    ),
    new MoviesModel(
        'm7',
        'Original Title',
        'This is the overview',
        '90%',
        'https://cdn.shopify.com/s/files/1/0608/8264/9321/files/blade_runner_2049_17_u.jpg?v=1637179276',
        '1999-08-15',
        '90%',
        '150'
    ),
    new MoviesModel(
        'm8',
        'Original Title',
        'This is the overview',
        '85%',
        'https://cdn.shopify.com/s/files/1/0608/8264/9321/files/blade_runner_2049_17_u.jpg?v=1637179276',
        '1999-08-15',
        '85%',
        '150'
    ),
    new MoviesModel(
        'm9',
        'Original Title',
        'This is the overview',
        '70%',
        'https://cdn.shopify.com/s/files/1/0608/8264/9321/files/blade_runner_2049_17_u.jpg?v=1637179276',
        '1999-08-15',
        '70%',
        '150'
    ),
]
function ListOfMovies() {
    const navigator = useNavigation();
    function movieDetailsNavigator({ itemId, itemTitle, itemOverview, itemPoster, itemRating }) {
        navigator.navigate('DetailsScreen', {
            movieId: itemId,
            movieTitle: itemTitle,
            overview: itemOverview,
            moviePoster: itemPoster,
            movieRating: itemRating,
        })
        console.log(itemId);
    }

    const renderItem = ({ item }) => (
        <MovieItemForList
            onPress={() => {
                movieDetailsNavigator({ itemId: item.id, itemTitle: item.originalTitle, itemOverview: item.overview, itemPoster: item.posterPath, itemRating: item.voteAverage });
            }}
            movieTitle={item.originalTitle}
            uri={item.posterPath}

        />
    );

    return (
        <ListContainerFlatList>
            <FlatList
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 20 }}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
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
