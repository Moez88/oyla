import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { appstyle } from '../../services/utilities/appstyle';
const CustomImageBackground = ({ source, children }) => {
  return (
    <ImageBackground source={source} style={appstyle.imageBackground}>
      {children}
    </ImageBackground>
  );
};
CustomImageBackground.propTypes = {
  source: PropTypes.number.isRequired,
  children: PropTypes.node,
};
const styles = StyleSheet.create({
 
});
export default CustomImageBackground;
