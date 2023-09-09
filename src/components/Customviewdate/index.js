import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import PropTypes from 'prop-types';
import { inputtxt, inputyellow, white } from '../../services/utilities/colors';
import { appstyle } from '../../services/utilities/appstyle';

const CustomDateView = ({ day, date, month, isSelected, onPress }) => {
  const containerStyle = {
    ...appstyle.datesmallview,
    backgroundColor: isSelected ? inputyellow : white,
  };
  const handlePress = () => {
    // Call the onPress function passed as a prop
    onPress({ day, date, month });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={containerStyle}>
        <Text style={appstyle.datetxt1}>{day}</Text>
        <Text style={appstyle.datetxt2}>{date}</Text>
        <Text style={appstyle.datetxt3}>{month}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

CustomDateView.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CustomDateView;
