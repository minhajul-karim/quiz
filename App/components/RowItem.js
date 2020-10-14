import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  row: {
    padding: 20,
    marginBottom: 1,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
})

export default function RowItem({ name, color, onPress = () => {} }) {
  const rowColor = [styles.row, { backgroundColor: color }]
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={rowColor}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}
