import React, {Component}  from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native'
export const Modal = (props) =>
  <View style={styles.modalWrapper}>
    <View style={styles.modal}>
      {props.children}
    </View>
  </View>

const styles = StyleSheet.create({
  modalWrapper: {

  },
  modal: {

  }
})
