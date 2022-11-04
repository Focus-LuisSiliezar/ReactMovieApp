import { StyleSheet, View } from "react-native";

function ListContainerFlatList({children}){
return <View style={style.listContainer}>{children}</View>
}

export default ListContainerFlatList;

const style = StyleSheet.create({
    listContainer:{
        flex: 1,
        paddingTop: 15,
        alignItems:"center",
    }
});