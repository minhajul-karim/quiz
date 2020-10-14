import React from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'

const screen = Dimensions.get('window')
const circleWitdth = screen.width / 2

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#ff4136',
    width: circleWitdth,
    height: circleWitdth,
    borderRadius: circleWitdth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleCorrect: {
    backgroundColor: 'green',
  },
  icon: {
    width: screen.width / 3,
  },
})

export const Alert = ({ hasAnswered, isCorrect }) => {
  if (hasAnswered) {
    const icon = isCorrect
      ? require('../assets/check.png')
      : require('../assets/close.png')
    const circleStyle = [styles.circle]
    if (isCorrect) circleStyle.push(styles.circleCorrect)
    return (
      <View style={styles.container}>
        <View style={circleStyle}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
      </View>
    )
  }
  return null
}
