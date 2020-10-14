import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import QuizIndex from './screens/QuizIndex'
import Quiz from './screens/Quiz'
import Summary from './screens/Summary'

const Stack = createStackNavigator()

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="listOfQuizzes">
        <Stack.Screen
          name="listOfQuizzes"
          component={QuizIndex}
          options={{ title: 'Quizzes' }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: route.params.bgColor,
            },
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen
          name="summary"
          component={Summary}
          options={({ route }) => ({
            headerLeft: null,
            title: 'Score',
            headerStyle: {
              backgroundColor: route.params.bgColor,
            },
            headerTintColor: '#fff',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
