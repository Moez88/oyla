import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { appstyle } from '../../services/utilities/appstyle';
const CustomInput = ({
    placeholder,
    placeholderTextColor,
    customText,
    secureTextEntry,
    toggleImage,
    marginTop,
    backgroundColor,
    imageonpress,
    onChangeText,
    value,
    editable
}) => {
    return (
        <View style={[appstyle.custominputemailinputview, { marginTop, backgroundColor }]}>
            <Text style={appstyle.custominputemailtxt}>{customText}</Text>
            <View style={appstyle.custominputvieww}>
                <TextInput
                    placeholder={placeholder}
                    style={[appstyle.custominputplaceholder, { color: placeholderTextColor }]}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={onChangeText}
                    editable={editable}
                />
                <TouchableOpacity onPress={imageonpress}>
                    <Image
                        source={toggleImage}
                        style={appstyle.custominputeyetouchable}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};
CustomInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    placeholderTextColor: PropTypes.string,
    customText: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool.isRequired,
    onToggleSecureText: PropTypes.func.isRequired,
    toggleImage: PropTypes.number.isRequired,
    marginTop: PropTypes.number,
    toggleShowPassword: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string,
    imageonpress:PropTypes.func.isRequired,
    onChangeText: PropTypes.func, 
    value: PropTypes.string,
    editable:PropTypes.func,
};
export default CustomInput

