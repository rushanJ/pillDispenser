import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 26,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default memo(Paragraph);
