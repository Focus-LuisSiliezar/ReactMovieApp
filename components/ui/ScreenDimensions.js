import { StyleSheet, View } from "react-native";

function ScreenDimensions({children}){
    return(
        <View style={style.root}>
            {children}
        </View>
    );

}
export default ScreenDimensions;

const style = StyleSheet.create({
    root: {
        flex:1 ,
        marginHorizontal: 15,
        paddingBottom: 15,
    },
})