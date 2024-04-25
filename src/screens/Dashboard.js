import React from 'react'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Paragraph>
        Congratulations you are logged in.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Sign out
      </Button>
    </Background>
  )
}
