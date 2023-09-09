import React, { useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { inputtxt, inputyellow, placeholdercolor, white, yellowshadow } from '../../services/utilities/colors';
import { appstyle } from '../../services/utilities/appstyle';

const TimeInputField = ({ placeholder, keyboardType, marginLeft, value, onchangetext, maxLength ,placeholderTextColor}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = {
    ...appstyle.timeinputfield,
    marginLeft: marginLeft,
    backgroundColor: isFocused ? inputyellow : white,
  };

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={containerStyle}>
        <TextInput
          style={appstyle.timeinput}
          placeholderTextColor={placeholdercolor}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onchangetext}
          maxLength={maxLength}
          onFocus={setIsFocused}
          onBlur={()=>setIsFocused(false)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

TimeInputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  marginLeft: PropTypes.number,
  value: PropTypes.string,
  onchangetext: PropTypes.func,
  maxLength: PropTypes.number,
};

TimeInputField.defaultProps = {
  keyboardType: 'default',
  marginLeft: 0,
};

export default TimeInputField;
