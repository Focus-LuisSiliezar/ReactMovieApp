import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import ScreenDimensions from "../components/ui/ScreenDimensions";

function DetailScreen({route, navigation}) {
    const { movieTitle, movieId } = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ()=> <Text style={{color: 'white'}}>Fav</Text>
        });
    });

return (
    <ScreenDimensions>
        <Text style={{color:'white'}}>{movieTitle} {movieId}</Text>
    </ScreenDimensions>
);

 }

export default DetailScreen;