import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import RowItem from '../components/RowItem'
import computerQuestions from '../data/computers'
import spaceQuestions from '../data/space'
import westernQuestions from '../data/westerns'

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Computer"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Computer',
          questions: computerQuestions,
          bgColor: '#36b1f0',
        })
      }
    />
    <RowItem
      name="Space"
      color="#799496"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Space',
          questions: spaceQuestions,
          bgColor: '#799496',
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#49475B"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Western',
          questions: westernQuestions,
          bgColor: '#49475B',
        })
      }
    />
  </ScrollView>
)
