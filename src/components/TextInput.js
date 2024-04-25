import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor="grey"
        underlineColor="transparent"
        mode="outlined"
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
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: "black",
  },
  description: {
    fontsize: 13,
    color: "black",
    paddingtop: 8,
  },
  error: {
    fontsize: 13,
    color:"black",
    paddingTop: 8,
  },
})
