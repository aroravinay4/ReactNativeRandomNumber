import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';



const App: () => React$Node = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);

  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);

  };

  const GameOverHandler = numOfRounds => {

    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;


  if (userNumber && guessRounds <= 0) {

    content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler} />
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen
      roundNumber={guessRounds}
      userNumber={userNumber}
      onRestart={configureNewGameHandler} />;
  }

  return (
    <ScrollView style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1

  }
});

export default App;
