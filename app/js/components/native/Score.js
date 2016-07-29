import React, {Component}  from 'react';
import {StyleSheet, Text, View} from 'react-native'

export const Score = (props) =>
  <View style={styles.scoreWrapper}>
    <Text style={styles.scoreText}>Score: {props.score.currentScore}</Text>
    <Text style={styles.scoreText}>Top Score: {props.score.topScore}</Text>
  </View>


const styles = StyleSheet.create({
  scoreText: {
    textAlign: 'center',
    backgroundColor: 'purple',
  },
  scoreWrapper: {
    marginTop: 30
  }
})
