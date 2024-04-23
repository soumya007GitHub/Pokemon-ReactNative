import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const charmanderData = {
    name : "Charmander",
    image : require("./assets/charmander.png"),
    type : "Fire",
    hp : 39,
    moves : ["scratch", "Ember", "Growl", "Leer"],
    weakness : ["Water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
    <ScrollView>
    <PokemonCard {...charmanderData}/>
    <PokemonCard {...squirtleData}/>
    <PokemonCard {...pikachuData}/>
    <PokemonCard {...bulbasaurData}/>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 10,
    backgroundColor: '#fff',
  },
});
