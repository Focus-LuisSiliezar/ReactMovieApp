import { StyleSheet, Image, View, Text } from "react-native";
import ListOfMovies from "../components/lists/ListOfMovies";
import ScreenDimensions from "../components/ui/ScreenDimensions";
import Title from "../components/ui/Title";

function HomeScreen({ navigation }) {
    return (
        <ScreenDimensions>
            <Title
                label='Available Movies'
                styleOverride={{ color: 'white', paddingTop: 20 }}
            />
            <ListOfMovies />
        </ScreenDimensions>

    );
}

export default HomeScreen;