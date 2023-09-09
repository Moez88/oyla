import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { locationback } from '../../services/utilities/colors';
import { appstyle } from '../../services/utilities/appstyle';
const CustomGradientButton = ({
  text,
  colors,
  onPress,
  marginTop,
  color,
  fontSize,
  customStyle,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[appstyle.touchable, customStyle]}>
      <TouchableOpacity onPress={onPress} style={[appstyle.touchableContent, { marginTop }]}>
        <Text style={[appstyle.txttouch, { color, fontSize }]}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
CustomGradientButton.propTypes = {
  text: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPress: PropTypes.func.isRequired,
  marginTop: PropTypes.number.isRequired,
  customBackgroundColor: PropTypes.string.isRequired,
  customTextColor: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
};
const styles = StyleSheet.create({
 
})
export default CustomGradientButton;
