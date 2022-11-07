import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../../styles/colors";
import Paragraph from "./Paragraph";

function MovieItemForList({ movieTitle, uri, onPress }) {
    if(uri == null){
    
    }
    return (
        <Pressable onPress={onPress}>
            <View style={style.cardContainer}>
                <ImageBackground
                    style={style.image}
                    source={
                    uri ?  {uri: uri}
                    :    require('../../assets/images/placeholder_image.png')
                    }
                >
                    {/* <View style={style.textContainer}>
                        <Paragraph
                            label={movieTitle}
                            styleOverride={{ color: 'white', fontWeight: 'bold' }}
                        />
                    </View> */}
                </ImageBackground>

            </View>
        </Pressable>


    );
}
export default MovieItemForList;

const style = StyleSheet.create({
    cardContainer: {
        maxWidth: 175,
        minWidth: '49.5%',
        backgroundColor: Colors.primary,
        borderRadius: 6,
        overflow: "hidden",
        marginHorizontal: 8,

    },
    image: {
        height: 250,
        width: '100%',

    },
    textContainer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: Colors.secondary50,
        width: '100%',
        padding: 5,
    }
});
