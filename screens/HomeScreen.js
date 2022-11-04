import { useLayoutEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import ListOfMovies from "../components/lists/ListOfMovies";
import HeaderImage from "../components/ui/HeaderImage";
import Title from "../components/ui/Title";

function HomeScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <HeaderImage />
        });
    });


    return (
        <View style={style.root}>
            <Title
                label='Available Movies'
                styleOverride={{ color: 'white' , paddingTop: 20}}
            />
                <ListOfMovies />
        </View>
    );
}

export default HomeScreen;

const style = StyleSheet.create({
    root: {
        flex:1 ,
        marginHorizontal: 15,
        paddingBottom: 15,
    },
    image: {
        width: '100%',
        height: 250,
    },
});