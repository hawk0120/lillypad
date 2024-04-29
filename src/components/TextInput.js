import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {TextInput as PaperInput } from 'react-native-paper'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <PaperInput
        style={styles.input}
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
				alignItems: 'stretch',
					justifyContent: 'center',
				flexDirection: 'column',
				minWidth:'80%'
	},
  input: {
					
					backgroundColor: "grey",
	},
  description: {
	},
  error: {
  },
})

