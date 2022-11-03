import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../styles/colors";

function Rating({movieRating}){

    return (
        <View style={style.ratingContainer}>
            <Text style={style.ratingText}>{movieRating}</Text>
        </View>
    );

}
export default Rating;
const style = StyleSheet.create({
    ratingContainer:{
        backgroundColor: Colors.secondary,
        minHeight:50,
        minWidth: '20%',
        maxWidth: 50,
        justifyContent: 'center',
        alignItems:  "center",
        borderRadius: 12,
    },
    ratingText:{
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold'
    }
});