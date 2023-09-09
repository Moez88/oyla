import React from 'react';
import { View, Text, Image, TouchableOpacity,TextInput ,TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import { gradienttxt, locationtxt } from '../../services/utilities/colors';
import { appstyle } from '../../services/utilities/appstyle';
const LocationInput = ({ locationText, customMarginTop, imageSource, onPressImage,value,placeholder,placeholderpress,editable,onChangeText }) => {
  return (
    <View style={[appstyle.locationinput, { marginTop: customMarginTop }]}>
      <Text style={appstyle.locationtxt}>{locationText}</Text>
      <TouchableOpacity onPress={placeholderpress}>
      <TextInput 
      placeholder={placeholder}
      placeholderTextColor={locationtxt}
      editable={editable}
      style={appstyle.enteraddresstxt}
      value={value}
      onChangeText={onChangeText}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressImage}>
        <Image style={appstyle.locationvector} source={imageSource} />
      </TouchableOpacity>
    </View>
  );
};
LocationInput.propTypes = {
  locationText: PropTypes.string.isRequired,
  addressText: PropTypes.string.isRequired,
  oiltxt: PropTypes.string.isRequired,
  customMarginTop: PropTypes.number,
  imageSource: Image.propTypes.source,
  onPressImage: PropTypes.func,
  placeholder:PropTypes.string,
  placeholderpress:PropTypes.func,
  editable:PropTypes.bool,
  value:PropTypes.string,
  onChangeText:PropTypes.func

};
export default LocationInput;
