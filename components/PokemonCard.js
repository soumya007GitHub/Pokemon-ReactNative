import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default PokemonCard = ({name, image, type, hp, moves, weakness})=>{
    const getTypeDetails = (type)=>{
        switch (type.toLowerCase()){
            case "electric":
                return { borderColor : "#FFD700", emoji : "⚡"};
            case "water":
                return { borderColor : "#6493EA", emoji : "💧"};
            case "fire":
                return { borderColor : "#FF5733", emoji : "🔥"};
            case "grass":
                return { borderColor : "#66CC66", emoji : "🌿"};
            default :
                 return { borderColor : "#A0A0A0", emoji : "❓"};
        }
    }
    const { borderColor, emoji } = getTypeDetails(type);
    return <View style = {[styles.box, styles.shadow]}>
    <View style = {styles.nameContainer}>
            <Text style = {styles.name}>{name}</Text>
            <Text style = {styles.hp}>❤️ {hp}</Text>
    </View>
    <Image source = {image} accessibilityLabel= {`${name} pokemon`} style = {styles.image}
        resizeMode="contain"
    />
    <View style = {styles.typeContainer}>
    <View style = {[styles.badge, {borderColor}]}>
        <Text style = {styles.typeEmoji}>{emoji}</Text>
        <Text style = {styles.typeText}>{type}</Text>
        </View>
    </View>
    <View style = {styles.moveContainer}>
        <Text style = {styles.moveText}>Moves: {moves.join(', ')}</Text>
    </View>
    <View  style = {styles.weaknessContainer}>
        <Text style = {styles.weaknessText}>Weaknesses: {weakness.join(', ')}</Text>
    </View>
    </View>
}

const styles = StyleSheet.create({
    box : {
        backgroundColor : "#fff",
        margin : 10,
        padding : 10,
        borderWidth : 2,
        borderColor : "#000",
        borderRadius : 15
    },
    shadow : {...Platform.select({
        ios : {
            shadowColor : "#000",
            shadowOffset : {
                width : 3,
                height : 3
            },
            shadowOpacity : 0.6,
            shadowRadius : 4
        },
        android : {
            elevation : 10
        }
    })
    },
    nameContainer : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginBottom : 32
    },
    name : {
        fontSize : 30,
        fontWeight : "bold"
    },
    hp : {
        fontSize : 22
    },
    image : {
        width :"100%",
        height : 200,
        marginBottom : 10,
    },
    typeContainer : {
        alignItems : "center",
        marginBottom : 20
    },
    badge : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        alignSelf : "center",
        paddingVertical : 6,
        paddingHorizontal : 12,
        borderRadius : 20,
        borderWidth : 4,
        width : 140
    },
    typeEmoji : {
        fontSize : 30,
        marginRight : 12,
    },
    typeText : {
        fontSize : 22,
        fontWeight : "bold",
    },
    moveContainer : {
        marginBottom : 16
    },
    moveText : {
        fontSize : 22,
        fontWeight : "bold"
    },
    weaknessContainer : {
        marginBottom : 8
    },
    weaknessText : {
        fontSize : 18,
        fontWeight : "bold"
    }
})