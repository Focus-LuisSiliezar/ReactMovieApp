import { useLayoutEffect } from "react";
import ListOfMovies from "../components/lists/ListOfMovies";
import HeaderImage from "../components/ui/HeaderImage";
import IconButton from "../components/ui/IconButton";
import ScreenDimensions from "../components/ui/ScreenDimensions";

function HomeScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <IconButton name='menu' color='white' styleOverride={{marginLeft: 20}} 
            onPress={()=> navigation.toggleDrawer()} 
            />,
            headerTitle: () => <HeaderImage />,
            headerRight: () => <IconButton styleOverride={{marginRight: 20}} name='search' color='white' 
             onPress={()=> navigation.navigate('SearchScreen')} 
            />
        });
    });

    return (
        <ScreenDimensions>
            <ListOfMovies />
        </ScreenDimensions>
    );
}

export default HomeScreen;