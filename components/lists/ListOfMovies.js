import { FlatList } from "react-native";
import MoviesModel from "../../models/movies";
import MovieCard from "../MovieCard";
import Title from "../ui/Title";

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
         '100%',
         '150'
    ),
    new MoviesModel(
        'm4',
        'Original Title',
        'This is the overview',
         '100%',
         '../poster/path',
         '1999-08-15',
         '100%',
         '150'
    ),
    new MoviesModel(
        'm5',
        'Original Title',
        'This is the overview',
         '100%',
         '../poster/path',
         '1999-08-15',
         '100%',
         '150'
    ),
    new MoviesModel(
        'm6',
        'Original Title',
        'This is the overview',
         '100%',
         '../poster/path',
         '1999-08-15',
         '100%',
         '150'
    ),
    new MoviesModel(
        'm6',
        'Original Title',
        'This is the overview',
         '100%',
         '../poster/path',
         '1999-08-15',
         '100%',
         '150'
    ),
    new MoviesModel(
        'm7',
        'Original Title',
        'This is the overview',
         '100%',
         '../poster/path',
         '1999-08-15',
         '100%',
         '150'
    ),
    new MoviesModel(
        'm8',
        'Original Title',
        'This is the overview',
         '100%',
         '../poster/path',
         '1999-08-15',
         '100%',
         '150'
    ),
    new MoviesModel(
        'm9',
        'Original Title',
        'This is the overview',
         '100%',
         '../poster/path',
         '1999-08-15',
         '100%',
         '150'
    ),
]
function ListOfMovies(){

    const renderItem = ({ item }) => (
        <MovieCard 
        movieTitle={item.originalTitle} 
        movieRating={item.voteAverage}
        movieDescription={item.releaseDate}
        />
      );

    return (
<FlatList
data={MOVIES}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
    );    
}

export default ListOfMovies;