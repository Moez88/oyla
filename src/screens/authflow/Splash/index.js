import { View, Text, Image } from 'react-native'
import { useEffect } from 'react'
import React from 'react'
import { CustomImageBackground } from '../../../components'
import { bg, logo } from '../../../services/utilities/asset'
import { appstyle } from '../../../services/utilities/appstyle'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {

    useEffect(() => {
        AsyncStorage.getItem("User", async (error, data) => {
            if (data) {
                navigation.navigate('app', { screen: 'Home' });
            } else {
                console.log("data: ", data);
                navigation.navigate('auth', { screen: 'Login' });
            }
        })

    }, []);

    return (
        <CustomImageBackground
            source={bg}>
            <View style={appstyle.loginimageview1}>
                <Image
                    source={logo}
                    style={appstyle.loginimage} />
            </View>
        </CustomImageBackground>
    )
}
export default Splash
