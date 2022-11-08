import { useLayoutEffect } from "react";
import ListOfMovies from "../components/lists/ListOfMovies";
import HeaderImage from "../components/ui/HeaderImage";
import IconButton from "../components/ui/IconButton";
import ScreenDimensions from "../components/ui/ScreenDimensions";
import Icon from 'react-native-vector-icons/MaterialIcons';


function HomeScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <IconButton name='menu' color='white' styleOverride={{ marginLeft: 20 }}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerTitle: () => <HeaderImage />,
            headerRight: () => <IconButton styleOverride={{ marginRight: 20 }} name='search' color='white'
                onPress={() => navigation.navigate('SearchScreen')}
            />,
            title: 'Home',
            drawerIcon: ({ color }) => <Icon name='home' color={color} size={18} />

        });
    });

    return (
        <ScreenDimensions>
            <ListOfMovies />
        </ScreenDimensions>
    );
}

export default HomeScreen;