import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0); // Estado inicial passado para o useState

  const handlerSetNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);

    setNumber(randomNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.fontNumber}>{number}</Text>
        <TouchableOpacity onPress={handlerSetNumber} style={styles.button}>
          <Text style={styles.fontButton}>Gerar Número</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontNumber: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 70,
    borderRadius: 110,
    backgroundColor: 'blue',
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  fontButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
