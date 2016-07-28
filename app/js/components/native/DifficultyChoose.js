import React, {Component}  from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native'
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
    <View style={circleStyle(i)} key={i} onClick={() => props.actions.changeDifficulty(key)}>
      <Text style={styles.circleText}>{key.toUpperCase()}</Text>
    </View>
  );

export const DifficultyChoose = (props) =>
  <View style={styles.gameWrapper}>
    <Text style={styles.heading}>Choose the colour, not the words.</Text>
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
  gameWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'green',
    top: 40,
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
    alignSelf: 'stretch',
    backgroundColor: 'yellow'
  }
});
