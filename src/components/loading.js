import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {theme} from '../theme/theme';

export const Loading = ({visible}) => (
  <View style={visible ? loader.centering : loader.hideIndicator}>
    <ActivityIndicator size={24} />
  </View>
);

const loader = StyleSheet.create({
  centering: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  hideIndicator: {
    top: -100,
    opacity: 0,
    position: 'absolute',
  },
});
