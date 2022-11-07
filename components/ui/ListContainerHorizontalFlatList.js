import { StyleSheet, View } from "react-native";

function ListContainerHorizontalFlatList({children}){
return <View style={style.listContainer}>{children}</View>
}

export default ListContainerHorizontalFlatList;

const style = StyleSheet.create({
    listContainer:{
        flex: 1,
        paddingTop: 15,
        alignItems:"center",
    }
});