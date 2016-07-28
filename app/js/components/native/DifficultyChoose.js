import React, {Component}  from 'react';
import {StyleSheet, Text, View, Platform } from 'react-native'
import {colors} from '../../modules';
import {TIME_DURATION} from '../../constants/constants';

const difficulties = (props) =>
  Object.keys(TIME_DURATION).map((key, i) =>
    <View style={`bg-${colors()[i]} color-item circle`} key={i} onClick={() => props.actions.changeDifficulty(key)}>
      <Text>{key}</Text>
    </View>
  );


export const DifficultyChoose = (props) =>
  <View style={styles.gameWrapper}>
    <Text style={styles.heading}>Choose the colour, not the word.</Text>
    <View style={styles.colorChoiceList}>
      {difficulties(props)}
    </View>
  </View>


const styles = StyleSheet.create({
  gameWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 30,
    top: 10,
    fontWeight: 'bold'
  },
  colorChoiceList: {

  }
});
