import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

function StartScreen({ navigation }) {
  return (
    <Background>
        <Paragraph>
          A simple React Native Expo Login template app.
        </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('')}
      >
        Create an account
      </Button>
    </Background>
  )
}


export default StartScreen; 
