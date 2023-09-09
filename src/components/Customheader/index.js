import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { appstyle } from '../../services/utilities/appstyle';
const CustomHeaderView = ({ text, textColor, backgroundColor, imageSource, customStyle, imageonpress }) => {
  return (
    <View style={[appstyle.headerviewsignupv1, { backgroundColor }, customStyle]}>
      <View style={appstyle.headerviewtouchableview}>
        <TouchableOpacity onPress={imageonpress}>
          <Image source={imageSource} style={appstyle.backarrowimage} />
        </TouchableOpacity>
      </View>
      <View style={appstyle.headertextview}>
        <Text style={[appstyle.headerviewsignupt1, { color: textColor }]}>{text}</Text>
      </View>
    </View>
  );
};
CustomHeaderView.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  imageSource: PropTypes.number.isRequired,
  customStyle: PropTypes.object,
  imageonpress: PropTypes.func
};
export default CustomHeaderView;
