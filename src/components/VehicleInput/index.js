import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { appstyle } from '../../services/utilities/appstyle';
const CustomVehicleInput = ({ customText, placeholder, containerStyle, textStyle, inputStyle,value ,onChangeText,placeholderTextColor}) => {
  return (
    <View style={[appstyle.vehicleinput, containerStyle]}>
      <Text style={[appstyle.vehicletxt, textStyle]}>{customText}</Text>
      <TextInput
        style={[appstyle.vehicleinputfield, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor} 
        value={value}
        
        onChangeText={onChangeText}
        />
    </View>
  );
};
CustomVehicleInput.propTypes = {
  customText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  value:PropTypes.string,
  onChangeText:PropTypes.string,
  placeholderTextColor:PropTypes.any
  
};
export default CustomVehicleInput;
