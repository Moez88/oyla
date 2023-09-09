import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import PropTypes from 'prop-types';
import { shadowyellow, white } from '../../services/utilities/colors';

const CustomPayment = ({ imageSource, style, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.paymentimageview, style]}>
        <Image 
          source={imageSource}
          style={styles.paymentimage}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

CustomPayment.propTypes = {
  imageSource: PropTypes.number.isRequired, 
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  paymentimageview: {
    height: responsiveHeight(13),
    width: responsiveWidth(28),
    backgroundColor: white,
    borderRadius: responsiveWidth(5),
    marginLeft: responsiveWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 9, 
    shadowColor: shadowyellow, 
  },
  paymentimage: {
    height: responsiveHeight(4),
    width: responsiveWidth(20),
  },
});

export default CustomPayment;
