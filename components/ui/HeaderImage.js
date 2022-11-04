import { Image, StyleSheet } from "react-native";

function HeaderImage(){
    return(
        <Image
        style={style.image}
        source={require('../../assets/images/logo.png')}
    />
    );
}
export default HeaderImage;

const style = StyleSheet.create({
    image: {
        maxHeight: 25,
        maxWidth: 100,
    },
});