import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

import { Button, ButtonContainer } from '../components/Button'
import { Alert } from '../components/Alert'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20,
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeQuestionIndex: 0,
      correctAnsCount: 0,
      numberOfQuestions: this.props.route.params.questions.length,
      hasAnswered: false,
      isCorrect: false,
      isGameOver: false,
    }
    this.evaluate = this.evaluate.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isGameOver !== this.state.isGameOver) {
      this.props.navigation.navigate('listOfQuizzes')
    }
  }

  // Evaluate if an answer is correct
  evaluate = ({ correct }) => {
    this.setState(
      (state) => {
        if (correct) {
          return {
            correctAnsCount: state.correctAnsCount + 1,
            isCorrect: true,
            hasAnswered: true,
          }
        }
        return {
          hasAnswered: true,
          isCorrect: false,
        }
      },
      () => {
        setTimeout(() => {
          this.nextQuestion()
        }, 1000)
      }
    )
  }

  nextQuestion = () => {
    this.setState((state) => {
      const nextQuestionIndex = state.isCorrect
        ? state.activeQuestionIndex + 1
        : state.activeQuestionIndex
      if (nextQuestionIndex === state.numberOfQuestions) {
        return {
          isGameOver: true,
          hasAnswered: false,
        }
      }
      return {
        activeQuestionIndex: nextQuestionIndex,
        hasAnswered: false,
      }
    })
  }

  render() {
    const question = this.props.route.params.questions[
      this.state.activeQuestionIndex
    ]
    const containerStyle = [
      styles.container,
      { backgroundColor: this.props.route.params.bgColor },
    ]
    return (
      <View style={containerStyle}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>
            <ButtonContainer>
              {question.answers.map((answer) => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.evaluate(answer)}
                />
              ))}
            </ButtonContainer>
          </View>
          <Text style={styles.text}>
            {`${this.state.correctAnsCount}/${this.state.numberOfQuestions}`}
          </Text>
        </SafeAreaView>
        <Alert
          hasAnswered={this.state.hasAnswered}
          isCorrect={this.state.isCorrect}
        />
      </View>
    )
  }
}

export default Quiz
