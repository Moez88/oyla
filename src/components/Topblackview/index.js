import React from 'react';
import { View, Text } from 'react-native';
import { appstyle } from '../../services/utilities/appstyle';
const Topview = ({ customText }) => {
    return (
        <View style={appstyle.topblackviewhome}>
            <Text style={appstyle.hometopblackviewtxt}>{customText}</Text>
        </View>
    );
};
Topview.defaultProps = {
    customText: 'Default Text'
};
export default Topview;
