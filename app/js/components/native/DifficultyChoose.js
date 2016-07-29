import React, {Component}  from 'react';
import {StyleSheet, Text, View, Platform, TouchableWithoutFeedback} from 'react-native'
import {colors} from '../../modules';
import {TIME_DURATION} from '../../constants/constants';

const circleStyle = (i) =>
  ({
    borderRadius: 100,
    width: 160,
    height: 160,
    padding: 50,
    flex: 0,
    margin: 10,
    backgroundColor: colors()[i]
  })

const difficulties = (props) =>
  Object.keys(TIME_DURATION).map((key, i) =>
    <TouchableWithoutFeedback onPress={() => props.actions.changeDifficulty(key)}>
      <View style={circleStyle(i)} key={i}>
        <Text key={i} style={styles.circleText}>{key.toUpperCase()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

export const DifficultyChoose = (props) =>
  <View>
    <Text style={styles.heading}>Choose the colour, not the word.</Text>
    <View style={styles.colorChoiceList}>
      {difficulties(props)}
    </View>
  </View>


const styles = StyleSheet.create({
  circleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    flex: 1
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  colorChoiceList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch'
  }
});
