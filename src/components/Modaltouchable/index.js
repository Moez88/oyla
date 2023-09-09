import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import PropTypes from 'prop-types';
import { inputelivation, touchabletxt } from '../../services/utilities/colors';
import { appstyle } from '../../services/utilities/appstyle';

const CustomTextWithMargin = ({ text, marginLeft, marginTop, showLine, textAlign,fontWeight,onPress }) => {
  return (
    <View style={[appstyle.fview, { marginLeft, marginTop }]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={[appstyle.firsttxt, { textAlign,fontWeight }]}>{text}</Text>
      </TouchableWithoutFeedback>
      {showLine && <View style={appstyle.horizontalLine} />}
    </View>
  );
};
CustomTextWithMargin.propTypes = {
  text: PropTypes.string.isRequired,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
  showLine: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  fontWeight: PropTypes.string,
};

CustomTextWithMargin.defaultProps = {
  showLine: true,
  textAlign: 'left', 
};
export default CustomTextWithMargin;
