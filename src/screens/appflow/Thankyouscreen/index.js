import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { CustomGradientButton, CustomImageBackground } from '../../../components';
import {  responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { gradienttxt, gradientyellow, inputyellow, thumbviewborder, white } from '../../../services/utilities/colors';
import { bg, facebook, instagram, thumb } from '../../../services/utilities/asset';
import { appstyle } from '../../../services/utilities/appstyle';
const Thankyou = ({ navigation }) => {
    return (
        <CustomImageBackground source={bg}>
            <View style={{ flex: 1 }}>
                <View style={appstyle.thumbmainview}>
                    <View style={appstyle.thumbview}>
                        <Image
                            source={thumb}
                            style={appstyle.thumbimage} />
                    </View>
                </View>
                <View style={appstyle.thankuview}>
                    <Text style={appstyle.thankutxt}>Thank You</Text>
                </View>
                <View style={appstyle.appview}>
                    <Text style={appstyle.apptxt}>Thanks for using our app, we hope</Text>
                    <Text style={appstyle.apptxt}>you like it and use it again</Text>
                </View>
                <View style={appstyle.facebookinstaview}>
                    <Image
                        source={facebook}
                        style={appstyle.facebookimage} />
                    <Image
                        source={instagram}
                        style={appstyle.instaimage} />
                </View>
                <View style={appstyle.gohomebuttonview}>
                    <CustomGradientButton
                        text='Go Home'
                        colors={[white, gradientyellow]}
                        color={gradienttxt}
                        onPress={() => navigation.navigate('TabScreens', { screen: "Home" })}
                        customStyle={{
                            paddingBottom: responsiveHeight(2.5),
                            paddingTop: responsiveHeight(2.5),
                            paddingLeft: responsiveWidth(15),
                            paddingRight: responsiveWidth(15),
                        }} />
                </View>
            </View>
        </CustomImageBackground>
    );
};
export default Thankyou

