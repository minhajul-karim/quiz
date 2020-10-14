import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import QuizIndex from './screens/QuizIndex'
import Quiz from './screens/Quiz'

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
