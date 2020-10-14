import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#03254E',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
})

export default function Summary({ navigation, route }) {
  console.log(navigation, route)
  const containerStyle = [
    styles.container,
    { backgroundColor: route.params.bgColor },
  ]
  return (
    <View style={containerStyle}>
      <Text style={styles.scoreText}>
        {`You scored ${route.params.correctAnsCount} / ${route.params.numberOfQuestions}`}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('listOfQuizzes')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}
