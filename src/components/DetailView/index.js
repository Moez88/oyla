import React from 'react';
import { View, Text } from 'react-native';
import { appstyle } from '../../services/utilities/appstyle';
const DetailView = ({ customText }) => {
    return (
        <View style={appstyle.detailview}>
            <Text style={appstyle.detailtxt}>{customText}</Text>
        </View>
    );
};
DetailView.defaultProps = {
    customText: 'Please Enter Details'
};
export default DetailView;
