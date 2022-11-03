import { StyleSheet, Text, View } from "react-native";
import ListOfMovies from "../components/lists/ListOfMovies";
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
            <ListOfMovies />
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